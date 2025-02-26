 <%*
let defaultValue = "Win"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>
- [x]  <% entree %>  #wins ➕ {{DATE}} 
