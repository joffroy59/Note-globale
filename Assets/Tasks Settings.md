---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

golbal_task_type:
  - pc
  - plugin
  - IA

plugin:
  folder_base: "Tasks/Obisidan/Plugin"
  template:
    create: "Create Task Plugin"
    template_base: "Templates/Task/Obsidian/Plugin"
  task_type:
    list:
      - Install
      - Test
      - Wip
      - Task
      - Done
      - Todo
      - Toview
    Install:
      tags: '#install'
    Test:
      tags: '#test'
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
    - IA
    - Tasks
    - Interface
    - Autre
  IA:
    tags: '#IA'
  Tasks:
  Interface:
  Autre:
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
IA:
  folder_base: "Tasks/IA"
  template:
    create: "Create Task IA"
    template_base: "Templates/Task/IA"
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
    - Application
    - Prompt
  Application:
  Prompt:

---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "pc", header: "Pc settings"  });
```

