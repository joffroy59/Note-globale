---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

chat:
  list:
    - Lechat
    - Microsoft Copilot
  Lechat:
    logo: mistral-ai-icon-seeklogo.svg
  Microsoft Copilot:
    logo: Microsoft_Copilot.svg

wip:
  types:
    - Generic
    - Model
    - ComFyUI
    - workflow
    - ComFyUI - Flux
    # - civitai
    - Flux NF4
    - WAN 2.1
    - Application
    - StabilityMatrix - Application
    - Open WebUI
    - Comfy UI
    - Task
    - Fix
  template:
    insert: Insert Wip IA - Task -
  Generic:
    title: 'IA Wip - '
    folder: IA/Wip
    template:
      create: Templates/IA/Create IA - Task - Generic
    tag:  '#IA'
  Model:
    title: 'IA Model - '
    folder: IA/Model
    template:
      create: Templates/IA/Create IA - Task - Model
    tag:  '#IA/model'
  ComFyUI:
    title: 'ComfyUI - '
    folder: IA/ComfyUI
    template:
      create: Templates/IA/Create IA - Task - ComFyUI
    tag:  '#IA/comfyui'
  workflow:
    title: 'IA workflow - '
    folder: IA/ComfyUI/workflow
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - workflow
    tag:  '#IA/comfyui #workflow'
  ComFyUI - Flux:
    title: 'ComfyUI-Flux - '
    folder: IA/ComfyUI/Flux
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux
    tag:  '#IA/comfyui/flux'
  civitai:
    title: 'civitai - '
    folder: IA/ComfyUI/civitai
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - civitai
    tag: '#IA/civitai'
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
  Application:
    title: 'IA Application - '
    folder: IA/Application
    template:
      create: Templates/IA/Create IA - Task - Application
    tag:  '#IA/application'
    type:
      - local
      - online
      - undefined
  StabilityMatrix - Application:
    title: 'StabilityMatrix - Application - '
    folder: IA/StabilityMatrix/Application
    template:
      create: Templates/IA/Create IA - Task - StabilityMatrix - Application
    tag:  '#IA/StabilityMatrix #IA/StabilityMatrix/application #application'
  Open WebUI:
    title: 'IA Open WebUI - '
    folder: IA/Open WebUI
    template:
      create: Templates/IA/Create IA - Open WebUI
    tag: ''
    tag_type: '#IA/open_webui'
    sub_type:
        - Function
        - Generic
        - Knowedge
        - Model
        - Pipeline
        - Tool
    Knowedge:
      tag:
        - '#IA/rag'
    Function:
      tag:
        - '#IA/function'
    Pipeline:
      tag:
        - '#IA/pipeline'
    Generic:
      tag:
  Comfy UI:
      title: 'IA Comfy UI - '
      folder: IA/ComfyUI
      template:
        create: Templates/IA/Create IA - Comfy UI
      tag: '#IA/comfyui/flux #WAN_2_1'
      tag_type: '#IA #IA/comfy_ui'
      sub_type:
        - civitai
        - WAN 2.1
        - Workflow
        - Knowedge
      civitai:
        tag:
      WAN 2.1:
        tag:
          - '#IA/comfyui/flux'
      Workflow:
        tag:
          - '#workflow'
  Task:
    title: 'Task - '
    folder: IA/Task
    template:
      create: Templates/IA/Create IA - Task - Task
    tag: '#IA/task #task'
  Fix:
    title: 'Fix - '
    folder: IA/Fix
    template:
      create: Templates/IA/Create IA - Task - Fix
    tag: '#to_fix #fix'
    tag_type: '#IA'
    sub_type:
      - ComfyUI
    ComfyUI:
      tag:
        - '#IA/comfyui'

execution:
  - docker
  - windows



logo:
  ia:
    list:
      - mistral-ai-icon
      - Microsoft_Copilot
      - google-gemini
      - open-webui-circle
      - open-webui
      - mistral-ai
    mistral-ai-icon:
      image: mistral-ai-icon-seeklogo.svg
    Microsoft_Copilot:
      image: Microsoft_Copilot.svg
    google-gemini:
      image: google-gemini-icon.svg
    open-webui-circle:
      image: open-webui-circle.png
    open-webui:
      image: open-webui.png
    mistral-ai:
      image: mistral-ai-seeklogo.svg


folders:
  sources:
    - C:\Test\Download
  workflow:
    - C:\Test\Target\
    - D:\IA\ComfyUI workflow\Download
    - D:\IA\ComfyUI workflow\totest
    - D:\IA\ComfyUI workflow
    - D:\dev-data\IA\Stability Matrix Project\workflow_auto
    - D:\dev-data\IA\Stability Matrix Project\workflow


---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "wip", header: "Wip settings"  });
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "folder", header: "Folder settings"  });
```
