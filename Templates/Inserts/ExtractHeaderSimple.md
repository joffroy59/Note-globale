<%*
// Define the maximum length of the heading
const MAX_HEADING_LENGTH = 50;


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
//const heading = await tp.system.prompt('Enter the new heading or escape/cancel to use a block reference')
let heading = text
// If the heading is longer than the maximum length, truncate it to the maximum length
if (heading.length > MAX_HEADING_LENGTH) {
    heading = heading.substring(0, MAX_HEADING_LENGTH) + "..."
}

text = `\n\n### ${heading.trim()}\n\n${text.trim()}\n\n`
embed = `[[${destination.slice(0, -3)}#${heading}]]`

// Add the text to the destination note
await app.vault.adapter.append(destination, text)

// Replace the selection with an embedded link to the new location
app.workspace.activeEditor.editor.replaceSelection(embed)
-%>