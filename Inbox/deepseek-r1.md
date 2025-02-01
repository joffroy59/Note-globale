```embed
title: "deepseek-r1"
image: "https://ollama.com/public/og.png"
description: "DeepSeek's first-generation of reasoning models with comparable performance to OpenAI-o1, including six dense models distilled from DeepSeek-R1 based on Llama and Qwen."
url: "https://ollama.com/library/deepseek-r1"
```


- [x] [[#7b]] ✅ 2025-02-01
- [x] [[#14b]] ✅ 2025-02-01
- [ ] 1.5b


## test avec [[⭐Faire fonctionner Open WebUI avec Ollama]]

### 7b

```powershell fold
C:\Users\jerom>ollama run deepseek-r1:7b
pulling manifest
pulling 96c415656d37... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏ 4.7 GB
pulling 369ca498f347... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏  387 B
pulling 6e4c38e1172f... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏ 1.1 KB
pulling f4d24e9138dd... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏  148 B
pulling 40fb844194b2... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏  487 B
verifying sha256 digest
writing manifest
success
>>> Send a message (/? for help)
```

![[Pasted image 20250201015311-1.png]]

![[20250201-0054-59.1374316.mp4|500]]]
### 14b

ollama run deepseek-r1:14b


```powershell fold

C:\Users\jerom>ollama run deepseek-r1:14b
>>> Send a message (/? for help)
```


![[20250201-0101-27.8099666 2.mp4]]
### 1.5b




```powershell fold

C:\Users\jerom>ollama run deepseek-r1:1.5b
>>> Send a message (/? for help)
```

![[20250201-0105-10.1554784.mp4]]

Rapide 2200 toekn/s
3s 
