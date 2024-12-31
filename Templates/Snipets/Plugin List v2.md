---
tags:
  - template
  - helper
---

---
<%*
   let title = tp.file.title;
   if (title.startsWith('Untitled')) {
      title = "Plugin Obsidian IA " + tp.date.now('YYYY-MM-DD');
      await tp.file.rename(`${title}`);
   }
-%>
title: <%* tR += `${title}` %>
created: <% tp.date.now('YYYY-MM-DD') %>

---

# Listes des plugins installés 
## 📅<% tp.date.now() %>
<%*

const myPlugins = [
'ai-assistant',
'ai-image-analyzer',
'bmo-chatbot',
'companion',
'excalibrain',
'omnisearch',
'smart-connections',
'smart-second-brain'
]

const myPluginsEnabled = [
	'companion',
	'excalibrain'
]
%>
### ✅Validated

<%*
const pluginsIA = app.plugins.manifests;
let table = "###### Plugins Installés\n\n";
table = "| Nom du plugin | Version | Activé |\n";
table += "|---------------|---------|--------|\n";
for (const [id, plugin] of Object.entries(pluginsIA)) {
	if (myPluginsEnabled.contains(id) ){
	    const isEnabled = app.plugins.enabledPlugins.has(id);
	    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled ? "✅" : "❌"} |\n`;
    }

}
tR += table;
%>
### 📅All AI
<%*
const allPluginsIA = app.plugins.manifests;
table = "###### Plugins Installés\n\n";
table = "| Nom du plugin | Version | Activé | id |\n";
table += "|---------------|---------|--------|-|\n";
for (const [id, plugin] of Object.entries(allPluginsIA)) {
	if (myPlugins.contains(id) ){
	    const isEnabled = app.plugins.enabledPlugins.has(id);
	    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled ? "✅" : "❌"} | ${id} |\n`;
    }

}
tR += table;
%>
## ————————————————————

Utiliser le  insert 'Templater' pour générer la liste des plugin ici : 
`templater : Open Insert Template  Modal`   > Snipets >  [[Plugin List]]
## Liste des plugins installés (ALL)

### ✨Plugins Installés (template )

<%*
const allPlugins_by2 = app.plugins.manifests;
table = "#### Plugins Installés\n\n";
table += "| Nom du plugin | Version | Activé | | Nom du plugin | Version | Activé |\n";
table += "|---------------|---------|--------|-|---------------|---------|--------|\n";
group = ""
for (const [id, plugin] of Object.entries(allPlugins_by2)) {
    const isEnabled_by2 = app.plugins.enabledPlugins.has(id);
    if (group == ""){
	    group = `| ${plugin.name} | ${plugin.version} | ${isEnabled_by2 ? "✅" : "❌"} |`;
    } else {
	    table += group;
	    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled_by2 ? "✅" : "❌"} |\n`;
	    group = "";
    }
}
tR += table;
%>

[[Plugins Installés (Dataview inline)]]













