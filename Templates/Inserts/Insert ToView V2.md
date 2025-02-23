 <%*
let baseFolder = "ToView"
const defaultTitle = "ToView"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/Inserts/Create ToView v2"

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
`````ad-important
title: To view
collapse: open
#toview 

- [ ] [[<% baseFolder %>/<% title %>]]  #toview  ➕ <% tp.date.now() %> 
`````
