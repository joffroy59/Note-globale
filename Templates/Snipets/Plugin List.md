## {{today}}

<%*
const plugins = app.plugins.enabledPlugins;
let pluginList = "## Plugins Installés\n\n";
plugins.forEach(plugin => {
    const manifest = app.plugins.manifests[plugin];
    pluginList += `- ${manifest.name} (v${manifest.version})\n`;
});
tR += pluginList;
%>

<%*
pluginList = "## Plugins Installés\n\n";
pluginList += "| Nom du plugin | Version |\n";
pluginList += "|---------------|---------|\n";
plugins.forEach(plugin => {
    const manifest = app.plugins.manifests[plugin];
    pluginList += `| ${manifest.name} | v${manifest.version} |\n`;
});
tR += pluginList;
%>

<%*
const allPlugins = app.plugins.manifests;
let table = "## Plugins Installés\n\n";
table += "| Nom du plugin | Version | Activé |\n";
table += "|---------------|---------|--------|\n";
for (const [id, plugin] of Object.entries(allPlugins)) {
    const isEnabled = app.plugins.enabledPlugins.has(id);
    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled ? "✅" : "❌"} |\n`;
}
tR += table;
%>







