---
ELN info:
  template: Create IA - Task - ComFyUI - Flux.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-25
  copyright: GNU Affero General Public License v3.0

project:
  name: IA

wip:
  type: IA
  description: Travaux sur IA

workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
tags:
  - status/wip
  - IA
  - IA/StabilityMatrix
  - IA/comfyui
  - IA/comfyui/flux
   - gguf q8
---

````ad-tip
Source : https://openart.ai/workflows/onion/flux-gguf-q8-12gb/X5HzyhrKjW2jqHVCTnvT?msockid=361bfd4e2eb863dd06e2e8cc2f4c62a5

workflow: workflow-flux-gguf-q8-12gb-X5HzyhrKjW2jqHVCTnvT-onion-openart.ai
⭐🚧 [workflow-flux-gguf-q8-12gb-X5HzyhrKjW2jqHVCTnvT-onion-openart.ai.json](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5C%5Cworkflow-flux-gguf-q8-12gb-X5HzyhrKjW2jqHVCTnvT-onion-openart.ai.json)
✅ #todo

![|400](https://cdn.openart.ai/workflow_thumbnails/rBg0ePF3BLUqr4QolcqX/image_NLouQvvs_1723969574067_raw.jpg)
````

````ad-quote
title: Generation data
collapse: closed

Primitive Nodes (2)

FluxGuidance (1)

UnetLoaderGGUF (1)

Custom Nodes (8)

ComfyUI

- CLIPTextEncode (2)

- VAEDecode (1)

- SaveImage (1)

- KSampler (1)

- EmptyLatentImage (1)

- DualCLIPLoader (1)

- VAELoader (1)

````

````ad-note
title: Note
Description
A very warm welcome to the Future and the GGUF era in ComfyUI on 12GB of VRAM.

- Please update ComfyUI. From August the 15th 2024 a new GUI is here. Polished and refined. Takes some using to, but worth it.
Move your old workflows if you wish from any directory to: ComfyUI/user/default/workflows
- in ComfyUI Manager look for and install “ComfyUI-GGUF” or if you wish you can manually install from: https://github.com/city96/ComfyUI-GGUF
- download the models and place the .gguf model files in your “ComfyUI/models/unet” folder [flux1-dev GGUF] from https://huggingface.co/city96/FLUX.1-dev-gguf [flux1-schnell GGUF] from https://huggingface.co/city96/FLUX.1-schnell-gguf
- Restart ComfyUI and upload the workflow.
- use the same Flux clips you already have and the same Flux vae.
Best results are with Euler – Beta - 25 to 35 seconds per generation using the Schnell with 4 steps.
Enjoy.



Node Diagram


````

```ad-info
title: Workflow Directories
collapse: closed
- [D:\IA\ComfyUI workflow\Download](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5C)
- [D:\IA\ComfyUI workflow\totest](file:///D:%5CIA%5CComfyUI%20workflow%5Ctotest%5C)
- [D:\IA\ComfyUI workflow](file:///D:%5CIA%5CComfyUI%20workflow%5C)
- [D:\dev-data\IA\Stability Matrix Project\workflow_auto](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow_auto%5C)
- [D:\dev-data\IA\Stability Matrix Project\workflow](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C)
```






`BUTTON[add-tasklist-no-ask]`


---

## Test reproduction en local

---
### StabilityMatrix 
### Test avec Comfy UI directement Workflow

```ad-info
collapse: closed

pour trouver un meilleur workflow pour  Openweb UI
```

```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow:

⭐🚧 [workflow-flux-gguf-q8-12gb-X5HzyhrKjW2jqHVCTnvT-onion-openart.ai.](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5Cworkflow-flux-gguf-q8-12gb-X5HzyhrKjW2jqHVCTnvT-onion-openart.ai.json)

```

---

```ad-seealso
title: config
collapse: closed


{Image}

```

---

```ad-info
title: prompt
collapse: closed

 two happy minions holding a sign reading 'FLUX GGUF'.
best quality, masterpiece,

```

---

```ad-success
title: Resultat

### Result Image with workflow

![FLUX_GGUF_Q8_00001_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00001_.png)


time:  **39.62 seconds**

![FLUX_GGUF_Q8_00002_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00002_.png)


time:  **29.99 seconds**






#### .

```

![[Assets/banner/Style1/Success.png|300]]

---

```````

`BUTTON[add-wip-ia-comfyui-workflow-image-result]`

`BUTTON[add-test-ia-workflow-qa,add-test-ia-workflow-success-qa,add-test-ia-workflow-failed-qa]`

---
#### ComfyUI 
[[#Test avec Comfy UI directement Workflow]]

---





---
## Local

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[2025/03/13/📒2025-03-25]]  00:09


