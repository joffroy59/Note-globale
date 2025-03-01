---
ELN version: 0.4.2
cssclass: normal-page
date created: 2025-03-01
author: Name Surname
note type: device
tag: 
  - " #device/balance/Device1_Model1"
device:
  name: Device1 - Model1 - name1
  type: 
     - balance
  manufacturer: Device1
  model: Model1
  location:
    building: building1
    room: room1
  contact: 
      - no contact
  documentation:
    - "[[Device1 - Model1 - name1 (Manual).pdf|Manual]]"
  url: "[link to manufacturer]()"
  info:
    info_1: ~~
    info_2: ~~
  parameters:
    parameter_1: ~~ unit
    parameter_2: ~~ unit
    parameter_3: ~~ unit
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

![[dummy-image-device.png]]

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/device", {});
```




```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
