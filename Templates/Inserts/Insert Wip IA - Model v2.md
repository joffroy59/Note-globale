---
ollama_model_dir: I:\IA\ollama\models
---
<%*
let baseFolder = "IA/Model"
const defaultTitle = "IA Model"


//let defaultValue = "WIP IA"  
let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/IA/Create IA - Model v2"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

_%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - Model
collapse: open

- [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/model  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

---

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Ollama model]" + "(<file:///" + this.ollama_model_dir + ">)"`
```
`````