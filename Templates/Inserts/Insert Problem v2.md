 <%*
let baseFolder = "Problems"
const defaultTitle = "Problem"

let typeDefaultValue = "Général"
let type = await tp.system.prompt("Enter a type:", typeDefaultValue);
if (!type) type = typeDefaultValue


let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/Inserts/Create Problem v2"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

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
