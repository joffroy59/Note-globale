---
title: "Using metaedit, buttons, templater, nldates and dataview together - Share & showcase - Obsidian Forum"
source: "https://forum.obsidian.md/t/using-metaedit-buttons-templater-nldates-and-dataview-together/35911"
author:
  - "[[Obsidian Forum]]"
published: 2022-04-15
created: 2025-03-17
description: "Thanks to @shabegom (author) and my unusual use case, this dataview script was born. As the title says, you need the 5 plugins installed and enabled for this to work. ```dataviewjsconst {createButton} = app.plugins.pl…"
tags:
  - "clippings toview"
---
Thanks to [@shabegom](https://forum.obsidian.md/u/shabegom) (author) and my unusual use case, this dataview script was born.  
As the title says, you need the 5 plugins installed and enabled for this to work.

```csharp
\`\`\`dataviewjs
const {createButton} = app.plugins.plugins["buttons"]
const {update} = app.plugins.plugins['metaedit'].api

const defer = async (file, key) => {
    const value = await app.plugins.plugins['templater-obsidian'].templater.functions_generator.internal_functions.modules_array[4].static_functions.get('prompt')("What Date")
    const date = app.plugins.plugins['nldates-obsidian'].parseDate(value).moment.format("YYYY-MM-DD")
    await update(key, date, file)
}

dv.table(
["Name", "Date", "Bouton"],
dv.pages("#task").map(t => [t.file.link, t['date'],
createButton({app, el: this.container, args: {name: "Change date"}, clickOverride: {click: defer, params: [t.file.path, 'date']}})])
)
\`\`\`
```

With this, you can update date metadata in notes using natural language (without leaving the current note) by clicking on buttons in a dataview table

![Screen Recording 2022-04-15 at 10.22.36 PM](https://forum.obsidian.md/uploads/default/original/3X/5/7/57cd99ad404eea4ed89dc52fd5ea622dd78bde8e.gif)

> What we’ve got here is a mashup of 5 different plugins
> 
> 1. Dataview renders the table
> 2. Buttons puts a button in the table
> 3. When a button is clicked, Templater renders a prompt for a date
> 4. Natural Language dates takes the prompt input and formats as an actual date
> 5. Meta edit updates the YAML of the specified note with the date

Special thanks to [@AB1908](https://forum.obsidian.md/u/ab1908) for reminding me to post this here, so that it doesn’t get lost in [discord](https://discord.com/channels/686053708261228577/840286238928797736/934478389652365372).