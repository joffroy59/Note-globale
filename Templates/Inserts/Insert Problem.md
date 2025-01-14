 <%*
let defaultValue = "Problem"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>

`````ad-danger
title: Les Problèmes
collapse: open
#problem

````ad-warning
title: Appartement
collapse: open

- [ ] {{ entree }} #problem ➕ {{date}}  
	- [ ] {{time}} FIX #todo ➕ {{date}}  
````

````ad-warning
title: PC
collapse: open

- [ ] {{ entree }} #problem ➕ {{date}}  
	- [ ] {{time}} FIX #todo ➕ {{date}}  

````

````ad-warning
title: Domotique
collapse: open

- [ ] {{ entree }} #problem ➕ {{date}}  
	- [ ] {{time}} FIX #todo ➕ {{date}}  
````

`````
