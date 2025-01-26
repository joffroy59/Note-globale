
```dataview
TASK
WHERE !completed AND 
file.name != this.file.name AND 
!contains(file.path, "Template") AND
!contains(file.path, "Poub") AND 
!contains(file.name, "Sandbox test task")



GROUP BY (file.name) AS NAME 

SORT rows.file.mtime DESC
```
