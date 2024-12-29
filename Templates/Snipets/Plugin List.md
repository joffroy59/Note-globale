---
tags:
  - template
---
## <% tp.date.now() %>

<%*
const allPlugins = app.plugins.manifests;
let table = "### Plugins Installés\n\n";
table += "| Nom du plugin | Version | Activé |\n";
table += "|---------------|---------|--------|\n";
for (const [id, plugin] of Object.entries(allPlugins)) {
    const isEnabled = app.plugins.enabledPlugins.has(id);
    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled ? "✅" : "❌"} |\n`;
}
tR += table;
%>

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
	    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled_by2 ? "✅" : "❌"} |\n`;
	    group = "";
    }
}
tR += table;
%>

<%*
const plugins = app.plugins.enabledPlugins;
let pluginList = "### Plugins Installés\n\n";
plugins.forEach(plugin => {
    const manifest = app.plugins.manifests[plugin];
    pluginList += `- ${manifest.name} (v${manifest.version})\n`;
});
tR += pluginList;
%>

<%*
pluginList = "### Plugins Installés\n\n";
pluginList += "| Nom du plugin | Version |\n";
pluginList += "|---------------|---------|\n";
plugins.forEach(plugin => {
    const manifest = app.plugins.manifests[plugin];
    pluginList += `| ${manifest.name} | v${manifest.version} |\n`;
});
tR += pluginList;
%>









