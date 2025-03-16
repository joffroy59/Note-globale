---
ELN info:
  template: IA Model - ollama - gemma3
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-16
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
  - IA/model
---

````ad-tip
Source : https://ollama.com/library/gemma3
ssss
````


---
## Tasks
- [f] [[#gemma3:12b-it-q4_K_M]] ➕ 2025-03-16
- [o] [[#gemma3]]
- [f] [[#gemma3:12b]]
- [o] [[#gemma3:4b]]
- [o] [[#gemma3:1b]] ✅ 2025-03-16
- [f] [[#gemma3:4b-it-q4_K_M]]
- [f] [[#gemma3:4b-it-q8_0]]

- [ ] [[#Transfomers]]  #application #IA/application  #toview #IA 
---

## Etude

trouver sur [A Step-by-Step Guide to Install Gemma-3 Locally with Ollama or Transformers](https://nodeshift.com/blog/a-step-by-step-guide-to-install-gemma-3-locally-with-ollama-or-transformers)
```embed
title: "A Step-by-Step Guide to Install Gemma-3 Locally with Ollama or Transformers"
image: "https://static.nodeshift.com/uploads/2025/03/Copy-of-Blog-Template_NS-7.png"
description: "Gemma-3 is Google’s latest open-weight large language model (LLM), pushing the boundaries of AI with multimodal capabilities, extended context length, and multilingual support. Unlike its predecessors, Gemma-3 can process both text and images, making it far more versatile for tasks like question answering, document summarization, and image analysis. With a massive 128K context window (for 4B+ models) and support for over 140 languages, it opens up new possibilities for advanced reasoning and content generation. Plus, it comes in multiple sizes, from 1B to 27B parameters, allowing you to choose the right balance between performance and efficiency. And the best part? It is available on both Ollama and Transformers, making it much easier for anyone to get started in no time, right in their machine locally or through cloud.   In this guide, we’ll show you step-by-step process to install and run Gemma 3 locally using Ollama and Hugging Face Transformers. (Bonus: We’ve asked it to build an AI based crypto trading agent. Want to see the results? Dive in!)"
url: "https://nodeshift.com/blog/a-step-by-step-guide-to-install-gemma-3-locally-with-ollama-or-transformers"
```

![[IA Model - ollama - gemma3-1742164834670.png|400x308]]

donc a priori normal de pas pouvoir faire tourner les model 12b (alors que semble etre en dessous de 12G .... bizarre)

## Tasks Detail

---- 

le chat 

```ad-info
collapse: closed

The term "12B-IT-Q4_K_M" refers to a specific configuration of a large language model (LLM) with the following characteristics:

1. **12B**: This indicates that the model has 12 billion parameters. The number of parameters is a measure of the model's capacity and complexity. More parameters generally allow the model to capture more nuances in the data, potentially leading to better performance on complex tasks.

2. **IT**: This likely stands for "Instruction-Tuned." Instruction tuning is a process where the model is fine-tuned on a dataset of instructions and corresponding responses. This helps the model better understand and follow specific instructions given by users, improving its performance on tasks that require following detailed prompts.

3. **Q4_K_M**: This refers to the quantization method used to optimize the model's size and efficiency. Quantization is a technique used to reduce the precision of the numbers that the model uses, which can significantly decrease the model's size and improve inference speed with minimal loss in accuracy.

   - **Q4**: This stands for 4-bit quantization, meaning the model's weights are stored using 4 bits per weight instead of the typical 16 or 32 bits. This drastically reduces the model's size.

   - **K_M**: This denotes a specific type of quantization strategy. In this context, "K" likely refers to a specific quantization method tailored for certain layers or components of the model, and "M" might indicate a particular variant or configuration of that method. For example, "K_M" could mean that different layers of the model use different quantization levels to balance performance and efficiency .

This configuration is often used to make large models more practical for deployment on devices with limited computational resources, such as mobile devices or edge servers, without sacrificing too much accuracy.

In summary, "12B-IT-Q4_K_M" is a shorthand for a 12-billion parameter model that has been instruction-tuned and quantized using a 4-bit precision strategy tailored for specific layers or components to optimize its size and efficiency.
```


--- 

```ad-tip
title: Ollama Models
collapse: Closed

- `= "[Ollama model]" + "(<file:///" + this.ollama_model_dir + ">)"`
```

---


### gemma3:12b-it-q4_K_M

```sh
ollama run gemma3:12b-it-q4_K_M
```

![[IA Model - ollama - gemma3-1742115821853.png|400x94]]

- [f] re essayer apres  restart machine 
![[IA Model - ollama - gemma3-1742164053003.png|400x19]]

if ? instruct ? peut etre pas utilisable ccomme ca avec olla directement 
- [ ] tester dasn vscode continue et isntruct configuration 
### gemma3

#### 1er Essai
```sh
ollama run gemma3
```

![[IA Model - ollama - gemma3-1742116097847.png|400x198]]

#### 2eme Essai
✅
![[IA Model - ollama - gemma3-1742162835369.png|400x98]]

--> problem temporaire memory  ??? 

### gemma3:4b

#### 1er Essai
```sh
ollama run gemma3:4b
```

![[IA Model - ollama - gemma3-1742116086803.png|400x54]]

#### 2eme Essai
✅
![[IA Model - ollama - gemma3-1742162762454.png|400x127]]

--> problem temporaire memory  ??? 


### gemma3:1b

```sh
ollama run gemma3:1b
```

![[IA Model - ollama - gemma3-1742116184981.png|400x46]]

![[IA Model - ollama - gemma3-1742116216335.png|400x121]]


### gemma3:4b-it-q4_K_M

```yml
ollama run gemma3:4b-it-q4_K_M   

```

👉

![[IA Model - ollama - gemma3-1742116632516.png|400x63]]

![[IA Model - ollama - gemma3-1742116668955.png|400x112]]


### gemma3:4b-it-q8_0


```yml
  ollama run gemma3:4b-it-q8_0

```

👉

![[IA Model - ollama - gemma3-1742162648000.png|400x33]]












### gemma3:12b

```yml
  ollama run gemma3:12b

```

👉

![[IA Model - ollama - gemma3-1742163800295.png|400x51]]





### Transfomers

```embed
title: "Fetching"
image: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1pY3Jvc29mdCIgd2lkdGg9IjgwcHgiICBoZWlnaHQ9IjgwcHgiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjxjaXJjbGUgY3g9IjgxLjczNDEzMzYxMTY0OTQxIiBjeT0iNzQuMzUwNDU3MTYwMzQ4ODIiIGZpbGw9IiNlMTViNjQiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM0MC4wMDEgNDkuOTk5OSA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49IjBzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9Ijc0LjM1MDQ1NzE2MDM0ODgyIiBjeT0iODEuNzM0MTMzNjExNjQ5NDEiIGZpbGw9IiNmNDdlNjAiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM0OC4zNTIgNTAuMDAwMSA1MC4wMDAxKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMDYyNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iNjUuMzA3MzM3Mjk0NjAzNiIgY3k9Ijg2Ljk1NTE4MTMwMDQ1MTQ3IiBmaWxsPSIjZjhiMjZhIiByPSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzNTQuMjM2IDUwIDUwKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMTI1cyI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT48Y2lyY2xlIGN4PSI1NS4yMjEwNDc2ODg4MDIwNyIgY3k9Ijg5LjY1Nzc5NDQ1NDk1MjQxIiBmaWxsPSIjYWJiZDgxIiByPSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzNTcuOTU4IDUwLjAwMDIgNTAuMDAwMikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49Ii0wLjE4NzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ0Ljc3ODk1MjMxMTE5NzkzIiBjeT0iODkuNjU3Nzk0NDU0OTUyNDEiIGZpbGw9IiM4NDliODciIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDM1OS43NiA1MC4wMDY0IDUwLjAwNjQpIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiIGJlZ2luPSItMC4yNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMzQuNjkyNjYyNzA1Mzk2NDE1IiBjeT0iODYuOTU1MTgxMzAwNDUxNDciIGZpbGw9IiNlMTViNjQiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDAuMTgzNTUyIDUwIDUwKSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiIHRpbWVzPSIwOzEiIGtleVNwbGluZXM9IjAuNSAwIDAuNSAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjVzIiBiZWdpbj0iLTAuMzEyNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+PGNpcmNsZSBjeD0iMjUuNjQ5NTQyODM5NjUxMTc2IiBjeT0iODEuNzM0MTMzNjExNjQ5NDEiIGZpbGw9IiNmNDdlNjAiIHI9IjUiIHRyYW5zZm9ybT0icm90YXRlKDEuODY0NTcgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiIGJlZ2luPSItMC4zNzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxjaXJjbGUgY3g9IjE4LjI2NTg2NjM4ODM1MDYiIGN5PSI3NC4zNTA0NTcxNjAzNDg4NCIgZmlsbD0iI2Y4YjI2YSIgcj0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoNS40NTEyNiA1MCA1MCkiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiB0aW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjUgMCAwLjUgMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS41cyIgYmVnaW49Ii0wLjQzNzVzIj48L2FuaW1hdGVUcmFuc2Zvcm0+CjwvY2lyY2xlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjAgNTAgNTA7MCA1MCA1MCIgdGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC41IDAgMC41IDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNXMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2c+PC9zdmc+"
description: "Fetching [A Step-by-Step Guide to Install Gemma-3 Locally with Ollama or Transformers](https://nodeshift.com/blog/a-step-by-step-guide-to-install-gemma-3-locally-with-ollama-or-transformers) "
url: "[A Step-by-Step Guide to Install Gemma-3 Locally with Ollama or Transformers](https://nodeshift.com/blog/a-step-by-step-guide-to-install-gemma-3-locally-with-ollama-or-transformers) "
```
![[IA Model - ollama - gemma3-1742165104220.png|400x527]]
