---
ELN info:
  template: Create IA - Task - Application.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-23
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
  - IA/application
  - local
  - windows
---

````ad-tip
Source : https://itsfoss.com/ollama-commands/

````




`BUTTON[add-tasklist-no-ask]`


`````ad-check
title: Upadate all model

<br>

```
ollama list | tail -n +2 | awk '{print $1}' | xargs -I {} ollama pull {}
```
`````



---
creation date:: [[2025/03/12/📒2025-03-23]]  09:54

