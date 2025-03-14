 <%*
let typeList = ["Général", "Appart", "PC", "Domotique"]

let typeDefaultValue = "Général"
let type = await tp.system.suggester((item) => item, typeList)
if (!type) type = typeDefaultValue

let baseFolder = "Problems"
const templateName = "Templates/Inserts/Create Problem " + type + " v2"

let title = await tp.system.prompt("Title (create Note Link)", null, true, false);

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
//await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

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

````


`````
