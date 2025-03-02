---
ELN info:
  template: <% tp.file.title %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0
  

tags:
  - status/wip
---
<%*
let baseFolder = "WIP"

let title = tp.file.title
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
	title = await tp.system.prompt("Title from page");
	if (!title) title = defaultTitle
	await tp.file.rename(`${title}`);
} 

let url = await tp.system.prompt("url");
let note = await tp.system.prompt("Note");
-%>

<%* if (url) { %> 
````ad-tip
Source : <% url %>

````
<%* } %>
````ad-note
title: Note
<% note %> 

````
