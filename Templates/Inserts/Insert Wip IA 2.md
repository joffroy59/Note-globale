 
 <%*
let defaultValue = "WIP IA"  
let type = await tp.system.suggester((item) => item, ["Model", "Autre1", "Autre2"])
let templateName = "Insert Wip IA - " + type
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue

tp.file.include("[[" + templateName + "]]")

%>
