 <%*
let baseFolder = "WIP"
const templateName = "Templates/Inserts/Create Task WIP Obsidian"

let title = await tp.system.prompt("Title (create Note Link)", null, true, false);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]] #status/wip #status/next  #task #obsidian ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>