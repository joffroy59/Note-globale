<%*
  let baseFolder = "IA/ComfyUI/civitai"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let defaultValue = "WIP IA civitai"  
let entree = await tp.system.prompt("Enter a title :");
if (!entree) entree = defaultValue

let url = await tp.system.prompt("url de la source");
%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - civitai
collapse: open

- [/] [[<% baseFolder %>/<% entree %>]]  #status/wip #IA #IA/comfyui/civitai  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-info 
Source : <% url %>
```

```meta-bind-button
label: Create Note
icon: fas-add
hidden: false
class: ""
tooltip: ""
id: insert-ia-civitai
style: default
actions: []

```

````` 
