<%*
  let baseFolder = "IA/ComfyUI/civitai"
  
  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let url = await tp.system.prompt("url de la source");

let defaultValue = "WIP IA civitai"  
let entree = url + "");
if (!entree) entree = defaultValue


%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] [[IA/Sandbox/Test/<% entree %>]]  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

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
