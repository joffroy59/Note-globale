## Test reproduction en local
<%*
let packageList = [
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

#### <% package %> 
##### Config
Seed : 
##### Execution
##### Result

---
<%* } -%>