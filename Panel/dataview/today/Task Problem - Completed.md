
```dataview
TASK
WHERE completed AND contains(tags, "#problem") AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY file.name

```

