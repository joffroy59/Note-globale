<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;

const chat_name_list = ia_settings.chat.list
let chat_name = await tp.system.suggester((item) => item, chat_name_list, true, "Chat Name")
let chat_logo = ia_settings.chat[chat_name].logo

let prompt = await tp.system.prompt("Prompt", true, true, true);

const ad_collapse = "open"
-%>
````ad-note
title:   <% chat_name %> &nbsp; ![[<% chat_logo %>|24]] &nbsp;  <% tp.date.now("YYYY-MM-DD") %>
collapse: <% ad_collapse %>

```ad-cite
title: Prompt
 <% prompt %>
```

<%* tp.file.cursor() %>


````
