---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---
## Active IA Projects

### Task (IA) Incompleted
```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "IA") and !contains(path, "Templates/")
SORT BY 
```

### Task (IA) Incompleted - civitai
```dataview
TASK 
FROM ""
WHERE !completed contains(tags, "IA/civitai") and !contains(path, "Templates/")
SORT BY 
```



### Task (IA) Incompleted - civitai

### Task (IA) WIN ⭐⭐⭐
### Task (IA) Completed

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "IA") and !contains(path, "Templates/")
SORT BY 
```

### Task (IA) Completed - civitai
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/model") AND  !contains(path, "Templates/")
```




