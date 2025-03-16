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
- [f] [[#gemma3]]
- [f] [[#gemma3:4b]]
- [o] [[#gemma3:1b]] ✅ 2025-03-16
- [f] [[#gemma3:4b-it-q4_K_M]]
- [ ] [[#gemma3:4b-it-q8_0]]
	
---

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

- [ ] re essayer apres  restart machine 

### gemma3


```sh
ollama run gemma3
```

![[IA Model - ollama - gemma3-1742116097847.png|400x198]]

### gemma3:4b


```sh
ollama run gemma3:4b
```

![[IA Model - ollama - gemma3-1742116086803.png|400x54]]






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

{image result} ![[IA Model - ollama - gemma3-1742116632516.png|400x63]]

![[IA Model - ollama - gemma3-1742116668955.png|400x112]]


### gemma3:4b-it-q8_0


```yml
  ollama run gemma3:4b-it-q8_0

```

👉

{image result} ![[IA Model - ollama - gemma3-1742162648000.png|400x33]]










