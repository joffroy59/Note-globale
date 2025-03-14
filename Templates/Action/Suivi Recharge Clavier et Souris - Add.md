
<%*
const type_list = ["Clavier", "Souris"]
const type = await tp.system.suggester((item) => item, type_list);

const event = await tp.system.suggester((item) => item, ["🔌", "🔍", "🛑"]);

const batterie_state = await tp.system.suggester((item) => item, ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);

var tableStart = `Recharge ${type} 🔌`;
const tableEnd = "| **Ajouter une nouvelle recharge ici :";

let content = tp.file.content;
let startIndex = content.indexOf(tableStart);
let endIndex = content.indexOf(tableEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
	let newRow = `| ${tp.date.now("YYYY-MM-DD")} | ${tp.date.now("HH:mm")} | | ${batterie_state} | ${event} | ❓ | Ajout automatique |\n`;
	content = content.slice(0, endIndex) + newRow + content.slice(endIndex);
	var file = app.workspace.getActiveFile()

	app.vault.modify(file, content)
	new Notice("Added Line")
} else {
		console.log("Error in insert")
		new Notice(error.message)
}
-%>

