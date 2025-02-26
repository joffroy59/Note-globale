---
title: "Mixtral 8x7b"
source: "https://stablediffusion.fr/mixtral"
author:
  - "[[Mixtral 8x7b | MistralAI]]"
published:
created: 2025-02-26
description: "Mixtral 8x7b is a high-quality sparse mixture of experts model (SMoE) artificial intelligence with open weights."
tags:
  - "clippings toview"
---
#### Our service is free. If you like our work and want to support us, [**we accept donations (Paypal)**](https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=6L457AP3785YJ).

## Mistral AI

[Mistral AI](https://mistral.ai/) remains committed to providing top-notch open models for developers. Progress in  [AI](https://stablediffusion.fr/#) involves exploring fresh tech avenues, not just rehashing known architectures and training methods. Crucially, it’s about sharing unique models with the community to inspire novel inventions and applications.

AI-enabled financial planning platform

Mixtral 8x7B, a top-tier sparse mixture of experts model (SMoE) with open weights, licensed under Apache 2.0. It surpasses

 [Llama](https://stablediffusion.fr/#)

2 70B in most benchmarks, offering 6x quicker inference. It’s the most potent open-weight model with a liberal license, and the best in terms of cost-performance balance. Notably, it equals or exceeds GPT3.5 on most standard benchmarks.

Mixtral’s features include:  
  - handling of a 32k token context.  
  - Multilingual support for English, French, Italian, German, and Spanish.  
  - High performance in code generation.  
  - Can be fine-tuned into an instruction-following model, scoring 8.3 on MT-Bench.

## Distributed open models

Advancing open models with sparse structures Mixtral is a sparse network of expert mixtures. It’s a decoder-only model where the feedforward block selects from 8 unique parameter groups. At each layer, for each token, a router network picks two of these groups (the ‘experts’) to process the token and add their outputs.

This method boosts the model’s parameters while managing cost and latency, as only a portion of the total parameters are used per token. Specifically, Mixtral has 46.7B total parameters but uses just 12.9B per token. Thus, it inputs and outputs at the same pace and cost as a 12.9B model.