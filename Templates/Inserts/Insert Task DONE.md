 <%*
let defaultValue = "DONE"  
let entree = await tp.system.prompt("Enter a value for 'DONE':", null, true);
if (!entree) entree = defaultValue
-%>
- [x] <% entree %>  #done ➕ {{DATE}} ✅ {{DATE}}