 <%*
let defaultValue = "WIP"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>

`````ad-example
title: Work In Progess
collapse: open

- [/] <% entree %>  #test #status/wip  ➕ {{DATE}} 🛫 {{DATE}} 

`````

