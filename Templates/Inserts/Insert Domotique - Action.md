 <%*
let baseFolder = "Domotique/Actions"
const defaultTitle = "Domotique - Action"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/Create/Create Domotic Action"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]] #status/wip #domotique/action #domotique   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>