---

ELN info:
  template: Create IA - Open WebUI.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-18
  copyright: GNU Affero General Public License v3.0
project:
  name: IA
wip:
  type: IA
  description: Travaux sur IA
ollama_model_dir: I:\IA\ollama\models
tags:
  - status/wip
  - IA
  - 
  - IA/open_webui/generic
---




---
## Tasks
- [x] [[#workflow avant changement ]] ➕ 2025-03-18 ✅ 2025-03-18
- [x] [[#workflow ok depuis ComfyUI]] ✅ 2025-03-18
	- [x] Installation ✅ 2025-03-19
	- [x] [[#Test]] 🛫 2025-03-18 ✅ 2025-03-19
- [/] [[#Test autre workflow ComfyUI]]



---
## Tasks Detail

### workflow avant changement

```json fold title:"Workflow"
Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.
```

![[IA Open WebUI -  Generic - change workflow used for image-1742284101930.png|400x308]]

v1-5-pruned-emaonly.safetensors
512x512
25
ComfyUI Workflow Nodes
prompt* text  6
model ckpt_name 4
width width 5
height height 5
steps steps  3
seed  seed 3 

---


## workflow ok depuis ComfyUI

#### Workflow

```json fold title:"Workflow"
{
  "3": {
    "inputs": {
      "seed": 196000220077793,
      "steps": 40,
      "cfg": 8,
      "sampler_name": "uni_pc_bh2",
      "scheduler": "beta",
      "denoise": 1,
      "model": [
        "10",
        0
      ],
      "positive": [
        "6",
        0
      ],
      "negative": [
        "7",
        0
      ],
      "latent_image": [
        "26",
        0
      ]
    },
    "class_type": "KSampler",
    "_meta": {
      "title": "KSampler"
    }
  },
  "4": {
    "inputs": {
      "ckpt_name": "sdxlHK_v1BETA2.safetensors"
    },
    "class_type": "CheckpointLoaderSimple",
    "_meta": {
      "title": "Load Checkpoint"
    }
  },
  "6": {
    "inputs": {
      "text": "Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.\n",
      "clip": [
        "4",
        1
      ]
    },
    "class_type": "CLIPTextEncode",
    "_meta": {
      "title": "CLIP Text Encode (Prompt)"
    }
  },
  "7": {
    "inputs": {
      "text": "(worst quality, low quality, thumbnail:1.4), signature, artist name, web address, cropped, jpeg artifacts, watermark, username, collage, grid",
      "clip": [
        "4",
        1
      ]
    },
    "class_type": "CLIPTextEncode",
    "_meta": {
      "title": "CLIP Text Encode (Prompt)"
    }
  },
  "8": {
    "inputs": {
      "samples": [
        "3",
        0
      ],
      "vae": [
        "4",
        2
      ]
    },
    "class_type": "VAEDecode",
    "_meta": {
      "title": "VAE Decode"
    }
  },
  "9": {
    "inputs": {
      "filename_prefix": "ComfyUI",
      "images": [
        "23",
        0
      ]
    },
    "class_type": "SaveImage",
    "_meta": {
      "title": "Save Image"
    }
  },
  "10": {
    "inputs": {
      "scale": 3,
      "model": [
        "4",
        0
      ]
    },
    "class_type": "PerturbedAttentionGuidance",
    "_meta": {
      "title": "PerturbedAttentionGuidance"
    }
  },
  "16": {
    "inputs": {
      "ratio_selected": "5:8 [768x1216 portrait]",
      "batch_size": 1
    },
    "class_type": "Empty Latent Ratio Select SDXL",
    "_meta": {
      "title": "Empty Latent Ratio Select SDXL (Mikey)"
    }
  },
  "17": {
    "inputs": {
      "upscale_method": "nearest-exact",
      "scale_by": 2,
      "image": [
        "8",
        0
      ]
    },
    "class_type": "ImageScaleBy",
    "_meta": {
      "title": "Upscale Image By"
    }
  },
  "19": {
    "inputs": {
      "seed": 805564669674429,
      "steps": 40,
      "cfg": 8,
      "sampler_name": "uni_pc_bh2",
      "scheduler": "beta",
      "denoise": 1,
      "model": [
        "10",
        0
      ],
      "positive": [
        "21",
        0
      ],
      "negative": [
        "21",
        1
      ],
      "latent_image": [
        "20",
        0
      ]
    },
    "class_type": "KSampler",
    "_meta": {
      "title": "KSampler"
    }
  },
  "20": {
    "inputs": {
      "pixels": [
        "17",
        0
      ],
      "vae": [
        "4",
        2
      ]
    },
    "class_type": "VAEEncode",
    "_meta": {
      "title": "VAE Encode"
    }
  },
  "21": {
    "inputs": {
      "strength": 0.8,
      "start_percent": 0,
      "end_percent": 0.8,
      "positive": [
        "6",
        0
      ],
      "negative": [
        "7",
        0
      ],
      "control_net": [
        "22",
        0
      ],
      "image": [
        "8",
        0
      ]
    },
    "class_type": "ControlNetApplyAdvanced",
    "_meta": {
      "title": "Apply ControlNet"
    }
  },
  "22": {
    "inputs": {
      "control_net_name": "controlnet-union-sdxl-1.0_promax.safetensors"
    },
    "class_type": "ControlNetLoader",
    "_meta": {
      "title": "Load ControlNet Model"
    }
  },
  "23": {
    "inputs": {
      "samples": [
        "19",
        0
      ],
      "vae": [
        "4",
        2
      ]
    },
    "class_type": "VAEDecode",
    "_meta": {
      "title": "VAE Decode"
    }
  },
  "24": {
    "inputs": {
      "text": "Vintage café interior captured on a Leica M10 Monochrom, bathed in warm, nostalgic hues, emphasizing the retro charm and timelessness of the scene:1.3, (nostalgic:1.4), (vintage:1.4), (Leica M10 Monochrom:1.2), (soft lighting:1.3), (muted tones:1.3), (classic:1.3).\nUrban cityscape at dusk shot on a Sony A7R IV, showcasing the stark contrast between modern architecture and the fading sunlight, enhancing the metropolitan allure:1.3, (urban:1.4), (Sony A7R IV:1.2), (dusk:1.3), (high-rise:1.4), (dynamic contrast:1.3), (golden hour:1.3), (city lights:1.3).\nA secluded forest path photographed using a Nikon Z7 II, dappled sunlight filtering through the foliage, casting enchanting shadows and evoking a sense of mystery:1.3, (woodland:1.4), (Nikon Z7 II:1.2), (ethereal:1.4), (enchanting:1.4), (sunbeams:1.3), (natural beauty:1.3), (serene:1.3).\nCoastal cliffside captured with a Canon EOS R5, dramatic waves crashing against the rocks, the tumultuous sea contrasting with the stoic landmasses, creating a dynamic seascape:1.3, (seascape:1.4), (Canon EOS R5:1.2), (dramatic:1.4), (powerful waves:1.3), (coastal beauty:1.3), (rugged:1.3), (dynamic movement:1.3).\nIndustrial warehouse interior photographed on a Fujifilm X-T4, showcasing the interplay of shadows and light amidst the metallic structures, conveying a sense of gritty urban beauty:1.3, (industrial:1.4), (Fujifilm X-T4:1.2), (gritty:1.4), (metallic:1.3), (shadows and light:1.3), (urban decay:1.3), (textured surfaces:1.3).\nSurreal desert landscape captured with a Hasselblad H6D-100c, a mirage of shifting sands and distant horizons, creating an otherworldly and dreamlike atmosphere:1.3, (surreal:1.4), (Hasselblad H6D-100c:1.2), (desert landscape:1.3), (ethereal:1.4), (shifting sands:1.3), (vast expanse:1.3), (dreamscape:1.3).\nAbandoned carnival grounds photographed on a Phase One XF IQ4, rusted rides and faded colors tell a haunting tale of forgotten joy, capturing the eerie beauty of abandonment:1.3, (abandoned:1.4), (Phase One XF IQ4:1.2), (eerie:1.4), (forgotten:1.3), (rustic charm:1.3), (haunting:1.3), (faded memories:1.3).\nMountainous landscape captured using a Pentax 645Z, snow-capped peaks bathed in the soft light of dawn, creating a serene and majestic vista:1.3, (mountains:1.4), (Pentax 645Z:1.2), (majestic:1.4), (snowy peaks:1.3), (serene beauty:1.3), (dawn light:1.3), (vastness:1.3).\nFuturistic city skyline shot on a Panasonic Lumix S1R, bathed in neon lights and futuristic architecture, blending a sense of cybernetic elegance with urban vibrancy:1.3, (futuristic:1.4), (Panasonic Lumix S1R:1.2), (neon lights:1.3), (cybernetic:1.3), (urban vibrancy:1.3), (sleek design:1.3), (modern city:1.3).\nDramatic storm clouds captured with a DJI Mavic Air 2, contrasting dark skies and brilliant lightning flashes, encapsulating the raw power and beauty of nature's fury:1.3, (stormy:1.4), (DJI Mavic Air 2:1.2), (dramatic:1.4), (storm clouds:1.3), (lightning flashes:1.3), (nature's fury:1.3), (powerful contrast:1.3).\nCosmic wonders captured through a Celestron NexStar 8SE telescope, showcasing the intricate details of distant galaxies and celestial bodies, evoking a sense of cosmic awe:1.3, (celestial:1.4), (Celestron NexStar 8SE:1.2), (galaxies:1.3), (astronomical wonders:1.3), (cosmic beauty:1.3), (intricate details:1.3), (stellar exploration:1.3).\nRural farmstead bathed in golden sunlight captured with a Nikon D850, rustic charm emanating from weathered structures amidst fields of lush crops, exuding pastoral tranquility:1.3, (rural:1.4), (Nikon D850:1.2), (golden sunlight:1.3), (rustic charm:1.3), (lush crops:1.3), (pastoral tranquility:1.3), (weathered structures:1.3).\nUnderwater wonderland photographed using a GoPro HERO9 Black, vibrant coral reefs teeming with marine life, displaying a kaleidoscope of colors in a mesmerizing aquatic ballet:1.3, (underwater:1.4), (GoPro HERO9 Black:1.2), (coral reefs:1.3), (marine life:1.3), (vibrant colors:1.3), (aquatic ballet:1.3), (underwater exploration:1.3).\nMajestic autumn forest captured on a Canon EOS 5D Mark IV, foliage ablaze in fiery hues amidst towering trees, emanating the enchantment of the fall season:1.3, (autumn:1.4), (Canon EOS 5D Mark IV:1.2), (fiery foliage:1.3), (majestic forest:1.3), (towering trees:1.3), (fall enchantment:1.3), (autumnal beauty:1.3).\nBustling marketplace scene on a bustling Fujifilm X100V, a symphony of colors and cultures intermingling amidst vibrant stalls and lively street performances, capturing the essence of community:1.3, (marketplace:1.4), (Fujifilm X100V:1.2), (vibrant stalls:1.3), (lively street performances:1.3), (cultural diversity:1.3), (community essence:1.3), (bustling energy:1.3).\nMinimalist cityscape photographed with a Sony Alpha 7C, sleek architectural lines against a backdrop of clear skies, embodying the elegance of modern urban design:1.3, (minimalist:1.4), (Sony Alpha 7C:1.2), (sleek architecture:1.3), (clear skies:1.3), (modern urban design:1.3), (clean lines:1.3), (urban sophistication:1.3).\nEnigmatic nocturnal cityscape captured through a Nikon Z6 II, city lights painting a captivating scene of urban mystique and nocturnal allure against the dark canvas of the night:1.3, (nocturnal:1.4), (Nikon Z6 II:1.2), (city lights:1.3), (urban mystique:1.3), (nocturnal allure:1.3), (nighttime ambiance:1.3), (captivating scene:1.3).\nAerial landscape view taken with a DJI Phantom 4 Pro, vast expanses of rolling hills and winding rivers, capturing the breathtaking beauty of untouched wilderness:1.3, (aerial:1.4), (DJI Phantom 4 Pro:1.2), (rolling hills:1.3), (winding rivers:1.3), (untouched wilderness:1.3), (breathtaking beauty:1.3), (bird's eye view:1.3).\nMagical snowy forest scene captured on a Polaroid OneStep+, a winter wonderland adorned with glistening snowflakes and frosted trees, exuding an ethereal ambiance:1.3, (snowy forest:1.4), (Polaroid OneStep+:1.2), (winter wonderland:1.3), (glistening snowflakes:1.3), (frosted trees:1.3), (ethereal ambiance:1.3), (magical scene:1.3).\nIntimate portrait shot on a Leica Q2, soft natural light accentuating the subject's features in a tender display of human emotion and vulnerability:1.3, (portrait:1.4), (Leica Q2:1.2), (soft natural light:1.3), (tender display:1.3), (human emotion:1.3), (vulnerability:1.3), (intimate moment:1.3)."
    },
    "class_type": "Text Multiline",
    "_meta": {
      "title": "Text Multiline"
    }
  },
  "25": {
    "inputs": {
      "text": [
        "24",
        0
      ],
      "seed": 1006648907919737
    },
    "class_type": "Text Random Line",
    "_meta": {
      "title": "Text Random Line"
    }
  },
  "26": {
    "inputs": {
      "width": 768,
      "height": 1216,
      "batch_size": 1
    },
    "class_type": "EmptyLatentImage",
    "_meta": {
      "title": "Empty Latent Image"
    }
  }
}
```

![[OpenWebUI-okA.json]]

![[OpenWebUI-API-okA.json]]


#### Test

##### Execution dans ComfyUI

![[IA Open WebUI -  Generic - change workflow used for image-1742329870679.png|400x293]]



```ad-failure
title: Test1
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742330919909.png|400x400]]

> [!cite]-
> ![[IA Open WebUI -  Generic - change workflow used for image-1742329921321.png|400x465]]

> [!cite]-
> ![[IA Open WebUI -  Generic - change workflow used for image-1742329977807.png|200]]

Identique
```

```ad-success
title: Test2
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742330790163.png|400x400]]

> [!cite]-
> ![[IA Open WebUI -  Generic - change workflow used for image-1742330011656.png|400x601]]



Identique
```

```ad-success
title: Test3
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742330478753.png|400x400]]

> [!cite]-
> ![[IA Open WebUI -  Generic - change workflow used for image-1742330501424.png|400x594]]



Identique

Time : **21s**
```

```ad-success
title: Test4
collapse: Open



![[IA Open WebUI -  Generic - change workflow used for image-1742343089108.png|400x633]]

> [!cite]- Prompt
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343200303.png|400x196]]
> ![[OpenWebUI-okA.json]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **125.48 seconds**
```

```ad-success
title: Test5
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742343370253.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343388494.png|400x201]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **125.48 seconds**
```

```ad-success
title: Test6
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742343533798.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343433106.png|400x198]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **127.88 seconds**
```

```ad-success
title: Test7
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742343688253.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test8
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742343916197.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **125.74 seconds**
```

```ad-success
title: Test9
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742343950579.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **125.75 seconds**
```

```ad-success
title: Test10
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742344376853.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **125.75 seconds**
```

```ad-success
title: Test11
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742344401717.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test12
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742344425142.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test13
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742344440021.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test14
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742345073130.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 

Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test15
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742345597120.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)
```

```ad-success
title: Test16
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742344440021.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test17
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742345647980.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test18
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742347170903.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 

Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test19
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348304524.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)
```

```ad-success
title: Test20
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348320726.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test21
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348332687.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test22
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348344663.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test23
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348354628.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test24
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348364197.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test25
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348379307.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test26
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348387882.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test27
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348606096.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test28
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742348661988.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test29
collapse: Open

![[IA Open WebUI -  Generic - change workflow used for image-1742349067648.png|400x633]]

> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test20
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test21
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test22
collapse: Open


> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test23
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test24
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test20
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test21
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test22
collapse: Open


> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test23
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```

```ad-success
title: Test24
collapse: Open



> [!cite]- Prompt
> 
> ![[OpenWebUI-okA.json]]
> 
> ![[IA Open WebUI -  Generic - change workflow used for image-1742343640262.png|400x219]]
> 


Identique (Requested to load SDXL Requested to load ControlNet)

Time : **131.05 seconds**
```


###### Commentaire
 Global: **similaire** 
 
 pas de changement en changeant le  model pour l'image , seulement pour le texte commentant l'imga générée  

---






## Test autre workflow ComfyUI

``````ad-success
title: Test1
collapse: closed

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742340396327.png|400x633]]

**151.36 seconds**

``````

``````ad-success
title: Test2

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742340384679.png|400x633]]

time : **126.73 seconds**

``````

``````ad-success
title: Test3

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742341106827.png|400x633]]

time : **136.94 seconds**

``````

``````ad-success
title: Test4

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742341733309.png|400x633]]

