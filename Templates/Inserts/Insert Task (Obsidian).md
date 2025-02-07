<%*
let defaultValue = "TODO TODAY"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>	- [ ] <% entree %>   #task #todo #obsidian  ➕ {{DATE}} 