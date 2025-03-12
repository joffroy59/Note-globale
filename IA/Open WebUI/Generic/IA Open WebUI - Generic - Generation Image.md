---

ELN info:
  template: IA Open WebUI - Generic - Generation Image
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-12
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
````ad-tip
Source : http://localhost:3000/s/80bf7d08-8966-482d-a708-4e492cd31527

![[IA Open WebUI - Generic - Generation Image-1741763682737.png|700]]
````

````ad-note
title: Note
Image workflow pas assez net 
![[IA Open WebUI - Generic - Generation Image-1741763735628.png|700]]]
````

---
## Tasks
- [x] config json ✅ 2025-03-12
- [ ] [[#Test  Autre workflow]] 
- [ ] [[#reproduire dans comfyui pour comprendre quel model fait flou]] 
- [ ] Test
---
``````ad-info  
title: Workflow config Open WebUI

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


| Numéro | Classe                     | Inputs                                                         | Métadonnées                          |
|--------|----------------------------|--------------------------------------------------------------|------------------------------------|
| 3      | KSampler                   | `seed : 925250429817454`<br>`steps : 20`<br>`cfg : 8`<br>`sampler_name : "euler"`<br>`scheduler : "normal"`<br>`denoise : 1`<br>`model : [4<br>0]`<br>`positive : [6<br>0]`<br>`negative : [7<br>0]`<br>`latent_image : [5<br>0]`   | Titre : KSampler<br>Description : Crée un tableau avec la configuration de ce workflow comfyui<br><br>Inputs : seed<br>steps<br>cfg<br>sampler_name<br>scheduler<br>denoise<br>model<br>positive<br>negative<br>latent_image  |
| 4      | CheckpointLoaderSimple     | `ckpt_name : "v1-5-pruned-emaonly.safetensors"`                             | Titre : Chargement du point de contrôle<br>Description : Charge un modèle pré-entrainé à partir d'un fichier de sauvegarde <br><br>ckpt_name : v1-5-pruned-emaonly.safetensors |
| 5      | EmptyLatentImage           | `width : 256`<br>`height : 256`<br>`batch_size : 1`                             | Titre : Image Latente Vide<br>Description : Crée une image latente vide pour initialiser l'entrainement d'un modèle Diffusion     |
| 6      | CLIPTextEncode             | `text : "une belle image de chien"`<br>`clip : [CLIP text encoding]`                           | Titre : Encodage de texte CLIP (Prompt)<br>Description : Transforme le texte en représentation interne pour le modèle CLIP   |
| 7      | CLIPTextEncode             | `text : "une belle image de chien"`<br>`clip : [CLIP text encoding]`                           | Titre : Encodage de texte CLIP (Prompt)<br>Description : Transforme le texte en représentation interne pour le modèle CLIP   |
| 8      | VAEDecode                  | `samples : [sampled latent image]`<br>`vae : [VAE model]`                | Titre : Décodage VAE<br>Description : Génère une image à partir des paramètres d'entrainement et de la représentation interne du modèle VAE   |
| 9      | SaveImage                  | `filename_prefix : "result"`<br>`images : [generated image]`                | Titre : Enregistrer Image<br>Description : Sauvegarde une image dans un fichier spécifié |

``````

> [!NOTE] Title
> Contents

> [!note]
> 


````ad-caution
title: Lechat  
collapse: closed 

![[IA Open WebUI - Generic - Generation Image-1741802633336.png|400x573]]  ![[IA Open WebUI - Generic - Generation Image-1741802663056.png|400x300]]

````



````ad-caution
title: Microsoft Copilot  
collapse: closed 

![[IA Open WebUI - Generic - Generation Image-1741803432980.png|400x400]]

```ad-cite
title: Prompt
collapse: closed 

![[IA Open WebUI - Generic - Generation Image-1741803411611.png|400x510]]

```

````



````ad-tip
title: Open WebUI  Generic 
collapse: Closed

```query
#openwebui 
```
````

---
creation date:: [[2025/03/11/📒2025-03-12]]  08:13





### Test  Autre workflow

#todo


### reproduire dans comfyui pour comprendre quel model fait flou

![[IA Open WebUI - Generic - Generation Image-1741765797648.png|400x155]]


![[IA Open WebUI - Generic - Generation Image-1741765810566.png]]

![[IA Open WebUI - Generic - Generation Image-1741765909334.png|400x102]]
![[IA Open WebUI - Generic - Generation Image-1741765926557.png|700]]


![[IA Open WebUI - Generic - Generation Image-1741765972877.png|400x214]]
![[IA Open WebUI - Generic - Generation Image-1741765981205.png|700]]