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

workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
tags:
  - status/wip
  - IA
  - IA/StabilityMatrix
  - IA/comfyui
---
<%*
let workflowDirList = [
	"D:\\IA\\ComfyUI workflow\\Download",
	"D:\\IA\\ComfyUI workflow\\totest",
	"D:\\IA\\ComfyUI workflow",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]

let worflowBaseFolder = workflowDirList[0]
let defaultWorkflowName = "workflow_test"

let title = tp.file.title
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
  title = await tp.system.prompt("Title :");
  if (!title) title = defaultTitle
  await tp.file.rename(`${title}`);
}

let workflow_filename = await tp.system.prompt("Worflow file name  (no extension)");

if (workflow_filename){
	worflowBaseFolder = await tp.user.copy_file_use_settings(tp, `${workflow_filename}.json`)
} else {
	worflowBaseFolder = "workflow_path"
	workflow_filename = defaultWorkflowName
}

workflowFolder = "file:///" + worflowBaseFolder.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C"

let url = await tp.system.prompt("url");

let image = await tp.system.prompt("Image");
let generationData = await tp.system.prompt("Generation Data", null, false, true);
let note = await tp.system.prompt("Note", null, true, true);

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
let hasTip = (url || image || workflow_filename)
-%>
<%* if (hasTip) { -%>
````ad-tip
<%*   if (url) { -%>
Source : <% url %>
<%*   } -%>

worflow: <% workflow_filename %>
⭐🚧 [<% workflow_filename %>.json](<% workflowFolder + workflow_filename.replace(/ /g, '%20') %>.json)
✅ #todo

<%*   if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%*   } else if(image) { -%>
![](<% image %>)
<%*   } -%>
````
<%* } -%>

<%* if (note) { -%>
````ad-note
title: Note
<% note %>

````
<%* } -%>

<%*
tR+= await tp.file.include(`[[TaskList Simple]]`);
%>

---

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow Auto]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>


