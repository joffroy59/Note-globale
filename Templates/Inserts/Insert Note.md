 <%*
let defaultValue = "Note"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>
`````ad-note
title: Title
collapse: open
#note 

- <% entree %> #note 

`````
