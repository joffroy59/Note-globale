 <%*
let defaultValue = "WIP IA"  
let typeList = ["Generic", "Model", "ComFyUI - Flux", "IA civitai", "Application", "StabilityMatrix - Application"]
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Insert Wip IA - ${type} v2]]`);
%>