<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;
const config_wip = ia_settings.wip

const typeList = config_wip.types

let application_type = await tp.system.suggester((item) => item, config_wip['Application'].type)
-%>---
ELN info:
  template: <% tp.file.title %>
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
  - IA/application
  - <% application_type %>
---
<%*
let baseFolder = "IA/Application"

let title = tp.file.title
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
  title = await tp.system.prompt("Title :");
  if (!title) title = defaultTitle
  await tp.file.rename(`${title}`);
}

let url = await tp.system.prompt("url");

let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");

const question = "Tasks ?"
let taskEnable = (await tp.system.suggester(['Yes','No'],['Yes','No'], false, question)) === 'Yes';

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

<%* if (taskEnable) { -%>
---
## Tasks
- [ ] Task1
---
<%* } -%>

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>

