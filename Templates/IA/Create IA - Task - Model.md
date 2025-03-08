---
ELN info:
  template: <% tp.file.title %>
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
tags:
  - status/wip
  - IA
  - IA/model
---
<%*
  let baseFolder = "IA/Model"

  title = tp.file.title
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

const question = "Tasks ?"
let taskEnable = (await tp.system.suggester(['Yes','No'],['Yes','No'], false, question)) === 'Yes';

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
-%>
````ad-tip
<%* if (url) { -%>
Source : <% url %>
<%* } -%>

<%* if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%* } else if(image) { -%>
![](<% image %>)
<%* } -%>
````


````ad-note
title: Note
<% note %>

````

<%* if (taskEnable) { -%>
---
## Tasks
- [ ] Task1
---
<%* } -%>


```ad-tip
title: Ollama Models
collapse: Closed

- `= "[Ollama model]" + "(<file:///" + this.ollama_model_dir + ">)"`
```

---

