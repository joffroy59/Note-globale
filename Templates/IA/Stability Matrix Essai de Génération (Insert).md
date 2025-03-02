---
ELN info:
  template: <% tp.file.title %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0
  
tags:
  - template/insert
  - IA/StabilityMatrix
---
# 🚧 <% tp.system.prompt("Please enter the Subject") %> 
TXT2IMG
###### <% tp.date.now() %>


```embed

<url>
```

```ad-quote
collapse: Closed

title: Generation data

<% tp.system.prompt("Please enter the parameter") %>

```

```ad-success
title: Mon resulat Local 
collapse: Open
<image résultat> 
|300
```

```ad-info
title: Configuration
collapse: Closed

< printscreen configuration UI>
|300
```

```ad-caution
title: Sauvegarde Stability Matrix
collapse: Closed

```

# ———————————————————————

```meta-bind-button
label: Insert Stability Matrix Exemple
icon: plus-circle
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: command
    command: quickadd:choice:db120296-7e0c-44ab-9544-74411cf5f104
```


