---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
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


let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI
collapse: open

```ad-tip
source: 

worflow: <% worflow %> 
[<% worflow %>.json](<% workflowFolder + worflow.replace(/ /g, '%20') %>.json)


image: <% image %> 


```

```ad-note
title: Note
<% note %> 

```

`````

[[<% title %>]]

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>

