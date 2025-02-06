 <%*
let defaultValue = "Note"  
let typeList = ["Todo", "Done", "Win", "ToView"]
let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[Templates/Inserts/Insert Todo - ${type}]]`);
%>