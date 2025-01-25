```tasks
not done
filter by function (task.tags.includes('#obsidian')) AND (task.file.folder != "Templates")
group by function task.file.path
```

```dataview
TASK
WHERE !completed AND contains(tags, "#obsidian") AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY file.name

```

