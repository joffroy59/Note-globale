<%*
var os = require('os');

// Define the maximum length of the heading
const MAX_HEADING_LENGTH = 75;

// Get the selected text
let text  = app.workspace.activeEditor.getSelection()

// Get the heading
let heading = ""
// If the heading is longer than the maximum length, truncate it to the maximum length
if (text.length > MAX_HEADING_LENGTH) {
    heading = text.substring(0, MAX_HEADING_LENGTH) + "..." + os.EOL
    heading += text + os.EOL
} else {
	heading = text
}
text = `${os.EOL}${os.EOL}### ${heading.trim()}${os.EOL}`
text += "#todo" + os.EOL
let embed = `[[#${heading}]]`


app.workspace.activeEditor.editor.replaceSelection(embed)
-%>
<% text %>