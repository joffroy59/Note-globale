<%*
let baseFolder = "IA/ComfyUI"
const defaultTitle = "ComfyUI - "

let title = await tp.system.prompt("Title from page", defaultTitle);

const templateName = "Templates/IA/Create IA - ComFyUI v2"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/comfyui   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>