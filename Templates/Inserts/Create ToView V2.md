---
ollama_model_dir: I:\IA\ollama\models
tags:
  - toview
---
<%*
  let baseFolder = "ToView"

  title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title :");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let entree = title ;
let url = await tp.system.prompt("url");
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>

<%* tp.file.cursor() %> 
`````ad-important
title: To view
collapse: open
#toview 

````ad-tip
Source : <% url %>

image: ![](<% image %>)

````

````ad-note
title: Note
<% note %> 

````
`````
