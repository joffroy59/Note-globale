---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---
## Active IA Projects

### Task IA 🚧
```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "IA") and !contains(path, "Templates/")
SORT BY 
```

### Task IA 🚧 - civitai
```dataview
TASK 
FROM ""
WHERE !completed AND contains(tags, "IA/civitai") and !contains(path, "Templates/")
SORT BY 
```

### Task IA 🏆 ⭐⭐⭐
### Task IA ✅

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "IA") and !contains(path, "Templates/")
SORT BY 
```

### Task IA ✅ - civitai
```dataview
TASK 
FROM ""
WHERE completed AND contains(tags, "IA/civitai") and !contains(path, "Templates/")
SORT BY 
```

### Task IA - civitai
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/civitai") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

