<%*
let workflowFolder= "file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let url = await tp.system.prompt("url");

let defaultValue = "WIP IA civitai"  
let entree = await tp.system.prompt("Enter a content :","" + url + "");
if (!entree) entree = defaultValue


let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---

<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] [[IA/Sandbox/Test/<% entree %>]]  #status/wip #IA #IA/comfyui/civitai  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
Source : <% url %>

image: <% image %> 

```

```ad-note
title: Note
<% note %> 

```

`````
