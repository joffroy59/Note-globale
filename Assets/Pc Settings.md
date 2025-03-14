---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

pc:
  folder_base: "Tasks/PC"
  task_type:
    template_base: "Templates/Task"
    list:
      - Wip
      - Task
      - Done
      - Todo
    Wip:
      tags: '#status/wip'
    Task:
      tags:
    Done:
      tags:
    Todo:
      tags:
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

