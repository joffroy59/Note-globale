---

ELN info:
  template: Create IA - Comfy UI.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-21
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
  - WAN_2_1
  - IA/workflow
  - IA/comfy_ui/workflow
  - workflow/workflow
---
````ad-tip
Source : https://huggingface.co/zer0int/CLIP-GmP-ViT-L-14

workflow: workflow_test
⭐🚧 [workflow_test.json](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5Cworkflow_test.json)
✅ #todo

````


````ad-note
title: Note

trouvé en ccherchant a ccorriger l'erreur avec Flux

dans ComfyUI les log : clip missing: ['text_projection.weight']

forum :
```embed
title: "clip missing: ['text_projection.weight'] · Issue #5260 · comfyanonymous/ComfyUI"
image: "https://opengraph.githubassets.com/ceb58618e62f91dc8734b4e1eb36c786a7a5b375d09e7744d0ed03392489c6b7/comfyanonymous/ComfyUI/issues/5260"
description: "Your question I am getting: clip missing: ['text_projection.weight'] In a workflow that has flux and sdxl a the same time: I wonder what is problem Logs No response Other No response"
url: "https://github.com/comfyanonymous/ComfyUI/issues/5260"
```



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

```ad-note
- 👉 The "TEXT" model has superior prompt following, especially for text, but also for other details. [DOWNLOAD](https://huggingface.co/zer0int/CLIP-GmP-ViT-L-14/blob/main/ViT-L-14-TEXT-detail-improved-hiT-GmP-TE-only-HF.safetensors)
- 👉 The "SMOOTH" model can sometimes** have better details (when there's no text in the image). [DOWNLOAD](https://huggingface.co/zer0int/CLIP-GmP-ViT-L-14/blob/main/ViT-L-14-BEST-smooth-GmP-TE-only-HF-format.safetensors)
- The "GmP" initial fine-tune is deprecated / inferior to the above models. Still, you can [DOWNLOAD](https://huggingface.co/zer0int/CLIP-GmP-ViT-L-14/blob/main/ViT-L-14-GmP-ft-TE-only-HF-format.safetensors) it.

**: The "TEXT" model is the best for text. Full stop. But whether the "SMOOTH" model is better for your (text-free) scenario than the "TEXT" model really depends on the specific prompt. It might also be the case that the "TEXT" model leads to images that you prefer over "SMOOTH"; the only way to know is to experiment with both.

[![image/png|300](https://cdn-uploads.huggingface.co/production/uploads/6490359a877fc29cb1b09451/y-B-FimzahYqskNr2MV1C.png)](https://cdn-uploads.huggingface.co/production/uploads/6490359a877fc29cb1b09451/y-B-FimzahYqskNr2MV1C.png)



```

---

`BUTTON[add-tasklist-no-ask]`

---
## Tasks
- [x] Download  3 model ➕ 2025-03-21
	- [x] 👉 he "TEXT" model  ViT-L-14-TEXT-detail-improved-hiT-GmP-TE-only-HF.safetensors ✅ 2025-03-21
	- [x] 👉The "SMOOTH" model : ViT-L-14-BEST-smooth-GmP-TE-only-HF-format.safetensors ✅ 2025-03-21
	- [x] The "GmP" initial fine-tune is deprecated ViT-L-14-GmP-ft-TE-only-HF-format.safetensors ✅ 2025-03-21

- [x] Install in [CLIP](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CCLIP) ✅ 2025-03-21
- [ ] [[#Test sur Workflow qui fonctionne deja]]


![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742589720818.png|400x147]]

---
## Tasks Detail


### Test sur Workflow qui fonctionne deja




## Test reproduction en local

---
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

⭐🚧 [workflow-flux-basic-workflow-with-12gb-vram-gpu-0Uff0E2X9RTvcVXatIqI-akihungac-openart.ai (2).](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5Cworkflow-flux-basic-workflow-with-12gb-vram-gpu-0Uff0E2X9RTvcVXatIqI-akihungac-openart.ai (2).json)

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

 Yellow Suzuki Jimny, a small modern car, escaping on an iceberg, antarctic landscape, snow storm,ultra wide angle, drone shot

```

---
```ad-abstract
title: Original
seed: 198801461637189

![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742590183850.png|400x400]]

```

time: **35.21 seconds**

---
```ad-success
title: Resultat
![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742590694418.png|400x198]]

![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742591565539.png|400x400]]
```

time: **37.91 seconds**

![[Assets/banner/Style1/Success.png|300]]

---
```ad-success
title: Resultat
![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742590871579.png|400x201]]

![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742590943514.png|400x400]]

```

time: **36.92 seconds**

![[Assets/banner/Style1/Success.png|300]]

---
```ad-success
title: Resultat
![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742591230105.png|400x197]]

![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742591252695.png|400x400]]

```

time: **37.51 seconds**

![[Assets/banner/Style1/Success.png|300]]

---
```````

`BUTTON[add-test-ia-workflow-qa,add-test-ia-workflow-success-qa,add-test-ia-workflow-failed-qa]`
### Test avec Comfy UI directement Workflow


```````ad-success

![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742596130693.png|400x400]]
time:  **36.67 seconds**

![[Assets/banner/Style1/Success.png|300]]

---

```````

`BUTTON[add-test-ia-workflow-qa,add-test-ia-workflow-success-qa,add-test-ia-workflow-failed-qa]`
### Test avec Comfy UI directement Workflow


```````ad-success



![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742596319169.png|400x400]]

time:  **41.56 seconds**
![[Assets/banner/Style1/Success.png|300]]
```````

`BUTTON[add-test-ia-workflow-qa,add-test-ia-workflow-success-qa,add-test-ia-workflow-failed-qa]`
### Test avec Comfy UI directement Workflow


```````ad-success

![[IA Comfy UI -  Workflow - change transformers  CLIP-L-1742596645583.png|400x400]]

time:  **36.92 seconds**
![[Assets/banner/Style1/Success.png|300]]
```````

`BUTTON[add-test-ia-workflow-qa,add-test-ia-workflow-success-qa,add-test-ia-workflow-failed-qa]`






---
## Local

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[2025/03/12/📒2025-03-21]]  21:25


