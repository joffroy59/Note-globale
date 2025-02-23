 <%*
let baseFolder = "ToView"
const defaultTitle = "ToView"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/Inserts/Create Task ToView"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [ ] [[<% title %>]] #toview  ➕ <% tp.date.now() %> 
