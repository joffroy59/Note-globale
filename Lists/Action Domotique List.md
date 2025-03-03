---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: domotic-actions-list
tag: list/domotic
---
```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

```dataview
TABLE WITHOUT ID
  file.link as Action,
  project.name as Project,
  analysis.method as Method,
  file.ctime as Created,
  file.mtime as Modified
FROM #domotique/actions  AND !"Assets" AND !"Templates"
SORT project.name, analysis.method ASC
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
