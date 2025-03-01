<%*
const tableStart = "Date de Recharge";
const tableEnd = "| **Ajouter une nouvelle recharge ici :";

let content = tp.file.content;
let startIndex = content.indexOf(tableStart);
let endIndex = content.indexOf(tableEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  let newRow = `| ${tp.date.now("YYYY-MM-DD HH:mm")} | ❓ | ❓ | 🔌🔍🛑 | ❓ | Ajout automatique |\n`;
  content = content.slice(0, endIndex) + newRow + content.slice(endIndex);
  var file = app.workspace.getActiveFile()

  app.vault.modify(file, content)
}
-%>