---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: daily-note-list
tag: list/daily-note
---

```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/assets/javascript/dataview/views/note_header", {});
```

`BUTTON[new-daily-note]`

```dataview
TABLE WITHOUT ID
  file.link as "Daily Note", 
  author, 
  date-created
FROM #dailynotes AND !"Assets" AND -"Templates" AND "Daily Note"
SORT file.mtime  DESC
```

```dataviewjs
await dv.view("/assets/javascript/dataview/views/note_footer", {});
```
