<%*
let baseFolder = "IA/ComfyUI/Flux"
const templateName = "Templates/IA/Create IA - Task - ComFyUI - Flux"
const defaultTitle = "ComfyUI-Flux - "

let title = await tp.system.prompt("Title from page", defaultTitle);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true, "/" + baseFolder));
}

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #task #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>