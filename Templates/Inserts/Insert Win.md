 <%*
let defaultValue = "Win"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>

`````ad-success
collapse: open
#wins 

- [x]  <% entree %>  #wins ➕ {{DATE}} 
`````
