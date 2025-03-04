---
ELN info:
  template: <% tp.file.title %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0

project:
  name: IA

wip:
  type: IA
  description: Travaux sur IA

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

let sourceUrl = await tp.system.prompt("source Url");
let imageUrl = await tp.system.prompt("Image Url");
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %>
`````ad-example
title: WIP IA - <% title %>
collapse: open

````ad-tip
Source : <% sourceUrl %>

image: ![](<% imageUrl %> )

````


```ad-note
title: Note
<% note %>

```

`````

[[<% title %>]]

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>

