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
tags:
  - IA
  - IA/comfyui
  - IA/comfyui/flux
---

<%*
let workflowFolder= "file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  }

let workflow = await tp.system.prompt("Worflow file name  (no extension)", title);

let defaultValue = "WIP IA"
let entree = await tp.system.prompt("Enter a content :","[[" + title + "]]");
if (!entree) entree = defaultValue


let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note", null, true, true);
%>
---
<%* tp.file.cursor() %>
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] <% entree %>  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
source:

workflow: <% workflow %>
[<% workflow %>.json](<% workflowFolder + workflow.replace(/ /g, '%20') %>.json)


image: ![](<% image %>)


```

```ad-note
title: Note
<% note %>

```

`````

[[<% title %>]]

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>

