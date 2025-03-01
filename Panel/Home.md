---
ELN version: 0.4.2
cssclasses:
  - wide-page
  - dashboard
banner: "[[obsidian-eln-banner.png]]"
banner-y: 2
date created: 2025-02-26
author:
  - Jérôme Offroy
note type: dashboard
tags:
  - dashboard
banner-height: 250
sliceSize: 10
---
# Work
- ### [[Projects]]
  ```dataview
  LIST
  FROM #project
  WHERE project.status = "active"
  ```

- ### [[Lists]]
	- [[Processes]]
	- [[Samples]]
	- [[Analyses]]
	- [[Chemicals]]
	- [[Devices]]
	- [[Instruments]]

- ### [[Notes]]
  ```dataview
  LIST
  FROM "Note" AND !"Assets"
  WHERE note-type != "tutorial"
  SORT file.mtime.ts ASC
  LIMIT 6
  ```

- ### [[Daily Notes]]
  ```dataview
  LIST
  FROM #dailynotes   AND !"Assets" AND -"Templates" AND "Daily Note"
  SORT file.mtime DESC
  LIMIT 6
  ```

- ### [[!Wip]]
  ```dataview
  TABLE
  FROM #status/wip AND !"Assets" AND !"Templates"
  SORT file.mtime DESC
  LIMIT 8
  ```

- ### Tutorials
   - [[Get started with Obsidian]]
   ```dataview
        LIST
        FROM "Notes"
        WHERE note-type = "tutorial"
        SORT file.mtime.ts ASC
        LIMIT 4
   ```

- ### Miscellaneous
	 - [[Electrochemical Glossary]]
	 - [[Conferences]]

- ### Literature
	 - [[Books]]
	 - [[Publications]]

- ### [[Meetings]]
  ```dataview
  LIST
  FROM #status/wip  AND !"Assets"
  SORT file.mtime.ts ASC
  LIMIT 6
  ```
# Recently Edited &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `INPUT[slider(addLabels,maxValue(40),defaultValue(5)):sliceSize]` `VIEW[{sliceSize}][text]` 
-
  ```dataviewjs
    dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").slice(0,dv.current().file.frontmatter.sliceSize).file.link)
   ```
-
  ```dataviewjs
    dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").slice(dv.current().file.frontmatter.sliceSize, 2*dv.current().file.frontmatter.sliceSize).file.link)
   ```
-
  ```dataviewjs
    dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").slice( 2*dv.current().file.frontmatter.sliceSize,  3*dv.current().file.frontmatter.sliceSize).file.link)
   ```


# Open Tasks

```dataviewjs

const querry=dv.pages('!"Assets" AND !"Notes/HowTos"').file.tasks
     .where(t => !t.completed && !t.checked)

// console.log(JSON.stringify(querry))

var note_list = querry.map(t => t.path).values
note_list = Array.from(new Set(note_list)).sort()
const n_notes = note_list.length

var index = 0
if (n_notes >= 3) {
    dv.taskList(querry.where(q => { return q.path === note_list[index + 0] || q.path == note_list[index + 1] || q.path == note_list[index + 2] } ))
    index += 3
    if (n_notes >= 6) {
        dv.taskList(querry.where(q => { return q.path === note_list[index + 0] || q.path == note_list[index + 1] || q.path == note_list[index + 2] } ))
        index += 3
        if (n_notes >= 9) {
            dv.taskList(querry.where(q => { return q.path === note_list[index + 0] || q.path == note_list[index + 1] || q.path == note_list[index + 2] } ))
            index += 3
            if (n_notes >= 12) {
                dv.taskList(querry.where(q => { return q.path === note_list[index + 0] || q.path == note_list[index + 1] || q.path == note_list[index + 2] } ))
                index += 3
            }
        }
    }
}
const remaining_notes = n_notes % 3
if (remaining_notes == 1) {
    dv.taskList(querry.where(q => { return q.path === note_list[index + 0]  } ))
} else if (remaining_notes == 2) {
    dv.taskList(querry.where(q => { return q.path === note_list[index + 0] || q.path === note_list[index + 1] } ))
}
```

# Vault Info

- ### 〽️ Stats
	-  File Count: **`$=dv.pages().length`**
	-  Number of Samples: **`$=dv.pages('#sample AND !"Assets"').length`**
	-  Number of Analsyes: **`$=dv.pages('#analysis AND !"Assets"').length`**
	-  Number of Processes: **`$=dv.pages('#process AND !"Assets"').length`**



```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
