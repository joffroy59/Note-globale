 <%*
let defaultValue = "WIP IA"  
let typeList = ["Generic", "Model", "ComFyUI", "ComFyUI - Flux", "civitai", "Flux NF4", "Application", "StabilityMatrix - Application"]
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Insert Wip IA - Task - ${type}]]`);
%>