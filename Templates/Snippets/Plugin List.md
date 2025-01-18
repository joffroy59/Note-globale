---
tags:
  - plugins
---
## <% tp.date.now() %>

<%*
const allPlugins_by2 = app.plugins.manifests;
table = "### Plugins Installés\n\n";
table += "| Nom du plugin | Version | Activé | | Nom du plugin | Version | Activé |\n";
table += "|---------------|---------|--------|-|---------------|---------|--------|\n";
group = ""
for (const [id, plugin] of Object.entries(allPlugins_by2)) {
    const isEnabled_by2 = app.plugins.enabledPlugins.has(id);
    if (group == ""){
	    group = `| ${plugin.name} | ${plugin.version} | ${isEnabled_by2 ? "✅" : "❌"} |`;
    } else {
	    table += group;
	    group = "";
	    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled_by2 ? "✅" : "❌"} |\n`;
    }
}
tR += table;
%>

<% tp.file.include("[[Plugin List All with Id]]") %>

### Autre affichage 

#### Plugins Installés
<%*
const plugins = app.plugins.enabledPlugins;
let pluginList = "";
plugins.forEach(plugin => {
    const manifest = app.plugins.manifests[plugin];
    pluginList += `- ${manifest.name} (v${manifest.version})\n`;
});
tR += pluginList;
%>
#### Plugins Installés
<%*
pluginList = "";
pluginList += "| Nom du plugin | Version |\n";
pluginList += "|---------------|---------|\n";
plugins.forEach(plugin => {
    const manifest = app.plugins.manifests[plugin];
    pluginList += `| ${manifest.name} | v${manifest.version} |\n`;
});
tR += pluginList;
%>









