---
ELN info:
  template: Plugin Add 
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-06
  copyright: GNU Affero General Public License v3.0
tags:
  - status/wip
  - plugins
  - add
  - obsidian
---
<%*
let title = tp.file.title
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
  title = await tp.system.prompt("Title :");
  if (!title) title = defaultTitle
  await tp.file.rename(`${title}`);
}

let note = await tp.system.prompt("Note", null, true, true);
%>
<%* if (note) { -%>
````ad-note
title: Note


````
<%* } -%>
---
## Tasks
- [ ] Installation
	- [ ] [[#Install and config plugin]] ➕ <% tp.date.now("YYYY-MM-DD") %> 
	- [ ] [[#Create a button]]  ➕ <% tp.date.now("YYYY-MM-DD") %> 


---
### Install and config plugin

**{PRINTSCREEEN CONFIGURATION}**




### Create a button

