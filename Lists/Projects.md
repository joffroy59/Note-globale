---
ELN version: 0.3.2
date created: 2025-02-28
author: Jerome Offroy
note type: project-list
tag: list/projects
---
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

`BUTTON[new-project]`

## Active Projects

```dataview
TABLE WITHOUT ID
  file.link as Project,
  author as Author,
  project.start as Start,
  project.end as End,
  project.type as Type,
  date-created as Date
FROM #project
WHERE project.status = "active"
```

## Completed Projects

```dataview
TABLE WITHOUT ID
  file.link as project,
  author as Author,
  project.start as Start,
  project.end as End,
  project.type as Type,
  date-created as Date
FROM #project
WHERE project.status = "completed"
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```

