```query
⭐
```

```dataviewd
List
arf
```

```dataview
table file.name as "Fichier", file.link as "Lien", line as "Ligne"
from ""
where contains(line, "⭐")
sort file.name
``` 



```dataviewjs
const pages = dv.pages('');
const results = [];

pages.forEach(page => {
    const content = app.vault.read(page.file);
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        if (line.includes("⭐")) {
            results.push({
                file: page.file.name,
                link: page.file.link,
                line: line.trim(),
                lineNumber: index + 1
            });
        }
    });
});

dv.table(["Fichier", "Lien", "Ligne", "Numéro de ligne"], results);


```

```dataview
Table
from "/daily Note" 
where contains(tag,"wip")
```

