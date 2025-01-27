 
 <%*
let defaultValue = "WIP IA"  
let type = await tp.system.suggester((item) => item, ["Model", "Autre1", "Autre2"])

tR+= await tp.file.include(`[[Insert Wip IA - ${type}]]`);
%>