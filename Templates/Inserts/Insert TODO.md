 <%*
let defaultValue = "TODO"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>

- [ ] <% entree %>  #todo  ➕ {{DATE}} 
