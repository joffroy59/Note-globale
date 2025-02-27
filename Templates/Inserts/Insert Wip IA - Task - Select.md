 <%*
let defaultValue = "WIP IA"

let typeList = await tp.user.ComFyUIType(tp)
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Insert Wip IA - Task - ${type}]]`);
%>