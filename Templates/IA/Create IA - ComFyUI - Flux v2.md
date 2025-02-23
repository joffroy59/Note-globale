---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
---
<%*
let workflowDirList = ["D:\\IA\\ComfyUI workflow\\totest", "D:\\IA\\ComfyUI workflow", "D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto", "D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]
let workflowFolder= "file:///" + workflowDirList
  
  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let worflow = await tp.system.prompt("Worflow file path", title);
let worflowBaseFolder = "";

if (worflow)
	worflowBaseFolder = await tp.system.suggester((item) => item, workflowDirList);
	workflowFolder = "file:///" + worflowBaseFolder.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C"
let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a content :","[[" + title + "]]");
if (!entree) entree = defaultValue

let sourceUrl = await tp.system.prompt("source Url");
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

```ad-tip
Source : <% sourceUrl %>

worflow: <% worflow %> 
🚧 [<% worflow %>.json](<% workflowFolder + worflow.replace(/ /g, '%20') %>.json)
✅ #todo 

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

