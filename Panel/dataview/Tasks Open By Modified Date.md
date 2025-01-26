
```dataview
TASK
WHERE !completed AND 
!canceled AND
file.name != this.file.name AND 
!contains(file.path, "Template") AND
!contains(file.path, "Poub") AND 
!contains(["Sandbox test task", "Transformer un wip en done"], file.name)




GROUP BY (file.name) AS NAME 

SORT rows.file.mtime DESC
```
