---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: appareil-list
tag: list/appareil
---
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

`BUTTON[new-appareil]`

```dataview
TABLE WITHOUT ID
  file.link as Appareil,
  appareil.manufacturer as Manufacturer,
  project.name as Project,
  appareil.model as Model,
  appareil.protocols as "Protocols",
  appareil.location.building as Building,
  file.ctime as Created,
  file.mtime as Modified
FROM #appareil AND !"Assets"
SORT project.name, sample.name ASC
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
