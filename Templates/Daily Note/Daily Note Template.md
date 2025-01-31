---
created: "{{date}}"
tags:
  - dailynotes
  - template/insert
banner: "IA/images/attachments/Pasted image 20241228004521.jpg"
sticker: emoji//1f636-200d-1f32b-fe0f
---
# My Today Note

[[<% tp.date.now("📒yyyy-MM-DD", -1, tp.file.title, "📒yyyy-MM-DD") %>|👈 yesterday]] | [[<% tp.date.now("📒yyyy-MM-DD", 0, tp.file.title, "📒yyyy-MM-DD") %>|👇 today]] | [[<% tp.date.now("📒yyyy-MM-DD", 1, tp.file.title, "📒yyyy-MM-DD") %>|👉 tomorrow]] |

## 🚧 Wip ———————

`BUTTON[insert-daily-wip]`
 
 - [ ] **WIP**

## 📅 Today's ——————

### 🥷Missed Tasks ————

`BUTTON[rollover,rollover_revert]`
#### Rollover Last Day



### 🚀Today's Tasks ———

 `BUTTON[insert-daily-task]`
 
 - [ ] **Tasks**
 

#### Obsidian

`BUTTON[insert-daily-task]`

- [ ] **Obsidian**


### 🚀Planning Tasks ———
<% tp.file.include("[[Planning Tasks]]") %>

### 🏆Today's Wins ———

`BUTTON[insert-daily-win]`


## ✅ DONE ——————

``````ad-tip
title: Done Today
collapse: closed

```tasks
show tree 

done on <% tp.file.creation_date('YYYY-MM-DD') %>


hide backlink
hide created date
hide start date
hide scheduled date
hide due date
hide done date
hide tags
hide edit button

group by backlink
```

``````

 `BUTTON[insert-daily-done]`
 


## 💡Ideas ———————

 `BUTTON[insert-daily-idea]`
 

## 📎TODO's ——————

`BUTTON[insert-daily-todo]`


## 👀To View —————

`BUTTON[insert-daily-toview]`


## 🚨Problème —————

`BUTTON[insert-problem-daily-appart,insert-problem-daily-PC,insert-problem-daily-domotique,insert-problem-daily-ask]`


## 📝Note ———————

`BUTTON[insert-daily-note]`


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


## 👉Autre ——————

`BUTTON[insert-daily-other]`



## 🪛Sandbox 







[[<% tp.date.now("📒yyyy-MM-DD", -1, tp.file.title, "📒yyyy-MM-DD") %>|👈 yesterday]] | [[<% tp.date.now("📒yyyy-MM-DD", 0, tp.file.title, "📒yyyy-MM-DD") %>|👇 today]] | [[<% tp.date.now("📒yyyy-MM-DD", 1, tp.file.title, "📒yyyy-MM-DD") %>|👉 tomorrow]] |
