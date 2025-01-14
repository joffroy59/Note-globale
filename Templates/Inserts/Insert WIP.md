---
tags:
  - template/insert
  - status/wip
---
 <%*
let defaultValue = "WIP"  
let entree = await tp.system.prompt("Enter a value for 'DONE':");
if (!entree) entree = defaultValue
%>

`````ad-example
title: Test In Progess
collapse: open

- [/] <% entree %>  #test #status/wip  ➕ {{DATE}} 

`````

