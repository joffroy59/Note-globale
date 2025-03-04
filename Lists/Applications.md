---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: device-list
tag: list/applications
---
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

`BUTTON[new-application]`

```dataview
TABLE WITHOUT ID
  file.link as Device, 
  device.manufacturer as Manufacturer,
  device.model as Model,
  device.methods as "Methods",
  device.contact as "Contact", 
  device.location.building as Building, 
  device.location.room as Room
FROM #application
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
