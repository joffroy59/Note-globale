---
ELN version: 0.4.2
cssclass: wide-page
date created: 2025-03-05
author: Jerome Offroy
note type: wip-list
tag:
  - " #list/wip"
project:
  name: IA
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

`BUTTON[insert-daily-task-wip]`

> [!Example] TOC
> - [[#All Wip]]


## All TODO 👉

```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #todo AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```


## All Cancel ❌

```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/cancel AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## All Failed ⛔

```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/failed AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```



```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
