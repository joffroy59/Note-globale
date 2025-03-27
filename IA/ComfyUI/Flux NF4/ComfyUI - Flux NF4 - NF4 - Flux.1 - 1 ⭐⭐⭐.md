---
ELN info:
  template: Create IA - Task - ComFyUI - Flux NF4.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-26
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
   - schnell nf4-bnb
---

````ad-tip
Source : https://civitai.com/images/24453812

workflow: workflow_test
⭐🚧 [workflow_test.json](file:///workflow_path%5Cworkflow_test.json)
✅ #todo

![|400](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/38b08e01-aac2-4fbd-8d61-6f5c576a7438/original=true,quality=90/FluxSchnell_BNBNF4_2024-08-14_02556_.jpeg)
````

````ad-quote
title: Generation data
collapse: closed

{"nodes":[{"id":13,"type":"SamplerCustomAdvanced","pos":[829,215],"size":{"0":355.20001220703125,"1":106},"flags":{},"order":9,"mode":0,"inputs":[{"name":"noise","type":"NOISE","link":37,"slot_index":0},{"name":"guider","type":"GUIDER","link":52,"slot_index":1},{"name":"sampler","type":"SAMPLER","link":19,"slot_index":2},{"name":"sigmas","type":"SIGMAS","link":20,"slot_index":3},{"name":"latent_image","type":"LATENT","link":54,"slot_index":4}],"outputs":[{"name":"output","type":"LATENT","links":[55],"shape":3,"slot_index":0},{"name":"denoised_output","type":"LATENT","links":[],"shape":3,"slot_index":1}],"properties":{"Node name for S&R":"SamplerCustomAdvanced"}},{"id":31,"type":"CheckpointLoaderNF4","pos":[510,370],"size":{"0":298.84808349609375,"1":111.3265380859375},"flags":{},"order":0,"mode":0,"outputs":[{"name":"MODEL","type":"MODEL","links":[59,60],"shape":3,"slot_index":0},{"name":"CLIP","type":"CLIP","links":[72],"shape":3,"slot_index":1},{"name":"VAE","type":"VAE","links":[73],"shape":3,"slot_index":2}],"properties":{"Node name for S&R":"CheckpointLoaderNF4"},"widgets_values":["flux1-schnell-bnb-nf4.safetensors"]},{"id":6,"type":"CLIPTextEncode","pos":[564,329],"size":{"0":465.8262634277344,"1":212.77932739257812},"flags":{"collapsed":true},"order":7,"mode":0,"inputs":[{"name":"clip","type":"CLIP","link":72},{"name":"text","type":"STRING","link":75,"widget":{"name":"text"}}],"outputs":[{"name":"CONDITIONING","type":"CONDITIONING","links":[40],"slot_index":0}],"properties":{"Node name for S&R":"CLIPTextEncode"},"widgets_values":["In a pop art style, first, make realistic photograph capturing the excitement of paddleboard yoga on a serene lake, balancing poses surrounded by abstract bright medium dark red colours. and secondly, add (Poison (Street Fighter) as a cute fairy with delicate wings), a humanoid face, body and antennae.:1.1) (posing a shape-shifter disguising itself among humans:1.3), luxurious, glamorous, apocalyptic, book of revelation, vaporwave, vibrant, stunningly beautiful, blend of organic and mechanical elements, hellish, futuristic, cybernetic, robotics, ultramodern, crystal clear, precise details, dramatic, mysterious. a world without a hope, ruled by ruthless criminal corporations.,(beautiful composition, award winning hyperrealistic digital art, extremely high-resolution details, realism pushed to extreme, fine texture, incredibly life like, crisp, clear, sharp, clear foreground and background, hyperrealistic detailed image, infinite focus, clear and detailed throughout, wide angle view:1.1)"]},{"id":22,"type":"BasicGuider","pos":[521,222],"size":{"0":241.79998779296875,"1":46},"flags":{},"order":8,"mode":0,"inputs":[{"name":"model","type":"MODEL","link":59,"slot_index":0},{"name":"conditioning","type":"CONDITIONING","link":40,"slot_index":1}],"outputs":[{"name":"GUIDER","type":"GUIDER","links":[52],"shape":3,"slot_index":0}],"properties":{"Node name for S&R":"BasicGuider"}},{"id":25,"type":"RandomNoise","pos":[501,662],"size":{"0":312.59356689453125,"1":82},"flags":{},"order":1,"mode":0,"outputs":[{"name":"NOISE","type":"NOISE","links":[37],"shape":3}],"properties":{"Node name for S&R":"RandomNoise"},"widgets_values":[522165531752559,"randomize"]},{"id":16,"type":"KSamplerSelect","pos":[496,784],"size":{"0":315,"1":58},"flags":{},"order":2,"mode":0,"outputs":[{"name":"SAMPLER","type":"SAMPLER","links":[19],"shape":3}],"properties":{"Node name for S&R":"KSamplerSelect"},"widgets_values":["euler"]},{"id":8,"type":"VAEDecode","pos":[1208,216],"size":{"0":140,"1":46},"flags":{},"order":10,"mode":0,"inputs":[{"name":"samples","type":"LATENT","link":55},{"name":"vae","type":"VAE","link":73}],"outputs":[{"name":"IMAGE","type":"IMAGE","links":[9],"slot_index":0}],"properties":{"Node name for S&R":"VAEDecode"}},{"id":36,"type":"ShowText|pysssss","pos":[826,693],"size":{"0":519.90625,"1":299.61920166015625},"flags":{},"order":6,"mode":0,"inputs":[{"name":"text","type":"STRING","link":74,"widget":{"name":"text"},"slot_index":0}],"outputs":[{"name":"STRING","type":"STRING","links":null,"shape":6}],"properties":{"Node name for S&R":"ShowText|pysssss"},"widgets_values":[["a photograph of a scene surrounded by natural copper rust colours, capturing the excitement of A projected astronaut's hologram, placed within Antarctica's icy expanse, explores the vastness of the universe in a futuristic, surreal landscape, reminiscent of an abstract artist's dreamscape. The scene captures a moment of cosmic reflection amidst the snow-capped mountains and frozen tundra, with vivid colors dancing across the astronaut's visor., unusual, experimental, intricate, indigenous, ethnic, bold, detailed, sharp focus, abstract, monochrome, meditative, (beautiful composition, award winning hyperrealistic digital art, extremely high-resolution details, realism pushed to extreme, fine texture, incredibly life like, crisp, clear, sharp, clear foreground and background, hyperrealistic detailed image, infinite focus, clear and detailed throughout, wide angle view:1.1)"]]},{"id":9,"type":"SaveImage","pos":[1362,217],"size":{"0":564.1932983398438,"1":773.999267578125},"flags":{},"order":11,"mode":0,"inputs":[{"name":"images","type":"IMAGE","link":9}],"properties":{},"widgets_values":["FluxSchnell_BNBNF4_%date:yyyy-MM-dd%"]},{"id":17,"type":"BasicScheduler","pos":[496,883],"size":{"0":315,"1":106},"flags":{},"order":5,"mode":0,"inputs":[{"name":"model","type":"MODEL","link":60,"slot_index":0}],"outputs":[{"name":"SIGMAS","type":"SIGMAS","links":[20],"shape":3}],"properties":{"Node name for S&R":"BasicScheduler"},"widgets_values":["simple",4,1]},{"id":35,"type":"Wildcard Processor","pos":[824,368],"size":{"0":520.90625,"1":284.8192443847656},"flags":{},"order":3,"mode":0,"outputs":[{"name":"STRING","type":"STRING","links":[74,75],"shape":3,"slot_index":0}],"properties":{"Node name for S&R":"Wildcard Processor"},"widgets_values":["a photograph of a scene surrounded by natural __etocolours__ colours, capturing the excitement of __surreal__, unusual, experimental, intricate, indigenous, ethnic, bold, detailed, sharp focus, abstract, monochrome, meditative, (beautiful composition, award winning hyperrealistic digital art, extremely high-resolution details, realism pushed to extreme, fine texture, incredibly life like, crisp, clear, sharp, clear foreground and background, hyperrealistic detailed image, infinite focus, clear and detailed throughout, wide angle view:1.1)",661937000515101,"randomize"]},{"id":29,"type":"EmptySD3LatentImage","pos":[505,517],"size":{"0":304.2161865234375,"1":106},"flags":{},"order":4,"mode":0,"outputs":[{"name":"LATENT","type":"LATENT","links":[54],"shape":3,"slot_index":0}],"properties":{"Node name for S&R":"EmptySD3LatentImage"},"widgets_values":[1920,1088,1]}],"last_node_id":36,"last_link_id":75,"links":[[9,8,0,9,0,"IMAGE"],[19,16,0,13,2,"SAMPLER"],[20,17,0,13,3,"SIGMAS"],[37,25,0,13,0,"NOISE"],[40,6,0,22,1,"CONDITIONING"],[52,22,0,13,1,"GUIDER"],[54,29,0,13,4,"LATENT"],[55,13,0,8,0,"LATENT"],[59,31,0,22,0,"MODEL"],[60,31,0,17,0,"MODEL"],[72,31,1,6,0,"CLIP"],[73,31,2,8,1,"VAE"],[74,35,0,36,0,"STRING"],[75,35,0,6,1,"STRING"]],"groups":[],"config":{},"extra":{"ds":{"scale":1.1,"offset":[-425.1805109232081,-165.72428512792848]}},"version":0.4}

````

````ad-note
title: Note
https://civitai.com/models/638572/nf4-flux1?modelVersionId=714399

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

 a photograph of a scene surrounded by natural copper rust colours, capturing the excitement of A projected astronaut's hologram, placed within Antarctica's icy expanse, explores the vastness of the universe in a futuristic, surreal landscape, reminiscent of an abstract artist's dreamscape. The scene captures a moment of cosmic reflection amidst the snow-capped mountains and frozen tundra, with vivid colors dancing across the astronaut's visor., unusual, experimental, intricate, indigenous, ethnic, bold, detailed, sharp focus, abstract, monochrome, meditative, (beautiful composition, award winning hyperrealistic digital art, extremely high-resolution details, realism pushed to extreme, fine texture, incredibly life like, crisp, clear, sharp, clear foreground and background, hyperrealistic detailed image, infinite focus, clear and detailed throughout, wide angle view:1.1)

```

---

```ad-success
title: Resultat

### Result Image with workflow

![FluxSchnell_BNBNF4_2024-08-14_02556_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2024-08-14_02556_.png)


time:  **18.66 seconds**

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
>> ![FluxSchnell_BNBNF4_2025-03-26_00006_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-26_00006_.png)
>> time:  **18.19 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-26_00005_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-26_00005_.png)
>> time:  **18.19 seconds**
>


---

> [!multi-column]
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-26_00004_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-26_00004_.png)
>> time:  **undefined**
>


---

> [!multi-column]
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00003_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00003_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00004_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00004_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00005_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00005_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00006_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00006_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00007_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00007_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00008_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00008_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00009_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00009_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00010_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00010_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00011_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00011_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00012_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00012_.png)
>> time:  **18.84 seconds**
>


---

> [!multi-column]
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00019_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00019_.png)
>> time:  **18.84 seconds**
>
>> [!blank]
>> ![FluxSchnell_BNBNF4_2025-03-27_00020_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FluxSchnell_BNBNF4_2025-03-27_00020_.png)
>> time:  **18.84 seconds**
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
creation date:: [[2025/03/13/📒2025-03-26]]  23:41


