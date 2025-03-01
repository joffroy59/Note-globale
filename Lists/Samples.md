---
ELN version: 0.3.2
date created: 2025-01-01
author: Jerome Offroy
cssclass: wide-page
date created: 2023-03-01
note type: project-list
tag: list/projects
---

`BUTTON[new-sample]`

```button
name New Sample
type command
action Templater: Templates/Insert Assets/templates/New Sample.md
class accent-button
```


```button
name New Sample2
type command
action Templater: Insert Templates/Insert Assets/templates/New Sample.md
```
^button-moke


> [!Example] TOC
> [[#Samples]]
>   - [[#Compounds]]
>   - [[#Electrodes]]
>   - [[#Electrochemical Cells / Batteries]]

## Sample Lists

```dataview
TABLE WITHOUT ID
  file.link as "Sample List",
  author as Author,
  project.name as Project,
  date-created as Date
FROM #list/samples
```

## Samples

### Compounds

```dataview
TABLE WITHOUT ID
  file.link as Sample,
  project.name as Project,
  sample.type as "Sample Type",
  sample["chemical formular"] as "Chem. formular",
  sample.educts.name as "Educts",
  sample.educts.mass as "Mass",
  date-created as Date
FROM #sample
WHERE sample["type"] = "compound"
SORT project.name, file.link ASC
```

### Electrodes

```dataview
TABLE WITHOUT ID
  file.link as Sample,
  project.name as Project,
  sample.type as "Sample Type",
  date-created as Date
FROM #sample
WHERE sample.type = "electrode"
SORT project.name, file.link ASC
```

### Electrochemical Cells / Batteries

```dataview
TABLE WITHOUT ID
  file.link as Sample,
  project.name as Project,
  sample.type as "Sample Type",
  date-created as Date
FROM #sample
WHERE sample.type = "electrochemical cell"
SORT project.name, file.link ASC
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
