---
ELN info:
  template: Create IA - Task - ComFyUI - workflow.md
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
  - workflow
---

````ad-tip
Source : https://openart.ai/workflows/xuxx/-/uFjN30XBXR1nZlUudmdz

workflow: workflow--uFjN30XBXR1nZlUudmdz-xuxx-openart.ai
⭐🚧 [workflow--uFjN30XBXR1nZlUudmdz-xuxx-openart.ai.json](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5C%5Cworkflow--uFjN30XBXR1nZlUudmdz-xuxx-openart.ai.json)
✅ #todo

![|400](https://cdn.openart.ai/workflow_thumbnails/user_2tVkqJuzw5wKZWGs3k62W2n9XIK/image_8fYgZTvt_1742776210325_raw.jpg)
````

````ad-quote
title: Generation data
collapse: closed

Primitive Nodes (45)

DepthAnything_V2 (1)

DownloadAndLoadDepthAnythingV2Model (1)

FluxGuidance (1)

GetNode (15)

Image Comparer (rgthree) (1)

ImageComposite+ (2)

ImageRemoveAlpha+ (1)

InvertImageNode (1)

Note Plus (mtb) (2)

RH_Captioner (1)

ReduxAdvanced (1)

Reroute (1)

SetNode (15)

easy ifElse (1)

easy isMaskEmpty (1)

Custom Nodes (84)

ComfyUI

- ImageToMask (1)

- EmptyImage (3)

- ImageCrop (1)

- DifferentialDiffusion (1)

- PreviewImage (18)

- LoraLoaderModelOnly (2)

- KSampler (1)

- CLIPVisionLoader (1)

- VAEDecode (1)

- CLIPTextEncode (1)

- SaveImage (1)

- MaskToImage (2)

- StyleModelLoader (1)

- ControlNetLoader (1)

- ControlNetApplyAdvanced (1)

- ConditioningZeroOut (1)

- VAELoader (1)

- DualCLIPLoader (1)

- UNETLoader (1)

- InpaintModelConditioning (1)

- LoadImage (2)

ComfyUI Easy Use

- easy cleanGpuUsed (1)

ComfyUI Essentials

- GetImageSize+ (6)

- SimpleMath+ (1)

- ImageResize+ (1)

- MaskPreview+ (6)

ComfyUI Impact Pack

- ImpactFrom_SEG_ELT_crop_region (1)

- ImpactDecomposeSEGS (2)

- ImpactSEGSOrderedFilter (2)

- SEGSPreview (2)

- ImpactFrom_SEG_ELT (2)

- ToBinaryMask (2)

- MaskToSEGS (2)

ComfyUI Layer Style

- LayerUtility: ImageScaleRestore (1)

- LayerUtility: ImageScaleByAspectRatio (1)

- LayerMask: CreateGradientMask (1)

- LayerMask: SegmentAnythingUltra V2 (1)

ComfyUI-IC-Light-Native

- ICLightApplyMaskGrey (2)

KJNodes for ComfyUI

- ImageConcanate (4)

- GrowMaskWithBlur (1)

- ImageAndMaskPreview (1)

Masquerade Nodes

- Image To Mask (1)








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

⭐🚧 [workflow--uFjN30XBXR1nZlUudmdz-xuxx-openart.ai.](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5Cworkflow--uFjN30XBXR1nZlUudmdz-xuxx-openart.ai.json)

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

 

```

---

```ad-success
title: Resultat

### Result Image with workflow


#### .

```

![[Assets/banner/Style1/Success.png|300]]

---

```ad-failure
title: Resultat


{Image}

```

time: **todo**

![[Assets/banner/Style1/Failure.png|300]]

---

```````

`BUTTON[add-wip-ia-comfyui-workflow-image-result]`

### Test Done

````ad-success
title: "Test"

#### Result

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
creation date:: [[2025/03/13/📒2025-03-27]]  08:42


