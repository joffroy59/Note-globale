 
 <%*
let defaultValue = "WIP IA"  
let typeList = ["Model", "ComFyUI - Flux", "Autre2"]
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Insert Wip IA - ${type}]]`);
%>
