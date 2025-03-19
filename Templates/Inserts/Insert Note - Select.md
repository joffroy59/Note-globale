 <%*
let defaultValue = "Note"
let typeList = ["Note", "Idea", "Other"]
let type = await tp.system.suggester((item) => item, typeList, true, "Type")

tR+= await tp.file.include(`[[Templates/Inserts/Insert Note - ${type}]]`);
%>