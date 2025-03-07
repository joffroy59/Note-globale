---
Title: "{{title}}"
URL: {{url}}
Pocket URL: {{pocket-url}}
Tags: [pocket, {{tags-no-hash}}]
Excerpt: >
    {{excerpt}}
---
{{tags}}
{{image}}

<%*
const url = tp.file.cursor();
const embed = await tp.obsidianLinkEmbed.embed(url);
%>
<% embed %>

