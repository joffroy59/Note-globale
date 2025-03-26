<%*
let baseFolder = "IA/ComfyUI/civitai"
const defaultTitle = "civitai - "

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/IA/Create IA - Task - ComFyUI - civitai"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true, "/" + baseFolder));
}

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #task  #IA #IA/civitai   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>