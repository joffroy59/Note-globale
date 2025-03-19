---
title: "Realistic Composition from Image Mix | ComfyUI Workflow | OpenArt"
source: "https://openart.ai/workflows/aiguildhub/realistic-composition-from-image-mix/6OiW6KJZZax6VN9FUeuq?msockid=361bfd4e2eb863dd06e2e8cc2f4c62a5"
author:
  - "[[OpenArt]]"
published:
created: 2025-03-19
description: "Created by: andiamo: Updated with latest IPAdapter nodes. What this workflow does This workflow is used to generate an image from four input images. Each input image will occupy a specific region of the final output, and the IPAdapters will blend all the elements to generate a homogeneous composition, taking colors, styles and objects. The strength of each image can be adjusted. The image will be somehow realistic, depending on the checkpoint that is used. In short, it allows to blend four different images into a coherent one. How to use this workflow There are several custom nodes in this workflow, that can be installed using the ComfyUI manager. The ip-adapter models for sd15 are needed. After that everything is ready, it is possible to load the four images that will be used for the output. After your first prompt, a preview of the mask will appear. From left to right, the images will occupy the following regions: top-left corner, bottom-left corner, bottom-right corner, top-right corner. It is adviced t"
tags:
  - "clippings toview"
---
### Realistic Composition from Image Mix

5.0

1 reviews

101

17.1K

4.2K

2

![](https://cdn.openart.ai/workflow_thumbnails/T5POWGNnD8FfJEJpYTE0/image_02f9Lh03_1701473566370_raw.jpg)

![](https://cdn.openart.ai/workflow_thumbnails/T5POWGNnD8FfJEJpYTE0/image_VcJxjEGN_1701473564627_raw.jpg)

![](https://cdn.openart.ai/workflow_thumbnails/T5POWGNnD8FfJEJpYTE0/image_nttEGw4N_1701473838238_raw.jpg)

###### Description

### **Updated with latest IPAdapter nodes.**

### What this workflow does

This workflow is used to generate an image from four input images. Each input image will occupy a specific region of the final output, and the IPAdapters will blend all the elements to generate a homogeneous composition, taking colors, styles and objects. The strength of each image can be adjusted. The image will be somehow realistic, depending on the checkpoint that is used.

In short, it allows to blend four different images into a coherent one.

  

### How to use this workflow

There are several custom nodes in this workflow, that can be installed using the ComfyUI manager. The ip-adapter models for sd15 are needed. After that everything is ready, it is possible to load the four images that will be used for the output. After your first prompt, a preview of the mask will appear. From left to right, the images will occupy the following regions: top-left corner, bottom-left corner, bottom-right corner, top-right corner.

It is adviced to choose square images or slightly vertical. You can adjust the area to be taken from each image from the crop\_position field. Moreover, it is possible to adjust the strength of each image by increasing the weight parameter of the Apply IPAdapters. Moreover, the noise parameter can also affect the output, generally values around 1 are better.

  

### Tips about this workflow

You can adjust the masked region using the nodes in the Masks group, in particular the x,y values of the Mask Composite and the height, width of the Solid Mask. Adjusting the Feather Masks can be useful to generate smoother images between the different subjects.

I had good results with epicphotogasm\_v1 and photon\_v1, but feel free to experiment with more models.

  

🎥 Video demo link (optional)

👉 \[Please add here\]

###### Node Diagram

To show the workflow graph full screen.

To toggle the lock state of the workflow graph. In the locked state, you can pan and zoom the graph. In the unlocked state, you can select, move and modify nodes. **The graph is locked by default.**

###### Discussion

﻿

What are your thoughts?

Author

[

andiamo

](https://openart.ai/workflows/@aiguildhub)

22

41.6K

720

160.6K

Reviews

[

杨瀚霖

](https://openart.ai/workflows/@retriever_stingy_60/id/SIGvtbSYMNdvNo3ozzFM)9 months ago

Boss, can you tell me where clip\_vision\_encoder.safetensors go to download?

Versions (2)

- \- latest (a year ago)
- \- v20231201-233300

Node Details

Primitive Nodes (0)

Custom Nodes (39)

[

ComfyUI

](https://github.com/comfyanonymous/ComfyUI)

- \- LoadImage (4)
- \- MaskComposite (4)
- \- FeatherMask (4)
- \- SolidMask (5)
- \- PreviewImage (1)
- \- CLIPTextEncode (2)
- \- EmptyLatentImage (1)
- \- VAEDecode (1)
- \- VAELoader (1)
- \- CheckpointLoaderSimple (1)
- \- KSampler (1)
- \- CLIPVisionLoader (1)

[

ComfyUI Essentials

](https://github.com/cubiq/ComfyUI_essentials)

- \- MaskPreview+ (4)

[

ComfyUI\_IPAdapter\_plus

](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

- \- PrepImageForClipVision (4)
- \- IPAdapterModelLoader (1)
- \- IPAdapterAdvanced (4)

Model Details

Checkpoints (1)

epicphotogasm\_v1.safetensors

LoRAs (0)