---

ELN info:
  template: IA Open WebUI - Pipeline - README.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-11
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
  - 
  - IA/open_webui/pipeline
---
````ad-tip
Source : https://github.com/open-webui/pipelines/blob/main/README.md

````

````ad-note
title: Note
pour apprendre a utiliser des pipelines

````

---
## Tasks
- [ ] [[#Test readme.md]]
- [ ] Test
---


````ad-tip
title: Open WebUI  Pipeline 
collapse: Closed

```query
#openwebui 
```
````

---
creation date:: [[2025/03/11/📒2025-03-11]]  23:10





### Test readme.md

![[IA Open WebUI - Pipeline - README.md-1741731123615.png]]


![[IA Open WebUI - Pipeline - README.md-1741731141128.png]]

![[IA Open WebUI - Pipeline - README.md-1741731250115.png|400x251]]


![[IA Open WebUI - Pipeline - README.md-1741731264396.png|400x350]]

![[IA Open WebUI - Pipeline - README.md-1741731295656.png|400x281]]


test avec

[pipelines/examples/pipelines/rag/llamaindex_pipeline.py at main · open-webui/pipelines · GitHub](https://github.com/open-webui/pipelines/blob/main/examples/pipelines/rag/llamaindex_pipeline.py)

`-e PIPELINES_URLS="https://github.com/open-webui/pipelines/blob/main/examples/filters/detoxify_filter_pipeline.py"`

`docker run -d -p 9099:9099 --add-host=host.docker.internal:host-gateway -e PIPELINES_URLS="https://github.com/open-webui/pipelines/blob/main/examples/filters/detoxify_filter_pipeline.py" -v pipelines:/app/pipelines --name pipelines --restart always ghcr.io/open-webui/pipelines:main`

`````sh

docker run -d -p 9099:9099 --add-host=host.docker.internal:host-gateway -e PIPELINES_URLS="https://github.com/open-webui/pipelines/blob/main/examples/pipelines/rag/llamaindex_pipeline.py" -v pipelines:/app/pipelines --name pipelines --restart always ghcr.io/open-webui/pipelines:main

-e PIPELINES_URLS="https://github.com/open-webui/pipelines/blob/main/examples/pipelines/rag/llamaindex_pipeline.py"
`````

ca marche pas avec docker 

- [ ] essayer en local avec python 




https://github.com/open-webui/pipelines/blob/main/examples/pipelines/rag/llamaindex_ollama_pipeline.py


docker run -d -p 9099:9099 --add-host=host.docker.internal:host-gateway -e PIPELINES_URLS="https://github.com/open-webui/pipelines/blob/main/examples/pipelines/rag/llamaindex_pipeline.py" -v pipelines:/app/pipelines --name pipelines --restart always ghcr.io/open-webui/pipelines:maim

::
