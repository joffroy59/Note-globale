 <%*
let baseFolder = "Tasks"
const templateName = "Templates/Inserts/Create Todo"
const defaultTitle = "Todo"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [ ] [[<% baseFolder %>/<% title %>]]  #todo #task ➕ <% tp.date.now() %>