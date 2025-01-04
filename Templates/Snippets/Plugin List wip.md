---
tags:
  - template
---


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
## ————————————————————

Utiliser le  insert 'Templater' pour générer la liste des plugin ALL  ici : 
`templater : Open Insert Template  Modal`   > Snipets >  [[Plugin List All]]  
car bouton marche pas (pas d'interpretation du code du template) 














