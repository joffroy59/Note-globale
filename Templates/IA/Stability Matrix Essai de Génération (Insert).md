# 🚧 <% tp.system.prompt("Please enter the Subject") %> 
TXT2IMG
###### <% tp.date.now() %>


```embed

<url>
```

<%*
let userLink = await tp.system.prompt("Please enter Src link :");

// Embarquer le lien en utilisant la commande "Link Embedder: Embed link"
resuilt = await app.commands.executeCommand("obsidian-link-embed:embed-link", { url: userLink });

// Ajouter le lien embarqué au contenu de la note
tR += resuilt;
%>



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


