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
<%*
tR+= await tp.file.include(`[[Templates/elements/Insert - IA - Comfy UI - Test]]`);
%>
---
<%*   if (package == new_test_workflow_note) { -%>
#### ComfyUI 
[[#Test avec Comfy UI directement Workflow]]

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