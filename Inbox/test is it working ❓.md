### is it working ❓
- [x] [[embed_link_template]] NO ✅ 2025-03-14
- [ ] [[Templates/Action/wip_to_done_button]]  + [[WIP/wip_to_done_button]]
- [ ] [[Backup - Template - DailyNote]]
- [ ] [[Correctif Plugin Obsidian]]
- [ ] [[Banner]]
- [ ] [[Exemple]]
- [ ] [[Templates/New Note/IA]]

```dataviewjs
let parentFolder = "Templates/Snippets"
const lsFolder = app.vault.getFiles()
  .filter(file => file.parent.path == parentFolder )
  .map(file => dv.fileLink(file.path))
dv.list(lsFolder)

lsFolder.forEach(aaa => dv.("b", "- [ ] " + aaa));


```

### 1 
```dataview
table 
from "Templates/Snippets"
```

```dataview
TABLE  from "Templates/Snippets"
```



### add type
dans la liste ou nouveau 
```dataview
TABLE length(rows) AS "Nombre de Notes"
FROM ""
WHERE type
GROUP BY type
SORT type
```


