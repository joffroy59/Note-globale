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
    - [x] [[Domotique - TV - Configuration suite perte dans Homekit]] #status/wip #domotique/action #domotique ➕ 2025-03-03 🛫 2025-03-03 ✅ 2025-03-04
    - [ ] [[Domotique - Config - upgrade]] #status/wip #domotique/action #domotique ➕ 2025-03-04
    - [x] [[Domotique/Actions/Domotique - Action1]] #status/wip #domotique/action #domotique ➕ 2025-03-05 🛫 2025-03-05 ✅ 2025-03-05
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
