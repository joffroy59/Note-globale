 <%*
let defaultValue = "Note"  
let typeList = ["Note", "Idea", "Other"]
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Insert Note - ${type}]]`);
%>