---
title: "Build a Local AI Writing Assistant with Ollama and Obsidian"
source: "https://medium.com/@joycebirkins/build-a-local-ai-writing-assistant-with-ollama-and-obsidian-1cc53cb7b9a3"
author:
  - "[[Joyce Birkins]]"
published: 2024-05-25
created: 2025-03-15
description: "As shown in the image, you can read all documents in Obsidian and directly implement local knowledge base Q&A and large model dialogue in Obsidian. There is no need for deployment or uploading…"
tags:
  - "clippings toview"
---
![shot by pamperherself](https://miro.medium.com/v2/resize:fit:700/1*aXPx-fNM9MzB8cv-3ajhsA.png)

shot by [pamperherself](https://medium.com/u/23f7bae559be?source=post_page---user_mention--1cc53cb7b9a3---------------------------------------)

## Achieving the Effects with Ollama + Obsidian

As shown in the image, you can read all documents in Obsidian and directly implement local knowledge base Q&A and large model dialogue in Obsidian. There is no need for deployment or uploading documents to another platform, as I described in [ollama+MaxKB, Building a Local AI Knowledge Base](https://mp.weixin.qq.com/s?__biz=MzkwNDMxNjA5MQ%3D%3D&mid=2247484172&idx=1&sn=2bf4ea193776485fc1c1e28c22a703b4&chksm=c08996d8f7fe1fcec7aeee5adefb6c71dd8815eb7d2e9175916765dd73dddc89b4aa1af144c5#rd).

![](https://miro.medium.com/v2/resize:fit:700/0*phOawOhsNg-sEHwF.png)

For writers like me who use Obsidian as a writing tool, this combination is really useful. While writing [Macbook Pro M2max 96G 8T Performance Test, Running llama 70B, mistral 8x7B (4-bit Quantization)](https://mp.weixin.qq.com/s?__biz=MzkwNDMxNjA5MQ%3D%3D&mid=2247484159&idx=1&sn=daef3b0902973ddca1ad92a40b9111ff&chksm=c089972bf7fe1e3d37a2bafc793f6c297308ec91b195710b07b28686caf49e9a5b21d3da0e56#rd), I downloaded Ollama and used it to download the 4-bit quantized llama 70B model, which only occupies 30G of memory and runs very fast.

## Configuring Ollama

Download the app from Ollama’s official site. Run the command `ollama run llama3:70b` in the terminal.

Different models have varying content quality. For Chinese content notes, it’s better to find an open-source Chinese LLM. Recently, Qwen has shown good overall capability. See the image below for details:

![](https://miro.medium.com/v2/resize:fit:564/0*yxT3-tiQgWPyY17q.png)

After downloading the model and opening the app, search for the “Smart Second Brain” plugin in Obsidian. Install it and choose the chat model you downloaded from the configuration. You can initially select any embedding model for the vector model; instructions for downloading it will be provided later.

The Ollama base URL can be left as the default. Use the “exclude field” to set documents you don’t want the model to access.

![](https://miro.medium.com/v2/resize:fit:700/0*KVqbmrflGUouoXsP.png)

## Using the Plugin

After setting up, go to the writing page and click the speech bubble on the far left. Follow the steps in the Smart Second Brain window that pops up. During the 8th step, you will be prompted to set the vector model. Clicking it will automatically download Ollama’s vector model, `nomic-embed-text`, which is said to outperform OpenAI's `text-embedding-ada-002` and `text-embedding-3-small` on both short and long context tasks.

> `*nomic-embed-text*` *is a large context length text encoder that surpasses OpenAI* `*text-embedding-ada-002*` *and* `*text-embedding-3-small*` *performance on short and long context tasks.*

The model size is 300M, and it doesn’t take long to download. Once downloaded, it will automatically start embedding the md documents in Obsidian.

You can set “creativity” where higher values result in more divergent answers, suitable for early-stage writing when AI provides topics and main ideas. “Similarity” sets the match degree of the document content with the user’s question; higher values mean more precise content retrieval by the LLM.

I tested RAG with English content using llama3:70b. The model didn’t answer based on the note documents but provided a higher quality response directly in the terminal.

![](https://miro.medium.com/v2/resize:fit:700/0*-u-E0x8DIPFMHt2r.png)

## Practical Use Cases

Despite the low quality of vector parsing for knowledge base Q&A, you can ask questions about individual articles using Obsidian’s built-in syntax `[[]]` to link documents. This way, the answers can be somewhat based on the content of the articles.

![](https://miro.medium.com/v2/resize:fit:700/0*EM8-bbKOs0czG6Tf.png)

If you need an LLM that can connect to the internet for material, you can use APIs from Kimi and Mita (paid services). Note that many Obsidian LLM-related plugins do not support commercial models and primarily support open-source models or popular tools like Ollama, LM Studio, and commercial models like GPT, Gemmi, and Claude.

Among Obsidian LLM plugins, Second Smart Brain, Copilot, and BMO ChatBot stand out. BMO ChatBot supports more models, including commercial and open-source ones, and allows writing model prompts directly in Obsidian.

![](https://miro.medium.com/v2/resize:fit:700/0*Monw1g5TzLAROzRA.png)

## Benefits of Integrating LLM into Obsidian

1. LLM provides writing ideas, inspiration, materials, and title references.
2. LLM optimizes sentence expression.
3. LLM can generate illustrations for the text.

These capabilities depend on the built-in abilities of the model, as some models have AI drawing capabilities while others do not. Find the model that suits your needs.

## Improvement Suggestions

1. Find a way to connect Obsidian to a model API with internet capabilities, like Kimi or Mita, or enable the model to call tools and connect to search plugins.
2. Enhance RAG to provide high-quality document content retrieval for knowledge base Q&A, as casual documents result in lower quality Q&A.

If these points are achieved, many RAG-related products can be bypassed.

For ideas and better suggestions on RAG knowledge base Q&A, agents, and AI workflows, feel free to contact me for discussion.

This is Linyu’s AI note. If you find the article helpful, you can support with a like or subscription

share photo on instagram: [pamperherself](https://www.instagram.com/pamperherself/)

daily life video on youtube : [pamperherself](https://www.youtube.com/channel/UCOy_clWtjVNt0AwYxDjDQWQ)

share Chinne version articles on Wechat: 博金斯的AI 笔记

![](https://miro.medium.com/v2/resize:fit:700/1*4t063U_arJ7eH6fj5r-8Ow.jpeg)

shot by [pamperherself](https://medium.com/u/23f7bae559be?source=post_page---user_mention--1cc53cb7b9a3---------------------------------------)