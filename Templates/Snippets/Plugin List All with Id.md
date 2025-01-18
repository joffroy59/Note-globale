---
tags:
  - plugins
---
### Plugins Installés (with Id)
<%*
const allPlugins = app.plugins.manifests;
let table = "| Nom du plugin | Version | Activé | Id |\n";
table += "|---------------|---------|--------|--|\n";
for (const [id, plugin] of Object.entries(allPlugins)) {
    const isEnabled = app.plugins.enabledPlugins.has(id);
    table += `| ${plugin.name} | ${plugin.version} | ${isEnabled ? "✅" : "❌"} | ${id} |\n`;
}
tR += table;
%>

