---
tags:
  - tasks
  - list
---
```tasks
not done
filter by function !task.file.folder.includes('Templates')
group by function task.filename
```

```dataview
TASK
WHERE !completed AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY file.name

```

