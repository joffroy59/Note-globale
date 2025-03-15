---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

pc:
  folder_base: "Tasks/PC"
  template:
    create: "Create Task PC"
    template_base: "Templates/Task/PC"
  task_type:
    list:
      - Wip
      - Task
      - Done
      - Todo
      - Toview
    Wip:
      tags: '#status/wip'
    Task:
      tags: '#task'
    Toview:
      tags: '#toview'
    Done:
      tags: '#done'
    Todo:
      tags: '#todo'
  type:
    - Asus Game
    - Raspberry
    - iphone
    - portable
  Asus Game:
  Raspberry:

---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "pc", header: "Pc settings"  });
```

