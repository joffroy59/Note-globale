 <%*
let defaultValue = "Win"  
let entree = await tp.system.prompt("Enter a value :", null, true);
if (!entree) entree = defaultValue
-%>
- [x] <% entree %>  #wins #done   #task ➕ {{DATE}} ✅ {{DATE}}