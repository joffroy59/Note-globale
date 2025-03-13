 <%*
let defaultValue = "TODO"
let entree = await tp.system.prompt("Enter a valus :");
if (!entree) entree = defaultValue
%>   - [ ] <% entree %>  #todo  ➕ {{DATE}}