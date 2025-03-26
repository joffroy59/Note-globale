<%*
let baseFolder = "IA/Application"
const templateName = "Templates/IA/Create IA - Task - Application"
const defaultTitle = "IA Application - "

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true, "/" + baseFolder));
}

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/application   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>