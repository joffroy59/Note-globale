---
title: "SDXL config ComfyUI Fast generation 4GB vRAM (refiner) - v4 Best quality | Stable Diffusion XL Other | Civitai"
source: "https://civitai.com/models/117996/sdxl-config-comfyui-fast-generation-4gb-vram-refiner"
author:
published: 2023-07-28
created: 2025-02-25
description: "Hey guys, I was trying SDXL 1.0 but my laptop with a RTX 3050 Laptop 4GB vRAM was not able to generate in less than 3 minutes, so I spent some time..."
tags:
  - "clippings toview"
---
Hey guys,

I was trying SDXL 1.0 but my laptop with a RTX 3050 Laptop 4GB vRAM was not able to generate in less than 3 minutes, so I spent some time to get a good configuration in ComfyUI, now I get can generate in 55s (batch images) - 70s (new prompt detected) getting a great images after the refiner kicks in.

Is the best balanced I could find between image size (1024x720), models, steps (10+5 refiner), samplers/schedulers, so we can use SDXL on our laptops without those expensive/bulky desktop GPUs.

I wanted to share my configuration for ComfyUI, since many of us are using our laptops most of the time. I think this is the best balanced I could find.

**Add params in "run\_nvidia\_gpu.bat" *\--normalvram --fp16-vae***

**Face fix fast version?:**

SDXL has many problems for faces when the face is away from the "camera" (small faces), so this version fixes faces detected and takes 5 extra steps only for the face.

**Face fix no fast version?:**  
For fix face (no fast version), faces will be fixed after the upscaler, better results, specially for very small faces, but adds 20 seconds compared to fast version.

If the face fix output does not generate a different image (maybe you are using a 4x upscaler), and console prints "*segment skip \[determined upscale factor=0.9875809267424535\]*" , in module "FaceDetailer" increase "guide\_size" from 1280 to 1408 or more until it activates the FaceDetailer.

**Difference between LORA and LORA fast?:**

If you choose LORA fast, you can save 20-30 seconds.

The LORA fast does not have 3 extra steps after refiner to retouch the LORA effect, refiner dims the effect of the LORAs, in some cases for LORA with custom styles is needed the last 3 steps to add again the effect. Not needed in most cases, recommended for LORAs with custom styles were styles changes a lot the image.

**Generation time (after first image):**

**No LORA:** 55-60 seconds

**With LORA:** 85-115 seconds

**With LORA Fast:** 75-80 seconds

**With face fix:** 80 seconds (fix faces FAST) - 110 seconds (Fix faces slow version)

Files to Download:

- **Refiner SDXL 1.0**: [https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0)
- **Model Dreamshaper SDXL 1.0 (or any other)**: [https://civitai.com/models/112902/dreamshaper-xl10](https://civitai.com/models/112902/dreamshaper-xl10)
- **Fixed SDXL VAE 16FP:** [https://huggingface.co/madebyollin/sdxl-vae-fp16-fix](https://huggingface.co/madebyollin/sdxl-vae-fp16-fix) (*config.json*, *diffusion\_pytorch\_model.safetensors* and *sdxl\_vae.safetensors* files inside the same folder under VAE/<NEW\_FOLDER>).

- **For the LORA version:** [https://civitai.com/models/117635/greg-rutkowski-style-lora-sdxl](https://civitai.com/models/117635/greg-rutkowski-style-lora-sdxl)

![](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7066bcd8-27dc-40cc-a8e8-2f72c7f14eb8/width=525/7066bcd8-27dc-40cc-a8e8-2f72c7f14eb8.jpeg)