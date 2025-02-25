---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
---
<%*
let workflowDirList = [
	"D:\\IA\\ComfyUI workflow\\Download", 
	"D:\\IA\\ComfyUI workflow\\totest", 
	"D:\\IA\\ComfyUI workflow", 
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto", 
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]

  title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title from page");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 

let sourceUrl = await tp.system.prompt("Source Url");

let entree = title ;
let image = await tp.system.prompt("Image");
let generationData = await tp.system.prompt("Generation Data", null, false, true);
let nodeWorfklow = await tp.system.prompt("Nodes", null, false, true);
let note = await tp.system.prompt("Note");
-%>
````ad-tip
Source : <% sourceUrl %>

image: ![|400](<% image %>)

````

````ad-quote
title: Generation data

<% generationData %> 

````

````ad-warning
title: Nodes

<% nodeWorfklow %> 

````

````ad-note
title: Note
<% note %> 

````
```ad-info
title: Workflow Directories
collapse: closed
<%*
for (workflowDir of workflowDirList)
    tR += "- " + "[" + workflowDir + "](file:///" + workflowDir.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C" + ")\n";
-%>
```



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


