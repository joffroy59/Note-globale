<%*
let baseFolder = "IA/ComfyUI/Flux NF4"
const defaultTitle = "Flux NF4"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/IA/Create IA - Task - ComFyUI - Flux NF4"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/comfyui/flux  #flux_NF4➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>