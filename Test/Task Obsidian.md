```tasks
not done
filter by function task.tags.includes('#obsidian') &&  !task.file.folder.includes('Templates')
group by function task.filename
```

```dataview
TASK
WHERE !completed AND contains(tags, "#obsidian") AND 
file.name != this.file.name AND 
!contains(file.path, "Template")

GROUP BY file.name

```

