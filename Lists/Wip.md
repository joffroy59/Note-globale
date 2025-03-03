---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---

`BUTTON[new-wip]`

## Incomplete Tasks Wip

```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "wip") and !contains(path, "Templates/")
SORT BY 
```

#todo bouton pour transformer le tag status/wip en done 


## Complete Tasks Wip

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "wip") and !contains(path, "Templates/")
SORT BY 
```




## Notes
[[Lists/Wip-Note]]


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```

