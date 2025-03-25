---
<%*
const global_task_type = "IA"
const settings_file = "Assets/Tasks Settings.md";
const settings_root = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;

const settings_global_type =  settings_root[global_task_type]

const global_task_type_tags = global_task_type.replace(/ /g,"_").toLowerCase()

const folder_base = settings_global_type.folder_base

const folder_base_offset = folder_base.split("/").length

let title = tp.file.title
let parent = tp.file.folder(true)

let parent_list = parent.split("/")

let task_type = parent_list[folder_base_offset]
let task_type_tags = settings_global_type.task_type[task_type.trim()]?settings_global_type.task_type[task_type.trim()].tags:""

let generic_type = parent_list[(folder_base_offset +1)]
let generic_type_tags = settings_global_type[generic_type.trim()]?settings_global_type[generic_type.trim()].tags:""

let tags = `#${global_task_type_tags} ${task_type_tags} ${generic_type_tags}`.replace(/#/g,"")
%>
ELN info:
  template: <% tp.config.template_file.name %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0

tags: <% tags %>

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

