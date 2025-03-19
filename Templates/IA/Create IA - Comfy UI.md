---
<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;
const config_wip = ia_settings.wip

let title = await tp.file.title

let parts = title.split("-")
let type = parts[0].trim().replace(/IA/g, '').trim()
console.log(`Found type: ${type}`)
const config_wip_type = config_wip[type]
alert(config_wip_type)
let sub_type = parts[1].trim()
console.log(`Found sub type: ${sub_type}`)
let tag_list =  config_wip_type.tag.split(" ")
let tag_type_list = config_wip_type.tag_type?config_wip_type.tag_type.split(" "):[]
for(let i=0; i<tag_type_list.length; i++){
	tag_list.push(tag_type_list[i] + "/" + sub_type.toLowerCase().replace(/ /g,'_').replace(/\./g,'_'))
}

const config_wip_subtype = config_wip_type[sub_type]

alert(config_wip_subtype.tag[0])
let tag_type_sub_type_list = config_wip_subtype.tag?config_wip_subtype.tag:[]
for(let i=0; i<tag_type_sub_type_list.length; i++){
	tag_list.push(tag_type_sub_type_list[i] + "/" + sub_type.toLowerCase().replace(/ /g,'_').replace(/\./g,'_'))
}
%>
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
<%* for(let i=0; i<tag_list.length; i++){
    let tag = tag_list[i].trim().replace(/\#/g,'')-%>
  - <% tag %>
<%* } -%>
---
<%*
let workflowDirList = [
	"D:\\IA\\ComfyUI workflow\\Download",
	"D:\\IA\\ComfyUI workflow\\totest",
	"D:\\IA\\ComfyUI workflow",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]

let worflowBaseFolder= workflowDirList[0]
let defaultWorkflowName = "workflow_test"

let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
  title = await tp.system.prompt("Title :");
  if (!title) title = defaultTitle
  await tp.file.rename(`${title}`);
}

let worflow = await tp.system.prompt("Worflow file name  (no extension)");

if (worflow){
	worflowBaseFolder = await tp.system.suggester((item) => item, workflowDirList, true, "Worflow file path");
} else {
	worflow = defaultWorkflowName
}

workflowFolder = "file:///" + worflowBaseFolder.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C"

let url = await tp.system.prompt("url");

let image = await tp.system.prompt("Image");
let generationData = await tp.system.prompt("Generation Data", null, false, true);
let nodeWorfklow = await tp.system.prompt("Nodes", null, false, true);
let note = await tp.system.prompt("Note", null, true, true);

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
let hasTip = (url || image)
-%>
<%* if (hasTip) { -%>
````ad-tip
<%*   if (url) { -%>
Source : <% url %>
<%*   } -%>

worflow: <% worflow %>
⭐🚧 [<% worflow %>.json](<% workflowFolder + worflow.replace(/ /g, '%20') %>.json)
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

````ad-warning
title: Nodes
collapse: closed

<% nodeWorfklow %>

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


