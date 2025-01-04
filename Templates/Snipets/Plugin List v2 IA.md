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
'smart-second-brain',
'local-gpt'
]

const myPluginsEnabled = [
	'companion',
	'excalibrain',
	'local-gpt'
]
%>
### ✅Validated

[[Plugin Obsidian IA - Validated]]

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
## Ajout d'une nouvelle version snapshot des plugin IA installé 

Utiliser  le  insert 'Templater' pour générer la liste des plugin ici : 
`templater : Open Insert Template  Modal`   > Snipets >  [[Plugin List]]
car bouton marche pas (pas d'interpretation du code du template) 
```button
name Insert Plugin List
type append template
action Snipets/Plugin List wip
color blue
```

WIP use a button to generate template insert #not_working
```button
name Insert Plugin List  WIP
type append template
action Snipets/Plugin List wip
templater true
color blue
```