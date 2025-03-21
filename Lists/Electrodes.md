---
ELN version: 0.3.2
cssclass: wide-page
date created: 2023-01-02
author: Jerome Offroy
note type: electrode-list
tag: list/electrodes
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

## Reference Electrodes

```dataview
TABLE WITHOUT ID
  file.link as "Ref. Electrode", 
  electrode["redox pair"] as "Redox Pair",
  electrode["standard potential"] as "Std. Potential / V"
FROM #electrode/reference 
SORT electrode["standard potential"] ASC
```

## Standard Electrodes

```dataview
TABLE WITHOUT ID
  file.link as "Electrode", 
  electrode["redox pair"] as "Redox Pair",
  electrode["standard potential"] as "Std. Potential / V"
FROM #electrode/standard 
SORT electrode["standard potential"]  ASC
```


## Electrode Samples

```dataview
TABLE WITHOUT ID
  file.link as Electrode, 
  project.name as Project,
  date-created as Date
FROM #sample
WHERE sample.type = "electrode"
SORT project.name, file.link ASC
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
