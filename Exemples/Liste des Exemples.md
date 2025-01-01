---
tags:
  - "#liste"
---
# Exemple Obsidian

## Obsidian Sandbox

[Obsidian Sandbox](obsidian://open?vault=Obsidian%20Sandbox&file=Formatting%2FCallout)

## My Exemple

```query

tag: #Exemple
```


## DataView

#### Sandbox du plugin 

[obsidian_dataview_example_vault-main](obsidian://open?vault=obsidian_dataview_example_vault-main)

##### Lists all pages in your vault as a bullet point list 
```dataview 
LIST 
```

##### Lists all tasks (completed or not) in your vault
```dataview
TASK
```
##### Renders a Calendar view where each page is represented as a dot on its creation date. 
```dataview 
CALENDAR file.cday 
```


##### Shows a table with all pages of your vault, their field value of due, the files' tags and an average of the values of multi-value field working-hours 
```dataview 
TABLE due, file.tags AS "tags", average(working-hours) 
```

##### Lists all pages that include the tag #status/open or #status/wip 

```dataview 
LIST 
FROM #status/open OR #status/wip 
```

##### Lists all pages that have either the tag #assignment and are inside folder "30 School" (or its sub folders), or are inside folder "30 School/32 Homeworks" and are linked on the page School Dashboard Current To Dos

```dataview
LIST
FROM (#template AND "Templates") OR ("Exemple" 
AND outgoing([[School Dashboard Current To Dos]]))
```

##### Lists all pages that have a metadata field `due` and where `due` is before today 
```dataview 
LIST 
WHERE due AND due < date(today) 
```

##### Lists the 10 most recently created pages in your vault that have the tag #status/open 
```dataview 
LIST 
FROM #status/open 
SORT file.ctime 
DESC LIMIT 10 
```

##### Lists the 10 oldest and incompleted tasks of your vault as an interactive task list, grouped by their containing file and sorted from oldest to newest file.
```dataview
TASK
WHERE !completed
SORT created ASC
LIMIT 10
GROUP BY file.link
SORT rows.file.ctime ASC
```

##### Exemple

###### tag
```dataview 
TABLE recipe-type AS "type", portions, length 
FROM #template  
```


###### tag
```dataview 
LIST 
FROM #dailynotes  
WHERE status = "open" 
```

###### tag
```dataview 
TABLE L.text AS "My lists" 
FROM "Daily Note" 
FLATTEN file.lists AS L 
WHERE contains(L.author, "joffroy") 
```

###### List all files which have a date in their title (of the form `yyyy-mm-dd`), and list them by date order
```query
LIST file.day WHERE file.day 

```




###### LIST WITHOUT ID
```dataview 
LIST WITHOUT ID 
```








## Dataview - all command (sort by Name)
```dataviewjs

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

function hilite(keys, how) {
    // need to check if existing key combo is overridden by undefining it
    if (keys && keys[1][0] !== undefined) {
        return how + keys.flat(2).join('+').replace('Mod', 'Ctrl') + how;
    } else {
        return how + '–' + how;
    }
}

function getHotkey(arr, highlight=true) {
    let hi = highlight ? '**' : '';
    let defkeys = arr.hotkeys ? [[getNestedObject(arr.hotkeys, [0, 'modifiers'])],
    [getNestedObject(arr.hotkeys, [0, 'key'])]] : undefined;
    let ck = app.hotkeyManager.customKeys[arr.id];
    var hotkeys = ck ? [[getNestedObject(ck, [0, 'modifiers'])], [getNestedObject(ck, [0, 'key'])]] : undefined;
    return hotkeys ? hilite(hotkeys, hi) : hilite(defkeys, '');
}

let cmds = dv.array(Object.entries(app.commands.commands))
    .sort(v => v[1].name, 'asc');

dv.paragraph(cmds.length + " commands currently enabled; " +
    "non-default hotkeys <strong>bolded</strong>.<br><br>");

dv.table(["Command ID", "Name in current locale", "Hotkeys"],
  cmds.map(v => [
    v[1].id,
    v[1].name,
    getHotkey(v[1]),
    ])
  );
```
## Dataview - all command (sort by Id) 

```dataviewjs

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

function hilite(keys, how) {
    // need to check if existing key combo is overridden by undefining it
    if (keys && keys[1][0] !== undefined) {
        return how + keys.flat(2).join('+').replace('Mod', 'Ctrl') + how;
    } else {
        return how + '–' + how;
    }
}

function getHotkey(arr, highlight=true) {
    let hi = highlight ? '**' : '';
    let defkeys = arr.hotkeys ? [[getNestedObject(arr.hotkeys, [0, 'modifiers'])],
    [getNestedObject(arr.hotkeys, [0, 'key'])]] : undefined;
    let ck = app.hotkeyManager.customKeys[arr.id];
    var hotkeys = ck ? [[getNestedObject(ck, [0, 'modifiers'])], [getNestedObject(ck, [0, 'key'])]] : undefined;
    return hotkeys ? hilite(hotkeys, hi) : hilite(defkeys, '');
}

let cmds = dv.array(Object.entries(app.commands.commands))
    .sort(v => v[1].id, 'asc');

dv.paragraph(cmds.length + " commands currently enabled; " +
    "non-default hotkeys <strong>bolded</strong>.<br><br>");

dv.table(["Command ID", "Name in current locale", "Hotkeys"],
  cmds.map(v => [
    v[1].id,
    v[1].name,
    getHotkey(v[1]),
    ])
  );
```

## ———————————————————————————

![[Pasted image 20241229204151.png|300]]


