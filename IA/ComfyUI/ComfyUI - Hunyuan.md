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
✅ [OK - hunyuan_video_text_to_video.json](file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5COK%20-%20hunyuan_video_text_to_video.json)
🚧 [hunyuan_video_text_to_video.json](file:///D:%5Cdev-data%5CIA%5CComfyUI%20workflow%5Chunyuan_video_text_to_video.json)

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

- [-] If you’re entirely new to Hunyuan Video, Digialps team recommends checking out our previous [blog post](https://digialps.com/hunyuanvideo-an-open-source-ai-video-generator-surpassing-closed-source-models/?amp=1#h-how-to-get-started-with-hunyuanvideo) ❌ 2025-02-22
- [/] ### **Prerequisites Running Hunyuan on 8GB VRAM:**
	- [x] **ComfyUI Installation** ✅ 2025-02-22
	- [ ] **HunyuanVideo Model**
		- [x] [hunyuan-video-t2v-720p-Q4_0.gguf](https://huggingface.co/city96/HunyuanVideo-gguf/blob/main/hunyuan-video-t2v-720p-Q4_0.gguf) → Place in `ComfyUI/models/diffusion_models`.  [diffusion_models](file:///D:%5CIA%5CStabilityMatrix%5CModels%5Cdiffusion_models) ✅ 2025-02-22
		- [x] [clip_l.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/text_encoders/clip_l.safetensors?download=true) and [llava_llama3_fp8_scaled.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/text_encoders/llava_llama3_fp8_scaled.safetensors?download=true) → Place in `ComfyUI/models/text_encoders`. ✖️ ✅ 2025-02-22
		      --> [llava_llama3_fp8_scaled.safetensors](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CCLIP%5Cllava_llama3_fp8_scaled.safetensors)
		- [x] [hunyuan_video_vae_bf16.safetensors](https://huggingface.co/Comfy-Org/HunyuanVideo_repackaged/resolve/main/split_files/vae/hunyuan_video_vae_bf16.safetensors?download=true) → Place in `ComfyUI/models/vae`  deja dans [hyvid](file:///D:%5CIA%5CStabilityMatrix%5CModels%5CVAE%5Chyvid) ✅ 2025-02-22
- [x] ### [[#Step-by-Step Guide]] 737.58 seconds ✅ 2025-02-22 

### Step-by-Step Guide  

**737.58 seconds** ✅ 2025-02-22 
#### My Résultat 0 **737.58 seconds**
##### Config 
[hunyuan_video_text_to_video.json](file:///D:%5CIA%5CComfyUI%20workflow%5Chunyuan_video_text_to_video.json) 🆗 
![[ComfyUI - Hunyuan-1740251531462.png|150x96]]

##### Exécution  : test ✅ 2025-02-22

![[ComfyUI - Hunyuan-1740251724870.png|150x94]]  ![[ComfyUI - Hunyuan-1740251738285.png|150x88]]  
⚠ temps de génération très long : **737.58 seconds**
![[ComfyUI - Hunyuan-1740252081153.png|150x78]]
⚠ long
![[ComfyUI - Hunyuan-1740252286225.png|150x72]]  
⚠ long
résultat 🆗  : `Prompt executed in 737.58 seconds `✅ 2025-02-22
![[ComfyUI - Hunyuan-1740252500336.png|150x92]]

##### Résultat 🆗 **737.58 seconds**
![[20250222-1928-51.1019899.mp4]]



```ad-done

🕔temps :  time: Prompt executed in **737.58 seconds**
📷résultat: 
![[ComfyUI - Hunyuan-1740256426240.png]]
🗒️commentaire:  pas mal 
```


- [ ] [[#changement paramètre]] 
	- [ ] test 
		- [/] [[#^1337d6]] , 
			- [x] [[#My Résultat 1]]   ✅ 2025-02-22
			     
			      
		- [ ] [[#^b4829f]] , time: ❓
			- [ ] [[#My Résultat 2]]

### changement paramètre
- [x] **Tweak the “VAE Decode (Tiled)” Node:** This is where the magic happens. Within the workflow, locate the “VAE Decode (Tiled)” node. If you have a GPU with less than 32GB of VRAM, you’ll want to experiment with lowering the following parameters: ✅ 2025-02-22
    - tile_size
    - overlap
    - temporal_size
    - temporal_overlap
   
  Lowering these values tells ComfyUI to process even smaller temporal chunks, further reducing VRAM usage. ^1337d6
![Running Hunyuan on 8GB VRAM : Your Guide to Low-Memory AI Video](https://digialpsltd.b-cdn.net/wp-content/uploads/2024/12/image-53-1024x480.png)

--> 
#### My Résultat 1 **570.50 seconds**
##### Config 
![[ComfyUI - Hunyuan-1740253490536.png|150x102]]

##### Exécution  ✅ 2025-02-22
##### Résultat  **570.50 seconds**
```ad-done

🕔temps:  time: Prompt executed in **570.50 seconds**
📷résultat: 
![[ComfyUI - Hunyuan-1740255644087.png]]

🗒️commentaire: 

```

##### Résultat  Replay after restart  **??.50 seconds**

![[ComfyUI - Hunyuan-1740257531868.png|150x136]]  ![[ComfyUI - Hunyuan-1740257683158.png|150x90]]  

```log
got prompt
Using pytorch attention in VAE
Using pytorch attention in VAE
VAE load device: cuda:0, offload device: cpu, dtype: torch.bfloat16
model weight dtype torch.float8_e4m3fn, manual cast: torch.bfloat16
model_type FLOW
CLIP/text encoder model load device: cuda:0, offload device: cpu, current: cpu, dtype: torch.float16
clip missing: ['text_projection.weight']
Requested to load HunyuanVideoClipModel_
loaded completely 9633.8 7894.8529052734375 True
Requested to load HunyuanVideo
loaded partially 6020.759999999999 6018.549865722656 0
  0%|          | 0/20 [00:00<?, ?it/s]FETCH ComfyRegistry Data: 30/34
  5%|▌         | 1/20 [00:24<07:42, 24.33s/it]
 55%|█████▌    | 11/20 [04:17<03:29, 23.30s/it]
```

```ad-done

🕔temps:  time: Prompt executed in **???.50 seconds**
📷résultat: 


🗒️commentaire:  pas terrible 

```


- [x] **Consider FP8 Weights:** For those still bumping against memory limits or wanting to speed things up, check the “Load Diffusion Model” node. Select fp8 for the weight_d type. FP8 (8-bit floating point) is a lower-precision format that can accelerate inference and reduce memory consumption. ✅ 2025-02-22 ^b4829f

![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIyNiIgd2lkdGg9IjEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+)![](https://digialpsltd.b-cdn.net/wp-content/uploads/2024/12/image-54-1024x226.png)

#### My Résultat 2 **478.22 seconds**
##### Config 
![[ComfyUI - Hunyuan-1740255825909.png|150x167]]

##### Exécution ✅ 2025-02-22
![[ComfyUI - Hunyuan-1740256729277.png|150x113]]

```log
model_type FLOW
CLIP/text encoder model load device: cuda:0, offload device: cpu, current: cpu, dtype: torch.float16
clip missing: ['text_projection.weight']
Requested to load HunyuanVideoClipModel_
loaded completely 9633.8 7894.8529052734375 True
Requested to load HunyuanVideo
loaded partially 6020.759999999999 6018.549865722656 0
  0%|          | 0/20 [00:00<?, ?it/s]
  
```

![[ComfyUI - Hunyuan-1740256792514.png|150x94]]

```log
 10%|█         | 2/20 [00:43<06:26, 21.46s/it]
```

![[ComfyUI - Hunyuan-1740257361488.png|150x101]]
```log
100%|██████████| 20/20 [07:08<00:00, 21.45s/it]
Requested to load AutoencoderKL
0 models unloaded.
loaded partially 64.0 63.99985313415527 0
Prompt executed in 478.22 seconds
```

✅
##### Résultat  **478.22 seconds**
```ad-done

🕔temps:  time: Prompt executed in **478.22 seconds**
📷résultat: 
![[ComfyUI - Hunyuan-1740257428414.png]]

🗒️commentaire: 

```


## Experiencing the Power: An Example

- [ ] To illustrate the capabilities, consider this example prompt used by the ComfyUI team:

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




