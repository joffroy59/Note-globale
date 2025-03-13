<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;

const chat_name_list = ia_settings.chat.list
let chat_name = await tp.system.suggester((item) => item, chat_name_list)
-%>
````ad-caution
title: <% chat_name %>
collapse: closed 

<% tp.file.include("[[Insert Image v1]]") %>

```ad-cite
title: Prompt
collapse: closed 

![[IA Open WebUI - Generic - Generation Image-1741803411611.png|400x510]]

```

````


