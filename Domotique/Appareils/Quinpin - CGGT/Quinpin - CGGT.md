---
ELN version: 0.4.2
cssclass: normal-page
date created: 2025-03-05
author: Jerome Offroy
note type: appareil
tag: 
  - " #appareil/Homekit/Quinpin_CGGT"
  - " #appareil/Thread/Quinpin_CGGT"
appareil:
  name: Quinpin - CGGT
  type: Temperature
  mesure_type: Temperature
  manufacturer: Quinpin
  model: CGGT
  location:
    building: Maison
    room: Salon
  documentation:
    - "[[Quinpin - CGGT (Manual).pdf|Manual]]"
  url: "[link to manufacturer]()"
  methods:  
     - Homekit
     - Thread

  info:
    info_1: ~~
    info_2: ~~
  parameters: 
    Homekit: ✅
    Thread: ✅
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

![[dummy-image-appareil.png|150]]

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/appareil", {});
```




```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
