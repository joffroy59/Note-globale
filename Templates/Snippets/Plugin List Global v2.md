
---
<%*
   let title = tp.file.title;
   if (title.startsWith('Untitled')) {
      title = "🛠️Plugin Obsidian IA - " + tp.date.now('YYYY-MM-DD');
      await tp.file.rename(`${title}`);
   }
-%>
title: <%* tR += `${title}` %>
created: <% tp.date.now('YYYY-MM-DD') %>

---

<%* 
const pluginAiSection = "[[Plugin List v2 IA]]";
console.log(pluginAiSection);
-%>
<% tp.file.include(pluginAiSection) %>

<%* 
const pluginAllSection = "[[Plugin List All]]";
console.log(pluginAllSection);
-%>
<% tp.file.include(pluginAllSection) %>
