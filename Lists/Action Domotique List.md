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

`BUTTON[new-domotic-action]`

## 🏠Tasks

- [/] **Domotique**
    - [/] [[Domotique - TV - Configuration suite perte dans Homekit]] #status/wip #domotique/action #domotique   ➕ 2025-03-03 🛫 2025-03-03 

## List
```dataview
TABLE WITHOUT ID
  file.link as Action,
  project.name as Project,
  analysis.method as Method,
  file.ctime as Created,
  file.mtime as Modified
FROM #domotique/action   
AND !"Assets" 
AND !"Templates" 
WHERE file.name !=this.file.name
SORT project.name, analysis.method ASC
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
