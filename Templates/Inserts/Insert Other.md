---
tags:
  - template/insert
---
 <%*
let defaultValue = "Other"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>

`````ad-note
title: Other
collapse: open
#Other 

{{ entree }} #Other
`````
