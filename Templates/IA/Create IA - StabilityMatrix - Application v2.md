---
stability_matrix_path: D:\dev-data\IA\Stability Matrix
---
<%*

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  } 


let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a content :","[[" + title + "]]");
if (!entree) entree = defaultValue

let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - <% title %>
collapse: open

```ad-note
title: Note
<% note %> 

```

`````

[[<% title %>]]

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>

