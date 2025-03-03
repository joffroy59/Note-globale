 <%*
let baseFolder = "WIP"
const defaultTitle = "WorkInProgress"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/Inserts/Create Task WIP Obsidian"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]] #status/wip  #obsidian ➕ {{DATE}} 🛫 {{DATE}} 