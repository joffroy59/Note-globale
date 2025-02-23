---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
baseFolder: IA/ComfyUI/Flux
---
<%*
let workflowFolder= "file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let worflow = await tp.system.prompt("Worflow file path");

let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a content :","[[" + worflow + "]]");
if (!entree) entree = defaultValue


let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] <% entree %>  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
source: 

worflow: <% worflow %> 
[<% worflow %>.json](<% workflowFolder + worflow.replace(/ /g, '%20') %>.json)


image: ![](<% image %>)


```

```ad-note
title: Note
<% note %> 

```

`````
