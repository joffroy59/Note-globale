---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-02
author: Jerome Offroy
note type: note-list
tag: list/notes
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

```button
name New Note
type command
action Templater: Insert Templates/Insert assets/templates/New Note.md
class accent-button
```

```dataview
TABLE WITHOUT ID
  file.link as "Note", 
  author as Author,
  note-type as Type,
  date-created as Date
FROM "Note"
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
