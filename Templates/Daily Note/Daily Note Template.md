---
created: "{{date}}"
tags:
  - dailynotes
  - template
banner: "IA/images/attachments/Pasted image 20241228004521.jpg"
sticker: emoji//1f636-200d-1f32b-fe0f
---
# My Today Note

## 📅 Today's ——————————————————

### 🥷Missed Tasks ———————————

`BUTTON[rollover,rollover_revert]`
#### Rollover Last Day
### 🚀Today's Tasks ———————
#task

- [ ] TODO today
### 🏆Today's Wins ———
#wins

```ad-success
collapse: closed

```

## 💡Ideas ——————————————————
#ideas 

```ad-attention
title: Idea
collapse: closed


```
## 📎TODO's —————————————————
#todo
- [ ] 

## 👀To View ————————————————
#toview 

```ad-hint
title: To view
collapse: closed


```
## 🚨Problème ——————————————
#problem

> [!danger] Problème rencontré 
> Problème PC
> Problème Appartement
> Problème Domotique
## 📝Note ———————————————
#note

```ad-note
title: Title

content 
```
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

## 👉Autre —————————————

> [!NOTE] Title
> Contents
## 🪛Sandbox ——————————

