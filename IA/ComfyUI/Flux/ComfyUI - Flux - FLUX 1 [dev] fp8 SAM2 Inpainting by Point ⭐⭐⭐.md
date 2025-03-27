---
ELN info:
  template: Create IA - Task - ComFyUI - Flux.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-27
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
   - dev fp8 - kijai
---

````ad-tip
Source : https://openart.ai/workflows/rat_fickle_85/flux-1-dev-fp8-sam2-inpainting-by-point/bgIs4bxbApq4SObJu2NZ

workflow: workflow-flux-1-dev-fp8-sam2-inpainting-by-point-bgIs4bxbApq4SObJu2NZ-rat_fickle_85-openart.ai
⭐🚧 [workflow-flux-1-dev-fp8-sam2-inpainting-by-point-bgIs4bxbApq4SObJu2NZ-rat_fickle_85-openart.ai.json](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5C%5Cworkflow-flux-1-dev-fp8-sam2-inpainting-by-point-bgIs4bxbApq4SObJu2NZ-rat_fickle_85-openart.ai.json)
✅ #todo

![|400](https://cdn.openart.ai/workflow_thumbnails/xpQtmPCX0LC3t5CMyvEQ/image_w3wDqqKo_1724100696427_raw.jpg)
````

````ad-quote
title: Generation data
collapse: closed

Primitive Nodes (6)

DownloadAndLoadSAM2Model (1)

FluxGuidance (1)

Image Comparer (rgthree) (1)

PointsEditor (1)

Sam2VideoSegmentation (1)

Sam2VideoSegmentationAddPoints (1)

Custom Nodes (18)

ComfyUI

- CLIPTextEncode (1)

- VAEDecode (1)

- VAELoader (1)

- DualCLIPLoader (1)

- UNETLoader (1)

- SamplerCustomAdvanced (1)

- KSamplerSelect (1)

- BasicScheduler (1)

- BasicGuider (1)

- RandomNoise (1)

- SetLatentNoiseMask (1)

- LoadImage (1)

- VAEEncode (1)

- DifferentialDiffusion (1)

- PreviewImage (1)

- SaveImage (1)

ComfyUI Impact Pack

- ImpactDilateMask (1)

comfyui-art-venture

- PrepareImageAndMaskForInpaint (1)

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


image origian l a comaprer 
![[ComfyUI - Flux - FLUX 1 _dev_ fp8 SAM2 Inpainting by Point-1743061053241.png|400x400]]


```

```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow:

⭐🚧 [workflow-flux-1-dev-fp8-sam2-inpainting-by-point-bgIs4bxbApq4SObJu2NZ-rat_fickle_85-openart.ai.](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5Cworkflow-flux-1-dev-fp8-sam2-inpainting-by-point-bgIs4bxbApq4SObJu2NZ-rat_fickle_85-openart.ai.json)

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

 A modern municipality office building in an urban setting, constructed with sustainable materials and incorporating green design principles, large windows maximize natural light, a rooftop garden provides a green space for employees and visitors, the building's design is both functional and aesthetically pleasing, reflecting the progressive values of the municipality, people entering and exiting the building, a sense of civic pride and environmental responsibility, photorealistic, 8k, ultra detailed, epic composition, cinematic color grading, architectural photography, wide-angle lens, natural lighting, shadows, reflections

```

---

```ad-success
title: Resultat

### Result Image with workflow

![rgthree.compare._temp_tfqkm_00001_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/rgthree.compare._temp_tfqkm_00001_.png)


time:  **72.29 seconds**

---



#### .

```

![[Assets/banner/Style1/Success.png|300]]

---

```````

`BUTTON[add-wip-ia-comfyui-workflow-image-result]`

### Test Done

````ad-success
title: "Test"

#### Result

---

> [!multi-column]
>
>> [!blank]
>> ![rgthree.compare._temp_tfqkm_00002_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/rgthree.compare._temp_tfqkm_00002_.png)
>> time:  **72.29 seconds**
>


---

##### .
````


#### Add Success image

`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip]`
`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip-inner, add-image-result-success-wip-inner-col]`

`BUTTON[add-test-ia-workflow-qa,add-test-ia-workflow-success-qa,add-test-ia-workflow-failed-qa]`

`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip]`
`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip-inner, add-image-result-success-wip-inner-col]`

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
creation date:: [[2025/03/13/📒2025-03-27]]  08:32


