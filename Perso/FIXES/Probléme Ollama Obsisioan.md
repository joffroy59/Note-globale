---
tags:
  - problem
  - fixed
  - fix
---

## ⛔Fix 1 Linux

Hi,

I found a solution that might help you with running the Ollama server on startup. I came across this solution while trying to solve another issue I was facing, but I believe it should also work for your case.

You need to modify the `/etc/systemd/system/ollama.service` file. In the `[Service]` section, add the following two lines:

```
ExecStart=/usr/local/bin/ollama serve
Environment="OLLAMA_ORIGINS=app://obsidian.md*"
```

This configuration should allow the Ollama server to start automatically at bootup.



ref  windows 
```embed
title: "How to config ollama using OLLAMA_ORIGINS windows"
image: ""
description: "Software Development Programming Tech Developer Engineering Science Digital Software Coding Computer Science Software Engineering Technology Code"
url: "https://lijohnny.com/Today-I-Learned/ds/ai-tools/how-to-config-ollama-using-windows.html#:~:text=To%20resolve%20this%20issue%2C%20you%20can%20use%20the,the%20Ollama%20plugin%20with%20Obsidian%20on%20Windows%20successfully."
```


## ✅ FIX windows 
### test variable env 

avec  windows set env variable 
![[Pasted image 20250105111117.png]]

```
OLLAMA_ORIGINS="app://obsidian.md*"
```
- ✅ start
- ✅ auto start model wit local Gpt 








----
## Aide 

```embed
title: "Unlocking the Power of Ollama: Advanced Configuration Settings"
image: ""
description: "Explore advanced settings for Ollama to optimize performance and adapt it to your specific needs!"
url: "https://www.arsturn.com/blog/advanced-configuration-settings-for-ollama"
```

### 2. Context Window Size

The default context window size in Ollama is set to 2048 tokens. For those situations when you need broader context understanding, you can change this size using the command below:

`1bash 2ollama run llama3 --set parameter num_ctx 4096`

If you’re using the API, specify the

`1num_ctx`

parameter:

`1bash 2curl http://localhost:11434/api/generate -d '{ "model": "llama3", "prompt": "Why is the sky blue?", "options": { "num_ctx": 4096 } }'`

This is especially useful when you want to deal with longer texts or need the model to remember more information while generating responses.