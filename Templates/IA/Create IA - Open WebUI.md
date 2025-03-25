---
<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;
const config_wip = ia_settings.wip

let title = await tp.file.title

let parts = title.split("-")
let type = parts[0].trim().replace(/IA/g, '').trim()
console.log(`Found sub type: ${type}`)
const config_wip_type = config_wip[type]

let sub_type = parts[1].trim()
let tag_list =  config_wip_type.tag.split(" ")
let tag_type_list = config_wip_type?config_wip_type.tag_type.split(" "):[]
for(let i=0; i<tag_type_list.length; i++){
	tag_list.push(tag_type_list[i] + "/" + sub_type.toLowerCase())
}

%>
ELN info:
  template: <% tp.config.template_file.name %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0
project:
  name: IA
wip:
  type: IA
  description: Travaux sur IA
ollama_model_dir: I:\IA\ollama\models
tags:
  - status/wip
  - IA
<%* for(let i=0; i<tag_list.length; i++){
    let tag = tag_list[i].trim().replace(/\#/g,'')-%>
  - <% tag %>
<%* } -%>
---

<%*
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
  title = await tp.system.prompt("Title :");
  if (!title) title = defaultTitle
  await tp.file.rename(`${title}`);
}

let url = await tp.system.prompt("url");

let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note", null, true, true);

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
let hasTip = (url || image)
-%>
<%* if (hasTip) { -%>

````ad-tip
<%*   if (url) { -%>
Source : <% url %>
<%*   } -%>

<%*   if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%*   } else if(image) { -%>
![](<% image %>)
<%*   } -%>
````
<%* } -%>

<%* if (note) { -%>
````ad-note
title: Note
<% note %>

````
<%* } -%>

<%*
tR+= await tp.file.include(`[[TaskList Simple]]`);
%>

## Infos

````ad-tip
title: Open WebUI  <% sub_type %>
collapse: Closed

```query
#openwebui
```
````

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>



