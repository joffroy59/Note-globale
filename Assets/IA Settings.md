---
ELN version: 0.4.2
note:
  author: Jerome Offroy
  initials: JO

chat:
  list:
    - Lechat
    - Microsoft Copilot
    - ChatGpt
  Lechat:
    logo: mistral-ai-icon-seeklogo.svg
  Microsoft Copilot:
    logo: Microsoft_Copilot.svg
  ChatGpt:
    logo: chatgpt-seeklogo.svg

wip:
  types:
    - Generic
    - Model
    - ComFyUI
    - workflow
    - ComFyUI - Flux
    - ComFyUI - Flux (Test)
    - openart.ai - Flux
    - civitai
    - Flux NF4
    - WAN 2.1
    - Application
    - StabilityMatrix - Application
    - Open WebUI
    - Comfy UI
    - Nvidia ChatRTX
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
    title: 'ComfyUI - Flux - '
    folder: IA/ComfyUI/Flux
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux
    tag:  '#IA/comfyui/flux'
  ComFyUI - Flux (Test):
    title: 'ComfyUI - Flux - '
    folder: IA/ComfyUI/Flux
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - Flux (Test)
    tag:  '#IA/comfyui/flux'
  civitai:
    title: 'civitai - '
    folder: IA/ComfyUI/civitai
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - civitai
    tag: '#IA/civitai'
  openart.ai:
    title: 'openart.ai - '
    folder: IA/ComfyUI/openart.ai
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - openart.ai
    tag: '#IA/openart.ai'
  openart.ai - Flux:
    title: 'openart.ai - '
    folder: IA/ComfyUI/openart.ai
    template:
      create: Templates/IA/Create IA - Task - ComFyUI - openart.ai
    tag: '#IA/openart.ai #IA/comfyui/flux'
  Flux NF4:
    title: 'ComfyUI - Flux NF4 - '
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
      create: Templates/IA/Create IA - Nvidia ChatRTX
    tag: '#nidia'
    tag_type: '#IA/chatrtx'
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
  Nvidia ChatRTX:
    title: 'Nvidia ChatRTX - '
    folder: IA/Nvidia ChatRTX
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
  - unknow

image:
  type:
    flux:
      - NF4-BnB
      - Schnell NF4-BnB
      - DEV FP8 - Kijai
      - Schnell FP8 Kijai
      - Schnell]
      - GGUF
      - GGUF Q8


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
  workflow:
    sources:
      - C:\Users\jerom\Downloads
      # - C:\Test\Download
    destination:
      # - C:\Test\Target\
      # - D:\dev-data\IA\ComfyUI workflow\Download\
      - D:\IA\ComfyUI workflow\Download\
      - D:\IA\ComfyUI workflow\totest
      - D:\IA\ComfyUI workflow
      - D:\dev-data\IA\Stability Matrix Project\workflow_auto
      - D:\dev-data\IA\Stability Matrix Project\workflow
  image:
    sources:
      - C:\Users\jerom\Downloads
      # - C:\Test\Download
    destination:
      - D:\obsidian\MyNote\Note-globale\IA\ComfyUI\Result\


---

## Settings

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "wip", header: "Wip settings"  });
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/properties", { key: "folder", header: "Folder settings"  });
```
