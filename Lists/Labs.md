---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-02
author: Jerome Offroy
note type: lab-list
tag: list/lab
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

`BUTTON[new-lab]`

## Building 421

```dataview
TABLE WITHOUT ID
  file.link as Lab, 
  lab.name as Name,
  lab.type as Type,
  lab.building as Building,
  lab.room as Room,
  lab.contact as Contact
FROM #lab WHERE lab.building = 421
SORT file.link ASC
```

## Building 321

```dataview
TABLE WITHOUT ID
  file.link as Lab, 
  lab.name as Name,
  lab.type as Type,
  lab.building as Building,
  lab.room as Room,
  lab.contact as Contact
FROM #lab WHERE lab.building = 321
SORT file.link ASC
```


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
