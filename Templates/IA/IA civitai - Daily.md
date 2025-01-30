<%*
  let baseFolder = "IA/ComfyUI/civitai"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let url = await tp.system.prompt("url");

let entree = title ;
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---

<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] [[<% baseFolder %>/<% entree %>]]  #status/wip #IA #IA/comfyui/civitai  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
Source : <% url %>

image: <% image %> 

```

```ad-note
title: Note
<% note %> 

```

`````
