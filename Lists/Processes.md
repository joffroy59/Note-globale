---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: process-list
tag: list/processes
---
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```button
name New Process
type command
action Templater: Insert Templates/Insert assets/templates/New Process.md
class accent-button
```
`BUTTON[new-process]`

```dataview
TABLE WITHOUT ID
  file.link as Process, 
  process.type as Type,
  process.devices as Devices,
  date-created as Date
FROM #process AND !"Assets"
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
