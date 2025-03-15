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

## 🚧 Wip ———————————————————————

`BUTTON[insert-daily-task-wip,insert-daily-task-wip-obsidian,insert-daily-wip-ia-task-select,insert-daily-wip,insert-daily-task-wip-graph]`

- [/] **WIP** ➕ <% tp.date.now("YYYY-MM-DD") %> 🛫 <% tp.date.now("YYYY-MM-DD") %>


## 🚀Tasks ——————————————————————

### 📎TODO's ——————

`BUTTON[insert-daily-todo]`    `BUTTON[insert-daily-task-toview]`    `BUTTON[insert-daily-idea]`    `BUTTON[insert-daily-task]`  `BUTTON[insert-daily-task-obsidian]`

- [ ] **TODO**  ➕ <% tp.date.now("YYYY-MM-DD") %>
 

### 🥷Missed Tasks 

`BUTTON[rollover,rollover_revert]`


### 🗄️🗃️Archived

[[Task Archives]]

### ✅ DONE ——————

[[Templates/Daily Note/Liste Done|Liste Done]]

 `BUTTON[insert-daily-done]` `BUTTON[insert-daily-win]`
 

### 📅Planning Tasks ———

[[Planning Tasks]]


### 🌐 Pocket

 `BUTTON[pocket-sync,pocket-open-list,pocket-create-all-notes]` 


## 🚨Problème ————————————————————

`BUTTON[insert-problem-daily-appart,insert-problem-daily-PC,insert-problem-daily-domotique,insert-problem-daily-ask]`

- [ ] **Problem**  ➕ <% tp.date.now("YYYY-MM-DD") %>

## 🗒️Today Modification
```dataview
TABLE file.ctime AS "Created", file.mtime AS "Updated", file.size AS "Size" 
WHERE file.cday = date("{{DATE}}") OR file.mday = date("{{DATE}}")
```

## 📝Note ———————————————————————

`BUTTON[insert-daily-note]` `BUTTON[insert-daily-other]`
### My Note

- [ ] **Note**  ➕ <% tp.date.now("YYYY-MM-DD") %>

### 🪛Sandbox 







[[<% tp.date.now("📒yyyy-MM-DD", -1, tp.file.title, "📒yyyy-MM-DD") %>|👈 yesterday]] | [[<% tp.date.now("📒yyyy-MM-DD", 0, tp.file.title, "📒yyyy-MM-DD") %>|👇 today]] | [[<% tp.date.now("📒yyyy-MM-DD", 1, tp.file.title, "📒yyyy-MM-DD") %>|👉 tomorrow]] |
