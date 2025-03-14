<%*
let baseFolder = "IA/Model"
const templateName = "Templates/IA/Create IA - Task - Model"
const defaultTitle = "model - "

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip   #task  #IA #IA/model  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>