---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---

`BUTTON[new-wip]`

## Incomplete Tasks Wip
``````ad-caution
Titlle: Incomplete Tasks Wip
Collapse: Open

```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "wip") and !contains(path, "Templates/")
GROUP BY (file.name)
SORT value DESC 
```

``````

#todo bouton pour transformer le tag status/wip en done 



``````ad-done  
title: Complete Tasks Wip
collapse: closed 

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "wip") and !contains(path, "Templates/") and !contains(path, "Test Liste de toutes les sections daily note")
GROUP BY (file.name)
SORT value DESC
```


``````



## Notes
[[Lists/Wip-Note]]


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```

