---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
---
<%*
  let baseFolder = "IA/ComfyUI/civitai"

  //let 
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
let generationData = await tp.system.prompt("Generation Data", null, false, true);
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
``````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

````ad-tip
Source : <% url %>

image: ![](<% image %>)

````

````ad-quote
title: Generation data

<% generationData %> 

````

````ad-note
title: Note
<% note %> 

````

``````

---
## Test reproduction en local
### StabilityMatrix 
#### Inference
##### Config
##### Execution
##### Result

#### ComfyUI
##### Config
##### Execution
##### Result

#### Stable Diffusion WebUI 
##### Config
##### Execution
##### Result

#### Stable Diffusion WebUI Forge
##### Config
##### Execution
##### Result
#### SDX
##### Config
##### Execution
##### Result

#### SwarmUI
##### Config
##### Execution
##### Result

#### InvokeAI
##### Config
##### Execution
##### Result


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


