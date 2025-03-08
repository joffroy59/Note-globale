---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

wip:
  types:
    - Generic
    - Model
    - ComFyUI
    - workflow
    - ComFyUI - Flux
    - civitai
    - Flux NF4
    - WAN 2.1
    - Application
    - StabilityMatrix - Application
  template:
    insert: Insert Wip IA - Task -
  civitai:
    title: civitai -
    folder: IA/ComfyUI/civitai
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - civitai
    tag: IA/civitai
  ComFyUI:
    title: ComfyUI -
    folder: IA/ComfyUI
    template:
      create: Templates/IA/Create IA - Task - ComFyUI
    tag: IA/comfyui
---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "wip", header: "Wip settings"  });
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "folder", header: "Folder settings"  });
```
