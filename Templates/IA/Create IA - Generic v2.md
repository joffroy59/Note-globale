---
ELN info:
  template: <% tp.config.template_file.name %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0

project:
  name: IA

wip:
  type: IA
  description: Travaux sur IA

ollama_model_dir: I:\IA\ollama\models
---
<%*
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
let note = await tp.system.prompt("Note", null, true, true);
%>
---
<%* tp.file.cursor() %>
``````ad-example
title: WIP IA - Generic
collapse: open

````ad-tip
Source : <% url %>

image: ![](<% image %>)

````

````ad-note
title: Note
<% note %>

````

``````
