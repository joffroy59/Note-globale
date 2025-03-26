 <%*
let baseFolder = "WIP"
const templateName = "Templates/Inserts/Create Task WIP - Graph"

let title = await tp.system.prompt("Title (create Note Link)", null, true, false);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true, "/" + baseFolder));
}

%>   - [/] [[<% baseFolder %>/<% title %>]] #status/wip    #task  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>