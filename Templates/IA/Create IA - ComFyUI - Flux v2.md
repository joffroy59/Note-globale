---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
---
<%*
let workflowDirList = [
	"D:\\IA\\ComfyUI workflow\\totest", 
	"D:\\IA\\ComfyUI workflow", 
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto", 
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]

let worflowBaseFolder= workflowDirList[0]
let defaultWorkflowName = "workflow_test"
  
  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let worflow = await tp.system.prompt("Worflow file path");

if (worflow){
	worflowBaseFolder = await tp.system.suggester((item) => item, workflowDirList);
} else {
	worflow = defaultWorkflowName
}

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

```ad-info
title: Workflow Directories
- 
<% note %> 

```

`````

[[<% title %>]]

<%*
const tasks = ["Buy groceries", "Read a book", "Exercise", "Write a journal"];
for (task of tasks)
    tR += "- " + task + "\n";
%>


---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>

