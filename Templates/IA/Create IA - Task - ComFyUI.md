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

workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project

tags:
  - status/wip
  - IA
  - IA/comfyui
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

let worflow = await tp.system.prompt("Worflow file path", title);

let defaultValue = "WIP IA"
let entree = await tp.system.prompt("Enter a content :","[[" + title + "]]");
if (!entree) entree = defaultValue

let url = await tp.system.prompt("source Url");
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");

const question = "Tasks ?"
let taskEnable = (await tp.system.suggester(['Yes','No'],['Yes','No'], false, question)) === 'Yes';

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
-%>
```ad-tip
<%* if (url) { -%>
Source : <% url %>
<%* } -%>

worflow: <% worflow %>
[<% worflow %>.json](<% workflowFolder + worflow.replace(/ /g, '%20') %>.json)


<%* if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%* } else if(image) { -%>
![|400](<% image %>)
<%* } -%>
```

```ad-note
title: Note
<% note %>

```


<%* if (taskEnable) { -%>
---
## Tasks
- [ ] Task1

<%* } -%>

---

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow Auto]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>




