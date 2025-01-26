
```dataview
TASK
WHERE !completed AND contains(tags, "#idea") AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY file.name

```