time : **136.94 seconds**

``````

``````ad-success
title: Test5

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742342491406.png|400x633]]


time : **130.59 seconds**

``````

``````ad-success
title: Test6

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742342728307.png|400x633]]

time : **128.96 seconds**

``````

``````ad-success
title: Test7

#### workflow: 
```json

```

![[OpenWebUI-okB.json]]

![[OpenWebUI-API-okB.json]]


#### config: 
![[IA Open WebUI -  Generic - change workflow used for image-1742340295109.png|400x145]]

#### result 

![[IA Open WebUI -  Generic - change workflow used for image-1742342847768.png|400x633]]

time : **125.91 seconds**

``````


## Test autre workflow ComfyUI 2

### Test Done

````ad-success
title: "Test"

#### Result

> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00030_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00030_.png)
>> time:  **38.30 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **30.56 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00040_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00040_.png)
>> time:  **33.53 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00041_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00041_.png)
>> time:  **38.97 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00042_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00042_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00042_.png|600](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00042_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00043_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00043_.png)
>> time:  **33.11 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00044_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00044_.png)
>> time:  **35.98 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00045_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00045_.png)
>> time:  **224.12 seconds**
>

---

##### .
````


#### Add Success image

`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip]`

`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip-inner, add-image-result-success-wip-inner-col]`

## Info
---

````ad-tip
title: Open WebUI  Generic
collapse: Closed

```query
#openwebui
```
````

---
creation date:: [[2025/03/12/📒2025-03-18]]  08:28


# test 

> [!multi-column]
>
>> [!note]+ Work
>> your notes or lists here. using markdown formatting
>
>> [!warning]+ Personal
>> your notes or lists here. using markdown formatting
>
>> [!summary]+ Charity
>> your notes or lists here. using markdown formatting

> [!multi-column]
>
>> [!note]+ Work
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>
>> [!warning]+ Personal
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>
>> [!summary]+ Charity
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
``````

#### 1 300

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

``````
#### 2 300

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

``````

#### 3 300

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

``````

#### 4 300

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

``````

#### 5 300

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

``````

#### 6 150

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|150](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|150](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|150](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|150](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|150](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|150](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

---

``````

#### 6 300

``````ad-success
> [!multi-column]
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**
>
>> [!blank]
>> ![FLUX_GGUF_Q8_00039_.png|300](file:///D:/obsidian/MyNote/Note-globale/IA/ComfyUI/Result/FLUX_GGUF_Q8_00039_.png)
>> time:  **167.79 seconds**

---

``````
