---
cssclass: clean-embeds
---

```dataview
LIST 
FROM #status/wip 
SORT file.mtime DESC
```


```dataview
TABLE
file.mtime AS "Dernière modification",
line as "Ligne"
FROM "Daily Note"
WHERE contains(file.tags, "#task")
SORT file.mtime DESC
```




```dataview
TABLE 
file.mtime AS "Dernière modification", line as "Ligne"
FROM #task  
SORT file.mtime DESC
```


```dataview
TABLE 
file.mtime AS "Dernière modification", line as "Ligne"
FROM #status/wip 
SORT file.mtime DESC
```


```dataview
table file.name as "Nom de Fichier", line as "Ligne"
from "Daily Note"
where contains(tags, "status/wip")
```
### dv.taskList
```dataviewjs
dv.taskList(dv.pages('#status/wip').file.tasks.where(t => !t.completed))
```


### d 

```dataview
TASK 
WHERE contains(text, "#status/wip")
```
