<%*
let baseFolder = "IA/Wip"
const templateName = "Templates/IA/Create IA - Task - Generic"
const defaultTitle = "IA Wip - "

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true, "/" + baseFolder));
}

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>