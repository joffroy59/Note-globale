 <%*
let defaultValue = "done"
let entree = await tp.system.prompt("Enter a value for 'DONE':");
if (!entree) entree = defaultValue
%>

`````ad-done
title: DONE
collapse: open
#done

- [x] <% entree %>  #done ➕ <% tp.date.now() %> ✅ <% tp.date.now() %>

`````
