---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---

```button
name New Wip
type command
action Templater: Insert Assets/templates/New Project.md
class accent-button
```
#todo

## Incompletes Tasks Wip

```dataview
TASK 
FROM ""
WHERE !completed and contains(tags, "wip") and !contains(path, "Templates/")
SORT BY 
```

## Complete Tasks Wip

```dataview
TASK 
FROM ""
WHERE completed and contains(tags, "wip") and !contains(path, "Templates/")
SORT BY 
```

## Notes
[[Lists/Wip-Note]]


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```

