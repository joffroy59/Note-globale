
3. **Enregistrez la note** et Obsidian affichera un tableau avec toutes les lignes contenant le caractère "⭐" dans votre coffre.

Voici un exemple de ce à quoi cela pourrait ressembler dans votre note :


# Lignes contenant ⭐ dans toutes les notes

```dataviewjs
const pages = dv.pages('');
const results = [];

pages.forEach(page => {
    let content = app.vault.cachedRead(page.file);
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

