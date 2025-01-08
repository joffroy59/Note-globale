---
tags:
  - IA
  - template
  - template/insert
sticker: ""
banner_y: 0.492
cov:
---

> [!error] IA
> ## plugins Obsidian
> 
> ```meta-bind-button
> label: ▶️ Nouvelle Analyse
> icon: ""
> hidden: false
> class: btn-warning
> tooltip: ""
> id: Nouvelle Analyse
> style: default
> actions:
>   - type: templaterCreateNote
>     templateFile: Templates/Snippets/Plugin List Global v2.md
>     folderPath: IA/plugins/Essais
>     fileName: ""
>     openNote: true
>     openIfAlreadyExists: false
> ```
> 
> [[README]]

`="[[" + dateformat(date(today), "cccc-MMM-dd-yy") + "]]"`

`="[[" + dateformat(date(yesterday), "yyyy-MM-dd") + "|👈 yesterday]]"` | `="[[" + dateformat(date(today), "yyyy-MM-dd") + "|👇 today]]"` | `="[[" + dateformat(date(tomorrow), "yyyy-MM-dd") + "|👉 tomorrow]]"`


`="[[" + dateformat(date(yesterday), "yyyy-MM-dd") + "|👈 yesterday]]"` | `="[[" + dateformat(date(today), "yyyy-MM-dd") + "|👇 today]]"` | `="[[" + dateformat(date(tomorrow), "yyyy-MM-dd") + "|👉 tomorrow]]"`


`="[[" + dateformat(date(today), "yyyy-MM-dd") + "]]"`
`="[[Today |Daily Note/2025/01/📒" + dateformat(date(today), "yyyy-MM-dd") + "]]"`


`="[[" + dateformat(date(yesterday), "yyyy-MM-dd") + "|👈 yesterday]]"` | `="[[" + dateformat(date(today), "yyyy-MM-dd") + "|👇 today]]"` | `="[[" + dateformat(date(tomorrow), "yyyy-MM-dd") + "|👉 tomorrow]]"`

`="[[Daily Note/2025/01/📒" + dateformat(date(yesterday), "yyyy-MM-dd") + "|👈 yesterday]]"` | `="[[Daily Note/2025/01/📒" + dateformat(date(today), "yyyy-MM-dd") + "|👇 today]]"` | `="[[Daily Note/2025/01/📒" + dateformat(date(tomorrow), "yyyy-MM-dd") + "|👉 tomorrow]]"`


```button
name Insert Idea
type append template
action Inserts/Insert Idea
template true
note Daily Note/2025/01/2025-01-08
```
^button-ffffffffff

```ad-attention
title: Idea
collapse: open

- idea #ideas 

```


```button
name Insert To View
type append template
action Inserts/Insert ToView
customColor #45858833
customTextColor #0fb9b1
```

````ad-hint
title: To view
collapse: open
#toview 

TOVIEW #toview 
````










