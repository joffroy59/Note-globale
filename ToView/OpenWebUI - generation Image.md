---
ELN info:
  template: OpenWebUI - generation Image
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-09
  copyright: GNU Affero General Public License v3.0


ollama_model_dir: I:\IA\ollama\models
tags:
  - toview
---
````ad-tip
Source : https://docs.openwebui.com/tutorials/images/#:~:text=Open%20WebUI%20supports%20image%20generation%20through%20the%20AUTOMATIC1111,the%20Image%20Generation%20Engine%20field%20to%20Default%20%28Automatic1111%29.

````

[[🎨 Image Generation  Open WebUI]]

---
## Tasks
- [ ] [[#config openweb ui]] 
- [ ] [[#trouver un BON worflow ]]
- [ ] [[#Tester Fonction Outils]]
---



### config openweb ui

ok





### trouver un BON worflow

#### workflow actuel 
```json fold
{
  "3": {
    "inputs": {
      "seed": 925250429817454,
      "steps": 20,
      "cfg": 8,
      "sampler_name": "euler",
      "scheduler": "normal",
      "denoise": 1,
      "model": [
        "4",
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
        "5",
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
      "ckpt_name": "v1-5-pruned-emaonly.safetensors"
    },
    "class_type": "CheckpointLoaderSimple",
    "_meta": {
      "title": "Charger Point de Contrôle"
    }
  },
  "5": {
    "inputs": {
      "width": 512,
      "height": 512,
      "batch_size": 1
    },
    "class_type": "EmptyLatentImage",
    "_meta": {
      "title": "Image Latente Vide"
    }
  },
  "6": {
    "inputs": {
      "text": "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,",
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
      "text": "text, watermark",
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
        "8",
        0
      ]
    },
    "class_type": "SaveImage",
    "_meta": {
      "title": "Enregistrer Image"
    }
  }
}
```
#### mode
![[OpenWebUI - generation Image-1741559279127.png|400x326]]

![[OpenWebUI - generation Image-1741559298464.png|400x338]]
#### Golbal config 
![[OpenWebUI - generation Image-1741559780903.png|400x116]]

![[OpenWebUI - generation Image-1741559974621.png|400x194]]

### Tester Fonction Outils

![[OpenWebUI - generation Image-1741558977279.png|400x207]]

[Open WebUI](https://openwebui.com/#open-webui-community)

![[OpenWebUI - generation Image-1741559078686.png|400x359]]

