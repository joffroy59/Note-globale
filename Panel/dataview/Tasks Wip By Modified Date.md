
```dataview
TASK
WHERE IN_PROGRESS 
file.name != this.file.name AND 
!contains(file.path, "Template")


GROUP BY (file.name) AS NAME 

SORT rows.file.mtime DESC
```
