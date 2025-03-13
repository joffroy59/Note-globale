---
ELN info:
  template: <% tp.file.title %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0


ollama_model_dir: I:\IA\ollama\models
---
<%*
  let baseFolder = "Idea"

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
let note = await tp.system.prompt("Note", null, true, true);
%>
---
<%* tp.file.cursor() %>
`````ad-attention
title: Idea
collapse: open
#idea

````ad-tip
Source : <% url %>

image: ![](<% image %>)

````

````ad-note
title: Note
<% note %>

````

`````
