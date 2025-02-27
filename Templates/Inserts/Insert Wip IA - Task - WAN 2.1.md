<%*
let baseFolder = "IA/ComfyUI/WAN 2.1"
const defaultTitle = "WAN 2.1"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/IA/Create IA - Task - ComFyUI - WAN 2.1"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/comfyui   #WAN_2_1 ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>