---
tags:
  - IA
  - IA/model
---

```
ollama run mistral-small
```

trop gros 
```sh
success
Error: llama runner process has terminated: error loading model: unable to allocate CUDA0 buffer

C:\Users\jerom>ollama run mistral-small
Error: llama runner process has terminated: error loading model: unable to allocate CUDA0 buffer

```
test plus petit 
[22b-instruct-2409-q3_K_S](https://ollama.com/library/mistral-small:22b-instruct-2409-q3_K_S)

`ollama run mistral-small:22b-instruct-2409-q3_K_S`
a bout d'un moment 
```powershell
C:\Users\jerom>ollama run mistral-small:22b-instruct-2409-q3_K_S
Error: llama runner process has terminated: error loading model: unable to allocate CUDA0 buffer
```


--> plus petit 

```shell
C:\Users\jerom>ollama run mistral-small:22b-instruct-2409-q2_K
pulling manifest
pulling 7cff049e08a7... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏ 8.3 GB
pulling cfee52e2391b... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏  900 B
pulling 06a6f77f3e95... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏  11 KB
pulling ac9aa3c4956d... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏   47 B
pulling c5bc8632d68e... 100% ▕████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████▏  486 B
verifying sha256 digest
writing manifest
success
Error: llama runner process has terminated: cudaMalloc failed: out of memory
```

bizarre 
stop docker openwebui (peut etre il utilise un petit model et prend la place )

quit docker desktop 
ca remarche --> donc la memoire devait etre prise par openwebui (peut etre faut il lancer ollama avant docker 
)

![[Pasted image 20250203224006-1.png]]

![[Pasted image 20250203224653-1.png]]