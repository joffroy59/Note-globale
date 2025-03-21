## Test reproduction en local
<%*
const new_test_workflow_note = "New Note Test Workflow"

let packageList = [
	new_test_workflow_note, 
	"ComfyUI", 
	"Inference", 
	"Stable Diffusion WebUI", 
	"Stable Diffusion WebUI Forge", 
	"SDFX", 
	"SwarmUI", 
	"InvokeAI"]

	package = await tp.system.suggester((item) => item, packageList, false, "StabilityMatrix - Test Avec :");
-%>

<%* if (package) { -%>
---
### StabilityMatrix 
<%*   if (package == new_test_workflow_note) { -%>
#### ComfyUI 
[[#Test avec Comfy UI directement Workflow]]

---

![[Templates/elements/Add - IA - Action - Test Worflow ComfyUI]]
<%*
tR+= await tp.file.include(`[[Templates/elements/Insert - IA - Comfy UI - Test]]`);
%>
---


<%*   } else { -%>
#### <% package %> 
##### Config
Seed : 
##### Execution
##### Result
---
<%*   } -%>
<%* } -%>