---
ELN version: 0.4.2
cssclass: normal-page
date created: 2025-03-01
author: Name Surname
note type: analysis
tags: 
  - " #analysis/MM-PRO1-cp001/diffraction_(reflection_mode)"

project:
  name: Project1
  link: "[[Project1]]"
sample:
  name: MM-PRO1-cp001
  type: compound
  description: null
  link: "[[MM-PRO1-cp001]]"
instrument:
  name: Instrument1 - Model1 - Name1
  link: "[[Instrument1 - Model1 - Name1]]"
  type: x-ray diffractometer
session:
  part of session: false
  name: none
  number of analyses: 0
analysis:
  method: diffraction (reflection mode)
  date: 2025-03-01
  operator: Max Mustermann
  status: running
  data:
    local:
      file: my_sample.xyz
      folder: /path/to_your/local_data/folder/MM-PRO1-cp001/diffraction (reflection mode)
      link: "[local data file](file:///path/to_your/local_data/folder/MM-PRO1-cp001/diffraction%20(reflection%20mode))"
      folder_link: "[local data folder](file:///path/to_your/local_data/folder/MM-PRO1-cp001/diffraction%20(reflection%20mode))"
    remote:
      file: my_sample.xyz
      folder: /path/to_your/remote_data/folder/2025/diffraction (reflection mode)/Max Mustermann
      link: "[remote data file](file:///path/to_your/remote_data/folder/2025/diffraction%20(reflection%20mode)/Max%20Mustermann)"
      folder_link: "[remote data folder](file:///path/to_your/remote_data/folder/2025/diffraction%20(reflection%20mode)/Max%20Mustermann)"
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

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/analysis", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
