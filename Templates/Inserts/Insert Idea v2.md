 <%*
let baseFolder = "Idea"
const defaultTitle = "Idée"

let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/Inserts/Create Idea v2"

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
`````ad-attention
title: Idea
collapse: open
#idea 

- [ ] [[<% baseFolder %>/<% title %>]]  #idea  ➕ <% tp.date.now() %> 
`````
