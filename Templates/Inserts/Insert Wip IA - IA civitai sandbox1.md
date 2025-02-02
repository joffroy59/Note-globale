<%*
let baseFolder = "IA/ComfyUI/civitai"
const folderPath = "/IA/ComfyUI/civitai"

const defaultTitle = "civitai"
let title = await tp.system.prompt("Title from page", defaultTitle);

const templateName = "Templates/IA/IA civitai - Daily sandbox1"


let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move(folderPath + "/" + title, tp.file.find_tfile(title));

_%>

---

<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>
````` 


