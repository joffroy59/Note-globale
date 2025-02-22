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
		- [ ] [clip_l.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/text_encoders/clip_l.safetensors?download=true) and [llava_llama3_fp8_scaled.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/text_encoders/llava_llama3_fp8_scaled.safetensors?download=true) → Place in `ComfyUI/models/text_encoders`. ✖️
		- [x] [hunyuan_video_vae_bf16.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/vae/hunyuan_video_vae_bf16.safetensors?download=true) → Place in `ComfyUI/models/vae`  deja dans [hyvid](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CVAE%5Chyvid) ✅ 2025-02-22


---

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow Auto]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```

---
creation date:: [[2025/02/08/📒2025-02-22]]  19:49




