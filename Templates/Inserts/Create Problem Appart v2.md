<%*
let baseFolder = "Problems"
let type = "Appart"

let title = tp.file.title
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
	title = await tp.system.prompt("Title from page");
	if (!title) title = defaultTitle
	await tp.file.rename(`${title}`);
} 

let note = await tp.system.prompt("Note");
%>
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
	- [ ] <% tp.date.now("HH:mm") %> FIX #todo ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %> 

````
---
````ad-quote
title: Note
<% note %> 

````

`````

---

