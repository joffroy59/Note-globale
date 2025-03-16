<%*
// Define the maximum length of the heading
const MAX_HEADING_LENGTH = 75;


// Get the selected text
let text = app.workspace.activeEditor.getSelection().split("\n")[0]

// Get the heading
let heading = ""
// If the heading is longer than the maximum length, truncate it to the maximum length
if (text.length > MAX_HEADING_LENGTH) {
    heading = text.substring(0, MAX_HEADING_LENGTH) + "...\n"
    heading += text + "\n"
} else {
	heading = text
}
text = `\n\n### ${heading.trim()}\n`
text += "#todo" + "\n"
let embed = `[[#${heading}]]`

// Add the text to the destination note
await app.vault.adapter.append(app.workspace.activeEditor.file.path, text)

// Replace the selection with an embedded link to the new location
app.workspace.activeEditor.editor.replaceSelection(embed)

//app.workspace.activeEditor.editor.setCursor({line: app.workspace.activeEditor.editor.lastLine(), ch: 0});
-%>

