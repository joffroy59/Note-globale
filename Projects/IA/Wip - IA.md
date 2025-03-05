---
ELN version: 0.4.2
cssclass: wide-page
date created: 2025-03-04
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

## All Wip

```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## civitai
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/civitai   AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## model
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/model    AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## comfyui
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/comfyui    AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## application
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/application     AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## flux
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/comfyui/flux    AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

## StabilityMatrix
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/StabilityMatrix    AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```

# Porblems
```dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND #IA AND #IA/StabilityMatrix    AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
```


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
