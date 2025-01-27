 <%*
let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>

`````ad-example
title: WIP IA
collapse: open

- [/] <% entree %>  #status/wip #IA   ➕ {{DATE}} 🛫 {{DATE}} 

`````

