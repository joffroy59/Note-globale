---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
tags:
  - status/wip
  - IA
  - IA/comfyui
  - IA/comfyui/flux
  - IA/StabilityMatrix
  - flux_NF4➕
---
```ad-tip
Source : https://civitai.com/articles/11975/wan-21-the-real-video-evolution-models-wf-tips-comfyui

worflow: img2vid-wan2.1-example 
⭐ [img2vid-wan2.1-example.json](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5Cimg2vid-wan2.1-example.json)
🚧 [img2vid-wan2.1-example.json](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow_auto%5Cimg2vid-wan2.1-example.json)
✅ #todo 

image: ![|400](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d64da44e-3105-40c4-a345-9983d8ae0732/width=1320/Dise%C3%B1o%20sin%20t%C3%ADtulo.jpeg)


```

````ad-quote
title: Generation data

 

````

```ad-note
title: Note
autre source 
```embed
title: "Wan 2.1: Video generation with Complex movements"
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHUOzZpvOvrRA0MVfLibh-Dv8n-4pySKXDacLhKOaPE2O7U-AdKSsRdeiUvUdxbW3K9tKF7s7GjlnlCHigjlIdYDHm3Nig8oie7jiLt9xCzRa3LA1UGNUgxGkhcvRFhAbiDQPUuAMlaJo9JMb961qrodyjhv8yaB4Jv71P2W0vIxekdrCWxC1bJ3koBim4/w640-h410/download-Wan-video.webp"
description: "We make you learn all about the Stable Diffusion from scratch. Master you AiArt generation, get tips and tricks to solve the problems with easy method"
url: "https://www.stablediffusiontutorials.com/2025/02/wan-video-generation.html"
```

 

```
```ad-info
title: Workflow Directories
collapse: closed
- [D:\IA\ComfyUI workflow\Download](file:///D:%5CIA%5CComfyUI%20workflow%5CDownload%5C)
- [D:\IA\ComfyUI workflow\totest](file:///D:%5CIA%5CComfyUI%20workflow%5Ctotest%5C)
- [D:\IA\ComfyUI workflow](file:///D:%5CIA%5CComfyUI%20workflow%5C)
- [D:\dev-data\IA\Stability Matrix Project\workflow_auto](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow_auto%5C)
- [D:\dev-data\IA\Stability Matrix Project\workflow](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C)
```


---

## Test reproduction en local

---
### StabilityMatrix 

#### ComfyUI 
##### Config
- [x] install  
	- [x] [umt5_xxl_fp8_e4m3fn_scaled.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/tree/main/split_files/text_encoders) goes in: ComfyUI/models/text_encoders/  [umt5_xxl_fp8_e4m3fn_scaled.safetensors](file:///D:%5CIA%5CStabilityMatrix%5CPackages%5CComfyUI%5Cmodels%5Ctext_encoders%5Cumt5_xxl_fp8_e4m3fn_scaled.safetensors) ✅ 2025-02-27
	- [x] [wan_2.1_vae.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/blob/main/split_files/vae/wan_2.1_vae.safetensors) goes in: ComfyUI/models/vae/  [wan_2.1_vae.safetensors](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CVAE%5Cwan_2.1_vae.safetensors) ✅ 2025-02-27
	- [ ] ~~The diffusion models can be found~~ [~~here~~](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/tree/main/split_files/diffusion_models) (yes but you have a better option from THE KIJAI MASTER) -> [https://huggingface.co/Kijai/WanVideo_comfy/tree/main](https://huggingface.co/Kijai/WanVideo_comfy/tree/main) 
	      These files go in: ComfyUI/models/diffusion_models/  
	- [ ] [clip_vision_h.safetensors](https://huggingface.co/Comfy-Org/Wan_2.1_ComfyUI_repackaged/blob/main/split_files/clip_vision/clip_vision_h.safetensors) which goes in: ComfyUI/models/clip_vision/ 
	- [ ] Download the attached workflow for Image to video ( sorry, I have not tested text to video, I prefer to have a reference image), and install the missing nodes from the manager. [img2vid-wan2.1-example.json](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow_auto%5Cimg2vid-wan2.1-example.json)
Seed : 
##### Execution
galére 
![[WAN 2.1 - _Updated_ WAN 2.1 The REAL VIDEO EVOLUTION - Models + WF + Tips (COMFYUI)-1740695141959.png|150x84]]

##### Result
bof nimporte quoi 

![[wan_00003.mp4]]
---

[Wan 2.1: Video generation with Complex movements](https://www.stablediffusiontutorials.com/2025/02/wan-video-generation.html)

#### ComfyUI 
##### Config
Seed : 
##### Execution
##### Result
---
## Local

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[2025/02/09/📒2025-02-27]]  21:41
