<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;

const chat_name_list = ia_settings.chat.list
let chat_name = await tp.system.suggester((item) => item, chat_name_list)

let chat_logo = ia_settings.chat[chat_name].logo 

const ad_type = "ad-note"
const ad_collapse = "closed"
-%>
````<% ad_type %>
title:   <% chat_name %> &nbsp; ![[<% chat_logo %>|24]] 
collapse: <% ad_collapse %> 

<% tp.file.include("[[Insert Image v1]]") %>

```ad-cite
title: Prompt
collapse: closed 

<% tp.file.include("[[Insert Image v1]]") %>

```

````

 
