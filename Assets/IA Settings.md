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
  Generic:
    title: IA Wip -
    folder: IA/Wip
    template:
      create: Templates/IA/Create IA - Task - Generic
    tag: IA
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
  ComFyUI - Flux:
    title: ComfyUI-Flux -
    folder: IA/ComfyUI/Flux
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux
    tag: IA/comfyui/flux
---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "wip", header: "Wip settings"  });
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "folder", header: "Folder settings"  });
```
