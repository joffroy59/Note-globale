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
- [ ] [[#workflow ok depuis ComfyUI ]]
- [ ] [[#testt]] 
- [ ] [[#sdqqqsdsd]]
- [ ] [[#sdsfsdf]]
- [ ] [[#A1]]
- [ ] [[#A2]]
- [ ] [[#A3]]

---
## Tasks Detail

### workflow avant changement

```json fold title:"Workflow"
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

---

## Info

````ad-tip
title: Open WebUI  Generic
collapse: Closed

```query
#openwebui
```
````

---
creation date:: [[2025/03/12/📒2025-03-18]]  08:28





### workflow ok depuis ComfyUI
#todo
