 <%*
let defaultValue = "done"  
let entree = await tp.system.prompt("Enter a value for 'DONE':");
if (!entree) entree = defaultValue
%>

`````ad-success
title: DONE
collapse: open
#done 

- [x]  <% entree %>  #done ➕ {{DATE}} 

`````
