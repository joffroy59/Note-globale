<%*
let baseFolder = "IA/Model"
const defaultTitle = "IA Model"

let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/IA/Create IA - Model v2"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/model  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>