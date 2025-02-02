 
 <%*
let defaultValue = "WIP IA"  
let typeList = ["Model", "ComFyUI - Flux", "IA civitai"]
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Insert Wip IA - ${type} v2]]`);
%>
