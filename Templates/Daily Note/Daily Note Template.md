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

## 📅 Today's ——————————————————

### 🥷Missed Tasks ———————————

`BUTTON[rollover,rollover_revert]`
#### Rollover Last Day

### 🚀Today's Tasks ———————

 `BUTTON[insert-daily-task]`
 
#### Obsidian

`BUTTON[insert-daily-task]`

### 🏆Today's Wins ———

`BUTTON[insert-daily-win]`

## .
## ✅ DONE 

 `BUTTON[insert-daily-done]`
 
## .
## 💡Ideas ——————————————————

 `BUTTON[insert-daily-idea]`
 
## .
## 📎TODO's ————————————————

`BUTTON[insert-daily-todo]`

## .
## 🚧 Wip ——————————

`BUTTON[insert-daily-wip]`

## .
## 👀To View —————————————

`BUTTON[insert-daily-toview]`

## .
## 🚨Problème ———————————

`BUTTON[insert-problem-daily-appart,insert-problem-daily-PC,insert-problem-daily-domotique,insert-problem-daily-ask]`

## .
## 📝Note ————————————

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

## .
## 👉Autre ——————————

`BUTTON[insert-daily-other]`


## —————————————————————————
## 🪛Sandbox 







`="[[Daily Note/2025/01/📒" + dateformat(date(yesterday), "yyyy-MM-dd") + "|👈 yesterday]]"` | `="[[Daily Note/2025/01/📒" + dateformat(date(today), "yyyy-MM-dd") + "|👇 today]]"` | `="[[Daily Note/2025/01/📒" + dateformat(date(tomorrow), "yyyy-MM-dd") + "|👉 tomorrow]]"`
