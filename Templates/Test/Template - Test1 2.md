<%*
  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  }

let defaultValue = "WIP IA"
let entree = await tp.system.prompt("Enter a content :");
if (!entree) entree = defaultValue

let workflow = await tp.system.prompt("Worflow file paht");
let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note", null, true, true);
%>
`````ad-example
title: WIP IA - Model
collapse: open

- [/] <% entree %>  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
workflow: <% workflow %>
image: ![](<% image %>)
```

```ad-note
title: Note
<% note %>
```

`````

creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>