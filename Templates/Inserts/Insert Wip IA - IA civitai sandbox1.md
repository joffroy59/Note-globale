<%*
let baseFolder = "IA/ComfyUI/civitai"
const folderPath = "/IA/ComfyUI/civitai"
const fileName = "test12";
const templateName = "Templates/IA/IA civitai - Daily sandbox1"

let existing = tp.file.find_tfile(fileName);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), fileName, true, app.vault.getAbstractFileByPath(folderPath)));
}

await tp.file.move(folderPath + "/" + fileName, tp.file.find_tfile(fileName));

//existing = tp.file.find_tfile(createdFileDisplay);
//await tp.file.move(`${folderPath}/${fileName}`);

_%>

---

<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] [[<% baseFolder %>/<% fileName %>]]  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>
````` 


