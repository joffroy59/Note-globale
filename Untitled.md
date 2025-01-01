```dataview
table file.name as "Note", file.cday as "Date de création"
from ""
where contains(file.tags, "#problem")
sort file.cday desc


```

```dataview
table file.name as "Note", file.cday as "Date de création", file.content as "Contenu"
from ""
where contains(file.tags, "#problem")
sort file.cday desc

```

# Liste de problèmes

```query
tag:#probleme -tag:#daily-note

```



Ajout au menu contextuel
 add 



