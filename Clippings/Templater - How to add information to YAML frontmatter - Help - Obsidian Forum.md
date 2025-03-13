---
title: "Templater - How to add information to YAML frontmatter - Help - Obsidian Forum"
source: "https://forum.obsidian.md/t/templater-how-to-add-information-to-yaml-frontmatter/38009/6"
author:
  - "[[Obsidian Forum]]"
published: 2022-05-25
created: 2025-03-13
description: "I found coding which allows me to rename a note with the title “Untitled” and pasted it into the template. I want to also be able to add information to  some frontmatter fields in the same way when creating a note from a…"
tags:
  - "clippings toview"
---
I found coding which allows me to rename a note with the title “Untitled” and pasted it into the template. I want to also be able to add information to some frontmatter fields in the same way when creating a note from a template. I am just too new to this to figure it out on my own, so I am hoping someone will/can help me.

This is my template:  
<%\*  
let title = tp.file.title  
if (title.startsWith(“Untitled”)) {  
title = await tp.system.prompt(“Title”);  
await tp.file.rename(title);  
}  
tR += “—”  
%>  
title: <%\* tR += title %>  
created: <% tp.date.now(“YYYMMDDHHmm”) %>  
tags:  
source:  
author:  
type:  
quote:  
paraphrase:  
<%\* tR +=“—” %>

## <%\* tR += title %>

The items I would to which I would like to add information when I am changing the name of the title are: tags, author, type, quote (eg. “Y”,“N”,“M”), and paraphrase (eg. “Y”,“N”,“M”). I wouldn’t always be adding information to all of them , so I need to be able to skip fields.

Thank you for any help you can give me.

- [Templater: issues with formatting metadata](https://forum.obsidian.md/t/templater-issues-with-formatting-metadata/66978)

[3](https://forum.obsidian.md/u/Twita "Twita")

[3](https://forum.obsidian.md/u/Mearman "Mearman")