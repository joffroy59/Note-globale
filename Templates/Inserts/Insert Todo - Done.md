 <%*
let baseFolder = "Done"
const defaultTitle = "Done"

let title = await tp.system.prompt("Title", defaultTitle);

const templateName = "Templates/Inserts/Create Done"

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
`````ad-done
title: DONE
collapse: open
#done 

- [x] [[<% baseFolder %>/<% title %>]]  #Other ➕ <% tp.date.now() %>  ✅ <% tp.date.now() %>
`````
