---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---
## IA Projects

## WIP 🚧
### Task IA 🚧
```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "IA") and !contains(path, "Templates/")
GROUP BY (file.name)
SORT value DESC
```

### Task IA 🚧 - civitai
```dataview
TASK 
FROM ""
WHERE !completed AND contains(tags, "IA/civitai") and !contains(path, "Templates/")
GROUP BY (file.name)
SORT value DESC
```



## DONE ✅
### Task IA 🏆 ⭐⭐⭐
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA") and !contains(path, "Templates/") 
AND contains(text, "⭐")

GROUP BY file.name
SORT key DESC

```

### Task IA ✅

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "IA") and !contains(path, "Templates/")
GROUP BY file.name
SORT key DESC
```

### Task IA ✅ - civitai 
```dataview
TASK 
FROM ""
WHERE completed AND contains(tags, "IA/civitai") and !contains(path, "Templates/")
GROUP BY file.name
SORT key DESC
```

## All 
### Task IA
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - Civitai
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/civitai") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - ComfyUI
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/comfyui") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - ComfyUI - flux
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/comfyui/flux") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - ComfyUI - flux_NF4
```dataview
TASK 
FROM ""
WHERE contains(tags, "flux_NF4") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - StabilityMatrix
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/StabilityMatrix") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - Application
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/application") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - Model
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/model") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - Prompt
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/prompt") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Task IA - images
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/images") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```












