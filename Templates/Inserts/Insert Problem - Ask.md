 <%*
let defaultValue = "Problem"  
let entree = await tp.system.prompt("Enter a value:");
if (!entree) entree = defaultValue

let typeDefaultValue = "Général"
let type = await tp.system.prompt("Enter a type:", typeDefaultValue);
if (!type) type = typeDefaultValue

%>

`````ad-danger
title: Les Problèmes
collapse: open
#problem


````ad-warning
title: <% type %>
collapse: open

- [ ] <% entree %> #problem ➕ {{date}}  
	- [ ] {{time}} FIX #todo ➕ {{date}}  

````


`````
