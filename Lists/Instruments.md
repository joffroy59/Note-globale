---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author: Jerome Offroy
note type: analysis-list
tag: list/analysis
---
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

```button
name Add Instrument
type command
action Templater: Insert Templates/Insert assets/templates/New Instrument.md
class accent-button
```
`BUTTON[new-instrument]`

```dataview
TABLE WITHOUT ID
  file.link as Analysis,
  project.name as Project,
  analysis.method as Method,
  file.ctime as Created,
  file.mtime as Modified
FROM #analysis AND !"Assets"
SORT project.name, sample.name, analysis.method ASC
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
