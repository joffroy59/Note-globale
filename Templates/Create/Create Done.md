---
ELN info:
  template: <% tp.config.template_file.name %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0

ollama_model_dir: I:\IA\ollama\models
---
<%*
  let baseFolder = "Done"

  title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title :");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  }

let url = await tp.system.prompt("url");
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note", null, true, true);
%>
---
<%* tp.file.cursor() %>
`````ad-done
title: DONE
collapse: open
#done

<% note %>

````ad-tip
Source : <% url %>

image: ![](<% image %>)

````

`````
