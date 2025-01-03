## ✨Liste des plugins installés (ALL)

<%*
const allPlugins_by2 = app.plugins.manifests;
table = "| Nom du plugin | Version | Activé | | Nom du plugin | Version | Activé |\n";
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
