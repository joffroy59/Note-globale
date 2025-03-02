---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---
## IA Projects

## WIP 🚧
### 🚧 IA
```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "IA") and !contains(path, "Templates/")
GROUP BY (file.name)
SORT value DESC
```

### 🚧  - civitai
```dataview
TASK 
FROM ""
WHERE !completed AND contains(tags, "IA/civitai") and !contains(path, "Templates/")
GROUP BY (file.name)
SORT value DESC
```



## DONE ✅
### 🏆 IA  ⭐⭐⭐
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA") and !contains(path, "Templates/") 
AND contains(text, "⭐")

GROUP BY file.name
SORT key DESC

```

### ✅ IA 

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "IA") and !contains(path, "Templates/")
GROUP BY file.name
SORT key DESC
```

### ✅ IA - Civitai 
```dataview
TASK 
FROM ""
WHERE completed AND contains(tags, "IA/civitai") and !contains(path, "Templates/")
GROUP BY file.name
SORT key DESC
```

## All 
### IA
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Civitai
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/civitai") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### ComfyUI
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/comfyui") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### ComfyUI - flux
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/comfyui/flux") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### ComfyUI - flux_NF4
```dataview
TASK 
FROM ""
WHERE contains(tags, "flux_NF4") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### StabilityMatrix
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/StabilityMatrix") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Application
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/application") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Model
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/model") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### Prompt
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/prompt") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```

### images
```dataview
TASK 
FROM ""
WHERE contains(tags, "IA/images") and !contains(path, "Templates/")

GROUP BY file.name
SORT key DESC

```












