<%*
// Get the selected text
let text = app.workspace.activeEditor.getSelection()

// Get the desired file - credits to https://forum.obsidian.md/t/67901/4
const files = app.vault.getMarkdownFiles().map(file => {
  const fileCache = app.metadataCache.getFileCache(file)
  file.display = file.basename
  if (fileCache?.frontmatter?.aliases) {
    if (Array.isArray(fileCache.frontmatter.aliases)) {
      file.display = `${file.basename}\n${fileCache.frontmatter.aliases.join(", ")}`
    } else if (typeof fileCache.frontmatter.aliases === 'string') {
      file.display = `${file.basename}\n${fileCache.frontmatter.aliases}`
    }
  }
  return file
})
const destination = (await tp.system.suggester(files.map(x => x.display), files, false, 'Start typing any note name...', 10)).path

// Get the heading
let embed
const heading = await tp.system.prompt('Enter the new heading or escape/cancel to use a block reference')
if (heading) {
  text = `\n\n## ${heading.trim()}\n\n${text.trim()}\n\n`
  embed = `![[${destination.slice(0, -3)}#${heading}]]\n`
} else {
  // Block reference
  const ref = Math.random().toString(36).slice(2, 7)
  text = `\n\n${text.trim()} ^${ref}\n\n`
  embed = `![[${destination.slice(0, -3)}#^${ref}]]\n`
}

// Add the text to the destination note
await app.vault.adapter.append(destination, text)

// Replace the selection with an embedded link to the new location
app.workspace.activeEditor.editor.replaceSelection(embed)
-%>