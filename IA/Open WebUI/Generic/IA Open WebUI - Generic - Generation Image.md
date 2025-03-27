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
Source : [http://localhost:3000/s/80bf7d08-8966-482d-a708-4e492cd31527]()

![[IA Open WebUI - Generic - Generation Image-1741763682737.png|700]]
````

````ad-note
title: Note
Image workflow pas assez net 
![[IA Open WebUI - Generic - Generation Image-1741763735628.png|700]]

```ad-cite 
title: Prompt
collapse: closed

Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.
```
````

---

![[Assets/banner/Style1/Success.png|300]]

```dataview
TABLE
WHERE  meta(section).subpath = "Next Actions"
```

---
## Tasks
- [x] config json ✅ 2025-03-12
- [/] [[#Test  Autre workflow]] 
- [ ] [[#reproduire dans comfyui pour comprendre quel model fait flou]] 
- [ ] [[#Test avec Comfy UI directement Workflow1 success]]
- [ ] [[#Test avec Comfy UI directement Workflow2 success]]
- [ ] [[#Test avec Comfy UI directement Workflow3 (Template)]]
- [ ] [[#Test avec Comfy UI directement Workflow1a]]
- [ ] [[#Test avec Comfy UI directement Workflow1b]]
- [ ] [[#Test avec Comfy UI directement Workflow1c]]
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


### Test avec Comfy UI directement Workflow1 #success 
pour trouver un meilleur workflow pour  Openweb UI 

```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow: 
![[ok.json]]

```

```ad-seealso
title: config
collapse: closed


![[IA Open WebUI - Generic - Generation Image-1742258708624.png|400x167]]

```

```ad-info
title: prompt 
collapse: closed 

Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.

```

```ad-success
title: Resultat 
 

![[IA Open WebUI - Generic - Generation Image-1742258664480.png|400x633]]

```

![[Assets/banner/Style1/Success.png|300]]
```````

### Test avec Comfy UI directement Workflow2 #success 
pour trouver un mailleir workflow pour  Openweb UI 

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

![[IA Open WebUI - Generic - Generation Image-1742261480545.png|400x221]]

![[IA Open WebUI - Generic - Generation Image-1742261452923.png|400x178]]

```

---

```ad-info
title: prompt 
collapse: closed 

 Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.

```

---

```ad-success
title: Resultat 
 

{Image}

```
![[Assets/banner/Style1/Success.png|300]]

---

```ad-failure
title: Resultat 
 

{Image}

```


![[Assets/banner/Style1/Failure.png|300]]
```````


### Test avec Comfy UI directement Workflow3 (Template)
pour trouver un mailleir workflow pour  Openweb UI 

```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow: 
![[IA Open WebUI - Generic - Generation Image-1742261909192.png|400x34]]

```

---

```ad-seealso
title: config
collapse: closed

![[IA Open WebUI - Generic - Generation Image-1742261920519.png|400x208]]

```

---

```ad-info
title: prompt 
collapse: closed 

 Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.


```

---

```ad-success
title: Resultat 
 
![[IA Open WebUI - Generic - Generation Image-1742261934213.png|400x400]]
{Image}

```
![[Assets/banner/Style1/Success.png|300]]

```````


### Test avec Comfy UI directement Workflow1a
pour trouver un mailleir workflow pour  Openweb UI 

```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow: 
![[IA Open WebUI - Generic - Generation Image-1742262074526.png|400x46]]

```

---

```ad-seealso
title: config
collapse: closed

![[IA Open WebUI - Generic - Generation Image-1742262078388.png|400x214]]


```

---

```ad-info
title: prompt 
collapse: closed 

 Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.


```

---

```ad-success
title: Resultat 
 
![[IA Open WebUI - Generic - Generation Image-1742262097427.png|400x400]]

```
![[Assets/banner/Style1/Success.png|300]]


```````

### Test avec Comfy UI directement Workflow1b
pour trouver un mailleir workflow pour  Openweb UI 



```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow: 
![[IA Open WebUI - Generic - Generation Image-1742262259316.png|400x53]]

```

---

```ad-seealso
title: config
collapse: closed

![[IA Open WebUI - Generic - Generation Image-1742262268589.png|400x178]]

```

---

```ad-info
title: prompt 
collapse: closed 

 Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.


```

---

```ad-success
title: Resultat 
 

![[IA Open WebUI - Generic - Generation Image-1742262297603.png|400x400]]{Image}

```
![[Assets/banner/Style1/Success.png|300]]


```````


### Test avec Comfy UI directement Workflow1c
pour trouver un mailleir workflow pour  Openweb UI 



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

Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.


```

---

```ad-info
title: prompt 
collapse: closed 

 Craft an evocative and descriptive piece showcasing the enchanting beauty of New York City at sunset, as seen through the lens of a high-resolution photograph. In this captivating image, the city skyline is bathed in hues of gold, orange, and violet, as the sun dips below the horizon. The towering buildings cast long, dramatic shadows over the bustling streets below, where taxis race and pedestrians weave their way through the labyrinthine network of concrete and steel. Above the city, the sky transforms into a breathtaking canvas of cloud formations that seem to dance in the fading light, while the rivers and bays surrounding Manhattan glimmer like molten gold. The image is a testament to the enduring allure of New York City, a symbol of resilience, diversity, and ambition that never ceases to captivate those who gaze upon it.


```

```ad-failure
title: Resultat 
 

{Image}

```


![[Assets/banner/Style1/Failure.png|300]]
```````



`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip]`
`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip-inner, add-image-result-success-wip-inner-col]`


