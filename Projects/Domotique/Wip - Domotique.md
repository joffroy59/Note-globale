---
ELN version: 0.4.2
cssclass: wide-page
date created: 2025-03-05
author: Jerome Offroy
note type: wip-list
tag:
  - " #list/wip"
project:
  name: Domotique
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

`BUTTON[new-domotic-action]`

> [!Example] TOC
> - [[#All Wip]]

## All Wip

```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
