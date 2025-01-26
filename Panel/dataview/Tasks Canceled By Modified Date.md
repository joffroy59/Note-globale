
```dataview
TASK
WHERE canceled 
```
```dataview
TASK
WHERE canceled AND 
file.name != this.file.name AND 
!contains(file.path, "Template")


GROUP BY (file.name) AS NAME 

SORT rows.file.mtime DESC
```

- [-] sdqfqsdqsd

