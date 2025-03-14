 <%*
let baseFolder = "Done"
const templateName = "Templates/Inserts/Create Done"
const defaultTitle = "Done"

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

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

- [x] [[<% baseFolder %>/<% title %>]]  #done #task ➕ <% tp.date.now() %>  ✅ <% tp.date.now() %>
`````
