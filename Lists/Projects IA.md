---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---
## Active IA Projects

### task (IA) incompleted

```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "IA") and !contains(path, "Templates/")
SORT BY 
```


### task (IA) completed

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "IA") and !contains(path, "Templates/")
SORT BY 
```





