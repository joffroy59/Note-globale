 <%*
let baseFolder = "WIP"
const defaultTitle = "WIP"

let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/Inserts/Create WIP v2"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

_%>
---
<%* tp.file.cursor() %> 
- [/] [[<% baseFolder %>/<% title %>]] #status/wip  ➕ {{DATE}} 🛫 {{DATE}} 
