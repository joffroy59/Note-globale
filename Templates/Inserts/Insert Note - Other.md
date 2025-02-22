 <%*
let baseFolder = "Other"
const defaultTitle = "Other"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

const templateName = "Templates/Inserts/Create Other"

let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

_%>
<%* tp.file.cursor() %> 
`````ad-seealso
title: Other
collapse: open
#Other 

- [ ] [[<% baseFolder %>/<% title %>]]  #Other ➕ <% tp.date.now() %> 
`````
