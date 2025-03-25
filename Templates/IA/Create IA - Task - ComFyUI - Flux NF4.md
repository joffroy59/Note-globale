---
<%*
const ia_settings_file = "Assets/IA Settings.md";
const settings  = p.user.get_settings(ia_settings_file)

const sub_type_list = settings.image.type.flux

["NF4-BnB", "Schnell NF4-BnB","DEV FP8 - Kijai","Schnell FP8 Kijai","Schnell"]
let fux_sub_type = await tp.system.suggester((item) => item, sub_type_list, true, "Flux NF4 sub type:");
-%>
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
  - IA/comfyui/flux
   - flux_NF4➕
   - <% fux_sub_type.toLowerCase() %>
---
<%*
let workflowDirList = [
	"D:\\IA\\ComfyUI workflow\\Download",
	"D:\\IA\\ComfyUI workflow\\totest",
	"D:\\IA\\ComfyUI workflow",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]

let workflowBaseFolder = workflowDirList[0]
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
  workflowBaseFolder = await tp.user.copy_file_use_settings(tp, `${workflow_filename}.json`, "workflow")
} else {
	workflowBaseFolder = "workflow_path"
	workflow_filename = defaultWorkflowName
}

workflowFolder = "file:///" + workflowBaseFolder.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C"

let url = await tp.system.prompt("url");

let image = await tp.system.prompt("Image");
let generationData = await tp.system.prompt("Generation Data", null, false, true);
let note = await tp.system.prompt("Note", null, true, true);

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
let hasTip = (url || image)
-%>
<%* if (hasTip) { -%>

````ad-tip
<%*   if (url) { -%>
Source : <% url %>
<%*   } -%>

workflow: <% workflow_filename %>
⭐🚧 [<% workflow_filename %>.json](<% workflowFolder + workflow_filename.replace(/ /g, '%20') %>.json)
✅ #todo

<%*   if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%*   } else if(image) { -%>
![|400](<% image %>)
<%*   } -%>
````
<%* } -%>

````ad-quote
title: Generation data
collapse: closed

<% generationData %>

````

<%* if (note) { -%>
````ad-note
title: Note
<% note %>

````
<%* } -%>

```ad-info
title: Workflow Directories
collapse: closed
<%*
for (workflowDir of workflowDirList)
    tR += "- " + "[" + workflowDir + "](file:///" + workflowDir.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C" + ")\n";
-%>
```


<%*
tR+= await tp.file.include(`[[TaskList Simple]]`);
%>

---

<%*
tR+= await tp.file.include(`[[Common - Reproduction Local]]`);
%>




---
## Local

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>


