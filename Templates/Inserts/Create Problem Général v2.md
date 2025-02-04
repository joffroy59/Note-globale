<%*
let baseFolder = "Problems"
let type = "Général"

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

- [ ] [[<% baseFolder %>/<% title %>]] #problem ➕ {{DATE}} 🛫 {{DATE}}  
	- [ ] {{time}} FIX #todo ➕ {{DATE}} 🛫 {{DATE}} 

````
---
````ad-quote
title: Note
<% note %> 

````

`````

---

