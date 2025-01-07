---
created: "{{date}}"
tags:
  - dailynotes
  - wip
banner: "IA/images/attachments/Pasted image 20241228004521.jpg"
sticker: emoji//1f636-200d-1f32b-fe0f
---
# My Today Note

## 📅 Today's ——————————————————

### 🥷Missed Tasks ———————————

`BUTTON[rollover,rollover_revert]`
#### Rollover Last Day

`````ad-cite
title:{{DATE}}
collapse: open
icon: calendar

### 🚀Today's Tasks 

`button-tpl-add-today-task` 

### 🏆Today's Wins
`button-tpl-add-today-wins` 
`````
## ✅ DONE 
`````ad-done
title:/
collapse: open
`button-tpl-add-done` 

`````
## 💡Ideas
`````ad-attention
title:'
collapse: open
`button-tpl-add-idea` 

`````
## .
`````ad-todo
title:## 📎TODO's
collapse: open
`button-tpl-add-todo` 

`````
## .
`````ad-warning
title:## 🧪Test 'in Progress'
collapse: open
`button-tpl-add-wip` 

`````
## .
`````ad-hint
title:## 👀To View
collapse: open
`button-tpl-add-toview` 

`````
## .
`````ad-bug
title:## 🚨Problème
collapse: open
`button-tpl-add-problem` 

`````
## .
`````ad-note
title:## 📝Note
collapse: open

`button-tpl-add-note` 

`````
### Note créées ce jour ———————
> [!example] New Today
> ```dataview
> LIST dateformat(file.ctime, "yyyy-MM-dd HH:mm") WHERE file.cday = this.file.day AND file.path != this.file.path SORT file.name asc
> ```
> 
### Note modifiées ce jour ————
> [!example] Modified Today
> ```dataview 
> LIST dateformat(file.mtime, "yyyy-MM-dd HH:mm") WHERE file.mday = this.file.day AND file.path != this.file.path SORT file.name asc
> ```
> 
## .
`````ad-tip
title:## 👉Autre
collapse: open
`button-tpl-add-other` 

`````

## —————————————————————————
## 🪛Sandbox 

