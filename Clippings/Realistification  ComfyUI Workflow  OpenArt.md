---
title: "Realistification | ComfyUI Workflow | OpenArt"
source: "https://openart.ai/workflows/quail_mixed_75/realistification/89mJ5aH5DTvOpeuRpQFE?msockid=361bfd4e2eb863dd06e2e8cc2f4c62a5"
author:
  - "[[OpenArt]]"
published:
created: 2025-03-19
description: "Created by: Bernard Maltais: This workflow is an adaptation from the great youtube video from latentvision: https://www.youtube.com/@latentvision It will turn a low resolution (or high resolution) image into a realistic version. Instructions: 1. Access the Hyper-Prompt Crafter GPT : Navigate to the GPT Hyper-Prompt Crafter at https://chat.openai.com/g/g-pqjtooEfL-hyper-prompt-crafter 2. Image Upload : Once on the GPT site, upload your desired image that you want to craft prompts for. 3. Crafting Prompts : Enter the following instruction in the GPT prompt text box: \" Create a positive and negative prompt for this image, aimed at generating a sharp, hyper-realistic version of the image. \" - Example Resulting Prompts : - **Positive Prompt**: hyper-realistic portrait of an elderly man, sharp focus, high definition, detailed facial textures, white beard, pronounced facial wrinkles, sorrowful expression, green overcoat, grizzled hair, ambient forest background, soft natural lighting, 8K resolution, ray tracing for reali"
tags:
  - "clippings toview"
---
### Realistification

5.0

0 reviews

33

10.0K

1.9K

3

![](https://cdn.openart.ai/workflow_thumbnails/0KifqZ8zWOBunmx7vXjY/image_59_tCNSk_1705251359229_raw.jpg)

![](https://cdn.openart.ai/workflow_thumbnails/0KifqZ8zWOBunmx7vXjY/image_zr7It4Jr_1705250372126_raw.jpg)

![](https://cdn.openart.ai/workflow_thumbnails/0KifqZ8zWOBunmx7vXjY/image_rendNcm9_1705262884022_raw.jpg)

###### Description

This workflow is an adaptation from the great youtube video from latentvision: [https://www.youtube.com/@latentvision](https://www.youtube.com/@latentvision)

It will turn a low resolution (or high resolution) image into a realistic version.

Instructions:

  

1\. **Access the Hyper-Prompt Crafter GPT**: Navigate to the GPT Hyper-Prompt Crafter at https://chat.openai.com/g/g-pqjtooEfL-hyper-prompt-crafter

  

2\. **Image Upload**: Once on the GPT site, upload your desired image that you want to craft prompts for.

  

3\. **Crafting Prompts**: Enter the following instruction in the GPT prompt text box: "*Create a positive and negative prompt for this image, aimed at generating a sharp, hyper-realistic version of the image.*"

  

   - **Example Resulting Prompts**:

       - \*\*Positive Prompt\*\*: hyper-realistic portrait of an elderly man, sharp focus, high definition, detailed facial textures, white beard, pronounced facial wrinkles, sorrowful expression, green overcoat, grizzled hair, ambient forest background, soft natural lighting, 8K resolution, ray tracing for realistic shadows, Unreal Engine rendering

       - \*\*Negative Prompt\*\*: cartoonish, stylized, low detail, blur, oversaturated colors, flat lighting, missing facial hair texture, unclear facial expressions, simplistic background, low resolution, no ambient occlusion, minimal detail, lack of depth of field

  

4\. **Prompt Input in CLIP Text Encode Nodes**: Input the crafted positive and negative prompts into the corresponding Positive and Negative CLIP Text Encode nodes.

  

5\. **Enhancing the Result with IPAdapter**:

   - To further refine the output, use IPAdapter images that are representative of your subject, in this case, an elderly man wearing glasses.

   - Adjust the "Apply IPAdapter" node weight in the "IPAdapter references" group. A recommended starting value is 0.5. This setting will integrate the references more significantly into the final result.

Note: I am providing the source images for the old man in the accompaning zip file.

###### Node Diagram

To show the workflow graph full screen.

To toggle the lock state of the workflow graph. In the locked state, you can pan and zoom the graph. In the unlocked state, you can select, move and modify nodes. **The graph is locked by default.**

###### Discussion

﻿

What are your thoughts?

Author

[

Bernard Maltais

](https://openart.ai/workflows/@quail_mixed_75)

3

5.2K

82

23.3K

Resources (1)

realistication.zip (4.6 MB)

Reviews

No reviews yet

Versions (1)

- \- latest (a year ago)

Node Details

Primitive Nodes (3)

IPAdapterApply (1)

Reroute (2)

Custom Nodes (38)

[

ComfyUI

](https://github.com/comfyanonymous/ComfyUI)

- \- ControlNetApply (2)
- \- VAEEncode (2)
- \- ControlNetLoader (1)
- \- KSampler (4)
- \- PreviewImage (5)
- \- VAEDecode (4)
- \- ImageScaleToTotalPixels (2)
- \- SaveImage (2)
- \- LoadImage (3)
- \- CLIPTextEncode (2)
- \- ImageBlur (1)
- \- CLIPVisionLoader (1)
- \- VAELoader (1)
- \- CheckpointLoaderSimple (1)
- \- UpscaleModelLoader (2)
- \- ImageUpscaleWithModel (2)

[

ComfyUI Impact Pack

](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

- \- ImpactMakeImageBatch (1)

[

ComfyUI\_IPAdapter\_plus

](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

- \- IPAdapterModelLoader (1)

[

WAS Node Suite

](https://github.com/WASasquatch/was-node-suite-comfyui)

- \- Image Resize (1)

Model Details

Checkpoints (1)

sd1.5\\epicrealism\_naturalSinRC1VAE.safetensors

LoRAs (0)