
```dataview
TASK
WHERE !completed AND contains(tags, "#status/wip") AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY (file.name) AS NAME 

SORT rows.file.mtime DESC

```

