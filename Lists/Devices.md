---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: device-list
tag: list/devices
---
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

```button
name Add Device
type command
action Templater: Insert Templates/Insert assets/templates/New Device.md
class accent-button
```


```dataview
TABLE WITHOUT ID
  file.link as Device, 
  device.manufacturer as Manufacturer,
  device.model as Model,
  device.methods as "Methods",
  device.contact as "Contact", 
  device.location.building as Building, 
  device.location.room as Room
FROM #device
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
