---
ELN info:
  template: Create IA - Task - ComFyUI - Flux NF4.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-24
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
   - flux_NF4➕
   - nf4-bnb
---

````ad-tip
Source : https://civitai.com/models/638572?modelVersionId=714092

workflow: NF4-BnB-Workflow
⭐🚧 [NF4-BnB-Workflow.json](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5C%5CNF4-BnB-Workflow.json)
✅ #todo

![|400](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/49c9dfbf-de8f-4fa9-895c-d00fa1c83cbf/anim=false,width=450/ComfyUI_00403_.jpeg)
````

````ad-quote
title: Generation data
collapse: closed

About this version
Main model in bnb-nf4

T5xxl in fp8e4m3fn

CLIP-L in fp16

VAE in bf16

````

````ad-note
title: Note
NF4 and FP8 Checkpoints:

NF4 Checkpoint (flux1-dev-bnb-nf4.safetensors): Optimized for performance with speed improvements ranging from 1.3x to 4x compared to FP8, depending on the GPU and software setup. NF4 is now the recommended format for most users with compatible GPUs (RTX 3XXX/4XXX series).

FP8 Checkpoint (flux1-dev-fp8.safetensors): Provided as an alternative for older GPUs that do not support NF4.

Performance Improvements:

NF4 demonstrates faster inference speeds and reduced memory usage compared to FP8, making it highly efficient for image diffusion tasks.

The NF4 utilizes multiple tensor precisions (float32, float16, uint8, int4) to achieve higher numerical precision and dynamic range, outperforming FP8 in most scenarios.

Distilled CFG Guidance:

Flux-dev now includes distilled model guidance, where CFG is recommended to be set at 1 with a new "Distilled CFG Guidance" feature set at 3.5 for optimal results. Negative prompts are discouraged in this setup.

Installation and Usage Instructions(ComfyUI):
NF4-BnB Node is now available at ComfyUI Manager. Need to select 'Channel: dev' in order to find it.

1. Clone the Official Node:
Clone the official ComfyUI NF4 Node repository into the custom_nodes folder using the following command:
git clone https://github.com/comfyanonymous/ComfyUI_bitsandbytes_NF4.git

2. Install Dependency:

Activate Virtual Environment(venv).

Install or update the bitsandbytes package with the following command:
pip install -U bitsandbytes

3. Update Requirement: Ensure your ComfyUI is up to date.

4. Node Setup: Use the CheckpointLoaderNF4 node in your Flux workflow, replacing the regular checkpoint loader node.

Workflow containing NF4 node included in post files. (.zip json - training data)

For ComfyUI Portable Version:

1. Ensure your ComfyUI is up to date and that the NF4 Node is placed inside the custom_nodes directory.

2. From the [comfy install dir] directory, run the following command to install the required packages:
python_embeded\python.exe -m pip install -r ComfyUI\custom_nodes\ComfyUI_bitsandbytes_NF4\requirements.txt
This command should be executed at the root of the ComfyUI directory for the portable version.


Compatibility: Users with older GPUs or specific setups (like GTX 10XX/20XX) are cautioned to use the FP8 checkpoint, as their devices may not support NF4. Additionally, loading FP8 checkpoints with NF4 options can lead to unnecessary delays and reduced quality.


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

⭐🚧 [NF4-BnB-Workflow.](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5CNF4-BnB-Workflow.json)

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

![ComfyUI_00403_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/ComfyUI_00403_.png)


time:  **SS.mm seconds**




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
creation date:: [[2025/03/13/📒2025-03-24]]  23:01


