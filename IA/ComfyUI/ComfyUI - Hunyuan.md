---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
---

---
 
`````ad-example
title: WIP IA - ComfyUI
collapse: open

```ad-tip
Source : https://aivideo.hunyuan.tencent.com/

worflow:  
[.json](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C.json)


image:  


```

```ad-note
title: Note
 

```

`````

[[ComfyUI - Hunyuan]]

- [/] [[#Test on low ram]]

---

## Test on low ram 


```embed
title: "Running Hunyuan on 8GB VRAM : Your Guide to Low-Memory AI Video"
image: "https://digialpsltd.b-cdn.net/wp-content/uploads/2024/12/1200-675-2-4.png"
description: "Generate stunning AI videos with Hunyuan on 8GB VRAM GPUs! Learn how ComfyUI's temporal tiling unlocks the power of Hunyuan AI for everyone."
url: "https://digialps.com/running-hunyuan-on-8gb-vram-your-guide-to-low-memory-ai-video/?amp=1"
```

- [ ] If you’re entirely new to Hunyuan Video, Digialps team recommends checking out our previous [blog post](https://digialps.com/hunyuanvideo-an-open-source-ai-video-generator-surpassing-closed-source-models/?amp=1#h-how-to-get-started-with-hunyuanvideo)
- [/] ### **Prerequisites Running Hunyuan on 8GB VRAM:**
	- [x] **ComfyUI Installation** ✅ 2025-02-22
	- [ ] **HunyuanVideo Model**
		- [x] [hunyuan-video-t2v-720p-Q4_0.gguf](https://huggingface.co/city96/HunyuanVideo-gguf/blob/main/hunyuan-video-t2v-720p-Q4_0.gguf) → Place in `ComfyUI/models/diffusion_models`.  [diffusion_models](file:///D:%5CIA%5CStabilityMatrix%5CModels%5Cdiffusion_models) ✅ 2025-02-22
		- [x] [clip_l.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/text_encoders/clip_l.safetensors?download=true) and [llava_llama3_fp8_scaled.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/text_encoders/llava_llama3_fp8_scaled.safetensors?download=true) → Place in `ComfyUI/models/text_encoders`. ✖️ ✅ 2025-02-22
		      --> [llava_llama3_fp8_scaled.safetensors](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CCLIP%5Cllava_llama3_fp8_scaled.safetensors)
		- [x] [hunyuan_video_vae_bf16.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/vae/hunyuan_video_vae_bf16.safetensors?download=true) → Place in `ComfyUI/models/vae`  deja dans [hyvid](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CVAE%5Chyvid) ✅ 2025-02-22
- [ ] ### **Step-by-Step Guide**:
	- [x] **Update Your ComfyUI:** Ensure you’re running the latest version of ComfyUI or ComfyUI Desktop (specifically version [0.3.10](https://github.com/comfyanonymous/ComfyUI/releases/tag/v0.3.10) or newer). This is crucial to access the temporal tiling features. ✅ 2025-02-22
	      --> ComfyUI version: 0.3.15 🆗 
	- [x] **Grab the Updated Workflow:** You’ll need to use a workflow specifically designed to leverage temporal tiling. Look for the updated example workflow ([Here](https://comfyanonymous.github.io/ComfyUI_examples/hunyuan_video/)). ✅ 2025-02-22
	      --> [hunyuan_video_text_to_video.json](file:///D:%5CIA%5CComfyUI%20workflow%5Chunyuan_video_text_to_video.json) 🆗 
	      ![[ComfyUI - Hunyuan-1740251531462.png|150x96]]
	- [ ] test 
	      ![[ComfyUI - Hunyuan-1740251724870.png|150x94]]  ![[ComfyUI - Hunyuan-1740251738285.png|150x88]]  
	      temps de generation tres long : ❓
	      ![[ComfyUI - Hunyuan-1740252081153.png|150x78]]
	      long
		- [ ] resultat 🆗  : 
	      
	- [ ] [[#changement paramètre]] 
		- [ ] test 
			- [ ] [[#^1337d6]] , time: ❓
				- [ ] résultat 🆗 🛑 : ❓ 
			- [ ] [[#^b4829f]] , time: ❓
				- [ ] résultat 🆗 🛑 : ❓



#### changement paramètre
- [ ] **Tweak the “VAE Decode (Tiled)” Node:** This is where the magic happens. Within the workflow, locate the “VAE Decode (Tiled)” node. If you have a GPU with less than 32GB of VRAM, you’ll want to experiment with lowering the following parameters:
    - tile_size
    - overlap
    - temporal_size
    - temporal_overlap
   
  Lowering these values tells ComfyUI to process even smaller temporal chunks, further reducing VRAM usage. ^1337d6

![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4MCIgd2lkdGg9IjEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+)![Running Hunyuan on 8GB VRAM : Your Guide to Low-Memory AI Video](https://digialpsltd.b-cdn.net/wp-content/uploads/2024/12/image-53-1024x480.png)

- [ ] **Consider FP8 Weights:** For those still bumping against memory limits or wanting to speed things up, check the “Load Diffusion Model” node. Select fp8 for the weight_d type. FP8 (8-bit floating point) is a lower-precision format that can accelerate inference and reduce memory consumption. ^b4829f

![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIyNiIgd2lkdGg9IjEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+)![](https://digialpsltd.b-cdn.net/wp-content/uploads/2024/12/image-54-1024x226.png)

## Experiencing the Power: An Example

To illustrate the capabilities, consider this example prompt used by the ComfyUI team:

![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4MCIgd2lkdGg9Ijg0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=)![Running Hunyuan on 8GB VRAM : Your Guide to Low-Memory AI Video](https://digialpsltd.b-cdn.net/wp-content/uploads/2024/12/56967af9-c049-4c33-a142-df21ec08d096_848x480.webp)

“Inside an abandoned factory, the camera tracks a male protagonist walking through a large space filled with industrial machinery. The pipes and machines slowly rotate and adjust their positions, creating an eerie sense of motion”

Using temporal tiling with settings like tile_size = 128, overlap=32, temporal_size=32, and temporal_overlap=4, this complex scene can now be brought to life even on an 8GB card.

---

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow Auto]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[2025/02/08/📒2025-02-22]]  19:49




