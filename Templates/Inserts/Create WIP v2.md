---
ollama_model_dir: I:\IA\ollama\models
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
%>
---
<%* tp.file.cursor() %> 
``````ad-example
title: WIP 
collapse: open

- [/] [[<% baseFolder %>/<% title %>]]  #status/wip  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

````ad-tip
Source : <% url %>

````

````ad-note
title: Note
<% note %> 

````

``````

---

