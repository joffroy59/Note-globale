---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

wip:
  types:
    - Flux NF4
    - WAN 2.1
  template:
    insert: Insert Wip IA - Task -
  Flux NF4:
    title: 'ComfyUI-Flux NF4 - '
    folder: IA/ComfyUI/Flux NF4
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux NF4
    tag:  '#IA/comfyui/flux #flux_NF4'
  WAN 2.1:
    title: 'WAN 2.1 - '
    folder: IA/ComfyUI/WAN 2.1
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - WAN 2.1
    tag:  '#IA/comfyui #WAN_2_1'


---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "wip", header: "Wip settings"  });
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "folder", header: "Folder settings"  });
```
