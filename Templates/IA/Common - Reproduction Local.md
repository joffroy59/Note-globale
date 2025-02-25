## Test reproduction en local
<%*
let packageList = [
	"ComfyUI", 
	"Inference", 
	"Stable Diffusion WebUI", 
	"Stable Diffusion WebUI Forge", 
	"SDX", 
	"SwarmUI", 
	"InvokeAI"]

	type = await tp.system.suggester((item) => item, packageList);
-%>

### StabilityMatrix 

<%*
for (package of packageList){
	if (type == package){
	    tR += "#### "  + package + "\n";
	    tR += "##### Config" + "\n";
	    tR += "##### Execution" + "\n";
	    tR += "##### Result" + "\n";
	}
}    
-%>
