---
ollama_model_dir: I:\IA\ollama\models
---
<%*
  let baseFolder = "Tasks"

  title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title :");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let url = await tp.system.prompt("url");
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
`````ad-todo
title: Todo
collapse: open
#todo 

<% note %> 

````ad-tip
Source : <% url %>

image: ![](<% image %>)

````

`````
