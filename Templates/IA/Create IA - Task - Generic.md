---
ELN info:
  template: <% tp.file.title %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0

ollama_model_dir: I:\IA\ollama\models
tags:
  - IA
  - status/wip
---
<%*
  let baseFolder = "IA"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title from page");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let url = await tp.system.prompt("url");

let entree = title ;
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
-%>
````ad-tip
Source : <% url %>

image: ![|400](<% image %>)

````

````ad-note
title: Note
<% note %> 

````
