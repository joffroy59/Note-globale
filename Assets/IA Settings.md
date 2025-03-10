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
    - Open WebUI
  template:
    insert: Insert Wip IA - Task -
  Generic:
    title: IA Wip -
    folder: IA/Wip
    template:
      create: Templates/IA/Create IA - Task - Generic
    tag:  '#IA'
  Model:
    title: IA Model -
    folder: IA/Model
    template:
      create: Templates/IA/Create IA - Task - Model
    tag:  '#IA/model'
  ComFyUI:
    title: ComfyUI -
    folder: IA/ComfyUI
    template:
      create: Templates/IA/Create IA - Task - ComFyUI
    tag:  '#IA/comfyui'
  workflow:
    title: IA workflow -
    folder: IA/ComfyUI/workflow
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - workflow
    tag:  '#IA/comfyui  #workflow'
  ComFyUI - Flux:
    title: ComfyUI-Flux -
    folder: IA/ComfyUI/Flux
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux
    tag:  '#IA/comfyui/flux'
  civitai:
    title: civitai -
    folder: IA/ComfyUI/civitai
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - civitai
    tag: '#IA/civitai'
  Flux NF4:
    title: ComfyUI-Flux NF4 -
    folder: IA/ComfyUI/Flux NF4
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux NF4
    tag:  '#IA/comfyui/flux  #flux_NF4'
  WAN 2.1:
    title: WAN 2.1 -
    folder: IA/ComfyUI/WAN 2.1
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - WAN 2.1
    tag:  '#IA/comfyui   #WAN_2_1'
  Application:
    title: IA Application -
    folder: IA/Application
    template:
      create: Templates/IA/Create IA - Task - Application
    tag:  '#IA/application'
    type:
      - local
      - online
  StabilityMatrix - Application:
    title: StabilityMatrix - Application -
    folder: IA/StabilityMatrix/Application
    template:
      create: Templates/IA/Create IA - Task - StabilityMatrix - Application
    tag:  '#IA/StabilityMatrix #IA/StabilityMatrix/application #application'
  Open WebUI:
    title: IA Open WebUI - 
    folder: IA/Open WebUI
    template:
      create: Templates/IA/Create IA - Open WebUI
    tag:  '#IA/model   #IA/open_webui'
    sub_type:
      - Model
      - Tool
execution:
  - docker
  - windows

---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "wip", header: "Wip settings"  });
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "folder", header: "Folder settings"  });
```
