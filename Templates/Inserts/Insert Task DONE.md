 <%*
let defaultValue = "done"  
let entree = await tp.system.prompt("Enter a value for 'DONE':");
if (!entree) entree = defaultValue
-%>- [x] <% entree %>  #done ➕ {{DATE}} ✅ {{DATE}}