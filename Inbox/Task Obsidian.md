```dataview
TASK
WHERE !completed AND contains(tags, "#obsidian") AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY file.name

```

