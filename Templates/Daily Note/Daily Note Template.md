---
created: "{{date}}"
tags:
  - dailynotes
banner: "IA/images/attachments/Pasted image 20241228004521.jpg"
sticker: emoji//1f636-200d-1f32b-fe0f
---
# My Today Note

## 📅 Today's ——————————————————

### 🥷Missed Tasks ———————————

`BUTTON[rollover,rollover_revert]`
#### Rollover Last Day

### 🚀Today's Tasks ———————

```button
name ⚙️Insert Task
type append template
action Inserts/Insert Task
color default
```

### 🏆Today's Wins ———

```button
name Insert Win
type append template
action Inserts/Insert Win
customColor #45858833
customTextColor #00c853
```

## .
## ✅ DONE 

> [!success]-
> ### Configure Obsidian hotkey
> 
> 1. Open Obsidian Settings
> 2. Go to Hotkeys
> 3. Filter "Local" and you should see "Local GPT: Show context menu"
> 4. Click on `+` icon and press hotkey (e.g. `⌘ + M`)
> 
> --> Alt+I 


```ad-success
Plugin IA pour changer le texte selectionné dans la note : ⭐Local Gpt
```
## .
## 💡Ideas ——————————————————

```button
name Insert Idea
type append template
action Inserts/Insert Idea
customColor #45858833
customTextColor #ff9100
```

## .
## 📎TODO's ————————————————

```button
name 📎Insert TODO
type append template
action Inserts/Insert TODO
color default
```

## .
## 🧪Test 'in Progress''s ——————————

```button
name Insert Test
type append template
action Inserts/Insert Test In Progress
color purple
```

## .
## 👀To View —————————————

```button
name Insert To View
type append template
action Inserts/Insert ToView
customColor #45858833
customTextColor #0fb9b1
```

## .
## 🚨Problème ———————————

```button
name Insert Problem
type append template
action Inserts/Insert Problem
color red
```

## .
## 📝Note ————————————

```button
name Insert Note
type append template
action Inserts/Insert Note
color blue
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

## .
## 👉Autre ——————————

```button
name Insert Other
type append template
action Inserts/Insert Other
customColor #45858833
customTextColor #fbf1c7
```


## —————————————————————————
## 🪛Sandbox 

