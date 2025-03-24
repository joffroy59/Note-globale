---
ELN info:
  template: Create IA - Task - ComFyUI - civitai.md
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
  - IA/civitai
---
````ad-tip
Source : https://civitai.com/models/883426?modelVersionId=988886

![|400](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/db53cfe3-0aa7-40fa-8fbd-143ddbc9f8ba/anim=false,width=450/image.jpeg)  ![|400](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d2762f4c-4423-48a0-a683-97e01bb25722/original=true,quality=90/ComfyUI_00001_.jpeg)  
````

````ad-quote
title: Generation data
collapse: closed

{"nodes":[{"id":13,"type":"SamplerCustomAdvanced","pos":{"0":864,"1":192},"size":{"0":272.3617858886719,"1":124.53733825683594},"flags":{},"order":11,"mode":0,"inputs":[{"name":"noise","type":"NOISE","link":37,"slot_index":0},{"name":"guider","type":"GUIDER","link":122,"slot_index":1},{"name":"sampler","type":"SAMPLER","link":19,"slot_index":2},{"name":"sigmas","type":"SIGMAS","link":20,"slot_index":3},{"name":"latent_image","type":"LATENT","link":119,"slot_index":4}],"outputs":[{"name":"output","type":"LATENT","links":[24],"slot_index":0,"shape":3},{"name":"denoised_output","type":"LATENT","links":null,"shape":3}],"properties":{"Node name for S&R":"SamplerCustomAdvanced"}},{"id":8,"type":"VAEDecode","pos":{"0":866,"1":367},"size":{"0":210,"1":46},"flags":{},"order":12,"mode":0,"inputs":[{"name":"samples","type":"LATENT","link":24},{"name":"vae","type":"VAE","link":12}],"outputs":[{"name":"IMAGE","type":"IMAGE","links":[9],"slot_index":0}],"properties":{"Node name for S&R":"VAEDecode"}},{"id":9,"type":"SaveImage","pos":{"0":1155,"1":196},"size":{"0":985.3012084960938,"1":1060.3828125},"flags":{},"order":13,"mode":0,"inputs":[{"name":"images","type":"IMAGE","link":9}],"outputs":[],"properties":{},"widgets_values":["ComfyUI"]},{"id":39,"type":"EmptySD3LatentImage","pos":{"0":451,"1":518},"size":{"0":315,"1":106},"flags":{},"order":0,"mode":0,"inputs":[],"outputs":[{"name":"LATENT","type":"LATENT","links":[119],"slot_index":0}],"properties":{"Node name for S&R":"EmptySD3LatentImage"},"widgets_values":[1024,1024,1]},{"id":25,"type":"RandomNoise","pos":{"0":458,"1":690},"size":{"0":315,"1":82},"flags":{},"order":1,"mode":0,"inputs":[],"outputs":[{"name":"NOISE","type":"NOISE","links":[37],"shape":3}],"properties":{"Node name for S&R":"RandomNoise"},"widgets_values":[198877899064534,"randomize"],"color":"#2a363b","bgcolor":"#3f5159"},{"id":16,"type":"KSamplerSelect","pos":{"0":468,"1":831},"size":{"0":315,"1":58},"flags":{},"order":2,"mode":0,"inputs":[],"outputs":[{"name":"SAMPLER","type":"SAMPLER","links":[19],"shape":3}],"properties":{"Node name for S&R":"KSamplerSelect"},"widgets_values":["euler"]},{"id":17,"type":"BasicScheduler","pos":{"0":455,"1":939},"size":{"0":315,"1":106},"flags":{},"order":6,"mode":0,"inputs":[{"name":"model","type":"MODEL","link":118,"slot_index":0}],"outputs":[{"name":"SIGMAS","type":"SIGMAS","links":[20],"shape":3}],"properties":{"Node name for S&R":"BasicScheduler"},"widgets_values":["beta",30,1]},{"id":12,"type":"UNETLoader","pos":{"0":48,"1":144},"size":{"0":315,"1":82},"flags":{},"order":3,"mode":0,"inputs":[],"outputs":[{"name":"MODEL","type":"MODEL","links":[118,120],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"UNETLoader"},"widgets_values":["VerusVision_1.0b_Transformer.safetensors","fp8_e4m3fn"],"color":"#223","bgcolor":"#335"},{"id":26,"type":"FluxGuidance","pos":{"0":451,"1":136},"size":{"0":317.4000244140625,"1":58},"flags":{},"order":9,"mode":0,"inputs":[{"name":"conditioning","type":"CONDITIONING","link":41}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[121],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"FluxGuidance"},"widgets_values":[3.5],"color":"#233","bgcolor":"#355"},{"id":11,"type":"DualCLIPLoader","pos":{"0":48,"1":288},"size":{"0":315,"1":106},"flags":{},"order":4,"mode":0,"inputs":[],"outputs":[{"name":"CLIP","type":"CLIP","links":[10,124],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"DualCLIPLoader"},"widgets_values":["t5xxl_fp16.safetensors","clip_l.safetensors","flux"]},{"id":40,"type":"AdaptiveGuidance","pos":{"0":887,"1":-59},"size":{"0":315,"1":170},"flags":{},"order":10,"mode":0,"inputs":[{"name":"model","type":"MODEL","link":120},{"name":"positive","type":"CONDITIONING","link":121},{"name":"negative","type":"CONDITIONING","link":123}],"outputs":[{"name":"GUIDER","type":"GUIDER","links":[122],"slot_index":0}],"properties":{"Node name for S&R":"AdaptiveGuidance"},"widgets_values":[1,3.5,0,0]},{"id":41,"type":"CLIPTextEncode","pos":{"0":439,"1":24},"size":{"0":324.8858947753906,"1":76},"flags":{"collapsed":true},"order":8,"mode":0,"inputs":[{"name":"clip","type":"CLIP","link":124}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[123],"slot_index":0}],"properties":{"Node name for S&R":"CLIPTextEncode"},"widgets_values":[""]},{"id":10,"type":"VAELoader","pos":{"0":48,"1":432},"size":{"0":311.81634521484375,"1":60.429901123046875},"flags":{},"order":5,"mode":0,"inputs":[],"outputs":[{"name":"VAE","type":"VAE","links":[12],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"VAELoader"},"widgets_values":["ae.safetensors"]},{"id":6,"type":"CLIPTextEncode","pos":{"0":384,"1":240},"size":{"0":422.84503173828125,"1":164.31304931640625},"flags":{},"order":7,"mode":0,"inputs":[{"name":"clip","type":"CLIP","link":10}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[41],"slot_index":0}],"title":"CLIP Text Encode (Positive Prompt)","properties":{"Node name for S&R":"CLIPTextEncode"},"widgets_values":["The text \"Verus Vision\" stands prominently in the center of a rain-soaked city square, its glowing letters reflected in the wet pavement. Around it, detailed urban elements like park benches, streetlights, and glistening trees create a serene, post-rain atmosphere. Subtle reflections of neon lights and cloudy skies mirror off puddles, enhancing the realism, while soft ambient lighting casts gentle shadows across the scene, highlighting the intricate textures and details."],"color":"#232","bgcolor":"#353"}],"last_node_id":41,"last_link_id":124,"links":[[9,8,0,9,0,"IMAGE"],[10,11,0,6,0,"CLIP"],[12,10,0,8,1,"VAE"],[19,16,0,13,2,"SAMPLER"],[20,17,0,13,3,"SIGMAS"],[24,13,0,8,0,"LATENT"],[37,25,0,13,0,"NOISE"],[41,6,0,26,0,"CONDITIONING"],[118,12,0,17,0,"MODEL"],[119,39,0,13,4,"LATENT"],[120,12,0,40,0,"MODEL"],[121,26,0,40,1,"CONDITIONING"],[122,40,0,13,1,"GUIDER"],[123,41,0,40,2,"CONDITIONING"],[124,11,0,41,0,"CLIP"]],"groups":[],"config":{},"extra":{"ds":{"scale":0.9090909090909091,"offset":[122.69461375511271,93.63829073084311]},"groupNodes":{}},"version":0.4}

````

````ad-warning
title: Nodes
collapse: closed

{"nodes":[{"id":13,"type":"SamplerCustomAdvanced","pos":{"0":864,"1":192},"size":{"0":272.3617858886719,"1":124.53733825683594},"flags":{},"order":11,"mode":0,"inputs":[{"name":"noise","type":"NOISE","link":37,"slot_index":0},{"name":"guider","type":"GUIDER","link":122,"slot_index":1},{"name":"sampler","type":"SAMPLER","link":19,"slot_index":2},{"name":"sigmas","type":"SIGMAS","link":20,"slot_index":3},{"name":"latent_image","type":"LATENT","link":119,"slot_index":4}],"outputs":[{"name":"output","type":"LATENT","links":[24],"slot_index":0,"shape":3},{"name":"denoised_output","type":"LATENT","links":null,"shape":3}],"properties":{"Node name for S&R":"SamplerCustomAdvanced"}},{"id":8,"type":"VAEDecode","pos":{"0":866,"1":367},"size":{"0":210,"1":46},"flags":{},"order":12,"mode":0,"inputs":[{"name":"samples","type":"LATENT","link":24},{"name":"vae","type":"VAE","link":12}],"outputs":[{"name":"IMAGE","type":"IMAGE","links":[9],"slot_index":0}],"properties":{"Node name for S&R":"VAEDecode"}},{"id":9,"type":"SaveImage","pos":{"0":1155,"1":196},"size":{"0":985.3012084960938,"1":1060.3828125},"flags":{},"order":13,"mode":0,"inputs":[{"name":"images","type":"IMAGE","link":9}],"outputs":[],"properties":{},"widgets_values":["ComfyUI"]},{"id":39,"type":"EmptySD3LatentImage","pos":{"0":451,"1":518},"size":{"0":315,"1":106},"flags":{},"order":0,"mode":0,"inputs":[],"outputs":[{"name":"LATENT","type":"LATENT","links":[119],"slot_index":0}],"properties":{"Node name for S&R":"EmptySD3LatentImage"},"widgets_values":[1024,1024,1]},{"id":25,"type":"RandomNoise","pos":{"0":458,"1":690},"size":{"0":315,"1":82},"flags":{},"order":1,"mode":0,"inputs":[],"outputs":[{"name":"NOISE","type":"NOISE","links":[37],"shape":3}],"properties":{"Node name for S&R":"RandomNoise"},"widgets_values":[198877899064534,"randomize"],"color":"#2a363b","bgcolor":"#3f5159"},{"id":16,"type":"KSamplerSelect","pos":{"0":468,"1":831},"size":{"0":315,"1":58},"flags":{},"order":2,"mode":0,"inputs":[],"outputs":[{"name":"SAMPLER","type":"SAMPLER","links":[19],"shape":3}],"properties":{"Node name for S&R":"KSamplerSelect"},"widgets_values":["euler"]},{"id":17,"type":"BasicScheduler","pos":{"0":455,"1":939},"size":{"0":315,"1":106},"flags":{},"order":6,"mode":0,"inputs":[{"name":"model","type":"MODEL","link":118,"slot_index":0}],"outputs":[{"name":"SIGMAS","type":"SIGMAS","links":[20],"shape":3}],"properties":{"Node name for S&R":"BasicScheduler"},"widgets_values":["beta",30,1]},{"id":12,"type":"UNETLoader","pos":{"0":48,"1":144},"size":{"0":315,"1":82},"flags":{},"order":3,"mode":0,"inputs":[],"outputs":[{"name":"MODEL","type":"MODEL","links":[118,120],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"UNETLoader"},"widgets_values":["VerusVision_1.0b_Transformer.safetensors","fp8_e4m3fn"],"color":"#223","bgcolor":"#335"},{"id":26,"type":"FluxGuidance","pos":{"0":451,"1":136},"size":{"0":317.4000244140625,"1":58},"flags":{},"order":9,"mode":0,"inputs":[{"name":"conditioning","type":"CONDITIONING","link":41}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[121],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"FluxGuidance"},"widgets_values":[3.5],"color":"#233","bgcolor":"#355"},{"id":11,"type":"DualCLIPLoader","pos":{"0":48,"1":288},"size":{"0":315,"1":106},"flags":{},"order":4,"mode":0,"inputs":[],"outputs":[{"name":"CLIP","type":"CLIP","links":[10,124],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"DualCLIPLoader"},"widgets_values":["t5xxl_fp16.safetensors","clip_l.safetensors","flux"]},{"id":40,"type":"AdaptiveGuidance","pos":{"0":887,"1":-59},"size":{"0":315,"1":170},"flags":{},"order":10,"mode":0,"inputs":[{"name":"model","type":"MODEL","link":120},{"name":"positive","type":"CONDITIONING","link":121},{"name":"negative","type":"CONDITIONING","link":123}],"outputs":[{"name":"GUIDER","type":"GUIDER","links":[122],"slot_index":0}],"properties":{"Node name for S&R":"AdaptiveGuidance"},"widgets_values":[1,3.5,0,0]},{"id":41,"type":"CLIPTextEncode","pos":{"0":439,"1":24},"size":{"0":324.8858947753906,"1":76},"flags":{"collapsed":true},"order":8,"mode":0,"inputs":[{"name":"clip","type":"CLIP","link":124}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[123],"slot_index":0}],"properties":{"Node name for S&R":"CLIPTextEncode"},"widgets_values":[""]},{"id":10,"type":"VAELoader","pos":{"0":48,"1":432},"size":{"0":311.81634521484375,"1":60.429901123046875},"flags":{},"order":5,"mode":0,"inputs":[],"outputs":[{"name":"VAE","type":"VAE","links":[12],"slot_index":0,"shape":3}],"properties":{"Node name for S&R":"VAELoader"},"widgets_values":["ae.safetensors"]},{"id":6,"type":"CLIPTextEncode","pos":{"0":384,"1":240},"size":{"0":422.84503173828125,"1":164.31304931640625},"flags":{},"order":7,"mode":0,"inputs":[{"name":"clip","type":"CLIP","link":10}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[41],"slot_index":0}],"title":"CLIP Text Encode (Positive Prompt)","properties":{"Node name for S&R":"CLIPTextEncode"},"widgets_values":["The text \"Verus Vision\" stands prominently in the center of a rain-soaked city square, its glowing letters reflected in the wet pavement. Around it, detailed urban elements like park benches, streetlights, and glistening trees create a serene, post-rain atmosphere. Subtle reflections of neon lights and cloudy skies mirror off puddles, enhancing the realism, while soft ambient lighting casts gentle shadows across the scene, highlighting the intricate textures and details."],"color":"#232","bgcolor":"#353"}],"last_node_id":41,"last_link_id":124,"links":[[9,8,0,9,0,"IMAGE"],[10,11,0,6,0,"CLIP"],[12,10,0,8,1,"VAE"],[19,16,0,13,2,"SAMPLER"],[20,17,0,13,3,"SIGMAS"],[24,13,0,8,0,"LATENT"],[37,25,0,13,0,"NOISE"],[41,6,0,26,0,"CONDITIONING"],[118,12,0,17,0,"MODEL"],[119,39,0,13,4,"LATENT"],[120,12,0,40,0,"MODEL"],[121,26,0,40,1,"CONDITIONING"],[122,40,0,13,1,"GUIDER"],[123,41,0,40,2,"CONDITIONING"],[124,11,0,41,0,"CLIP"]],"groups":[],"config":{},"extra":{"ds":{"scale":0.9090909090909091,"offset":[122.69461375511271,93.63829073084311]},"groupNodes":{}},"version":0.4}

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

![[Fichier Json du Worfklow (Export Comfy UI)]]

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

 
Steps: 30, Sampler: Euler, Seed: 198877899064534

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
creation date:: [[2025/03/13/📒2025-03-24]]  07:54


