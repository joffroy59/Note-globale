 <%*
let baseFolder = "Problems"
const defaultTitle = "Problem"

let typeDefaultValue = "Général"
let type = await tp.system.prompt("Enter a type:", typeDefaultValue);
if (!type) type = typeDefaultValue


let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/Inserts/Create Problem v2"


_%>
---
<%* tp.file.cursor() %> 
`````ad-danger
title: Les Problèmes
collapse: open
#problem


````ad-warning
title: <% type %>
collapse: open

- [ ] [[<% baseFolder %>/<% title %>]] #problem ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>
	- [ ] {{time}} FIX #todo ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

````


`````
