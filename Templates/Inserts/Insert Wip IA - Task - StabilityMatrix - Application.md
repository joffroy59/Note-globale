<%*
let baseFolder = "IA/StabilityMatrix/Application"
const templateName = "Templates/IA/Create IA - Task - StabilityMatrix - Application"
const defaultTitle = "StabilityMatrix - Application - "

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #task  #IA #IA/StabilityMatrix   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>