---
tags:
  - plugins
---
## ✨Liste des plugins installés (ALL)
### Pour rafraîchir la liste :
Utiliser  le  insert 'Templater' pour générer la liste des plugin ici : 
`templater : Open Insert Template  Modal`   > Snippets >  [[Plugin List All]]

et supprimer l'existant

<%*
const allPlugins_by2 = app.plugins.manifests;
table = `### Total Plugins: ${Object.keys(allPlugins_by2).length} \n`;
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

<% tp.file.include("[[Plugin List All with Id]]") %>

[[Plugins Installés (Dataview inline)]]

