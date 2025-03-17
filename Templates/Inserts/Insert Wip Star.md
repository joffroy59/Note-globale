<%*
let defaultValue = "WIP"
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>
⭐ <% entree %>  #test #status/wip #star   ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>