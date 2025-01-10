<%*

const fileName = "Daily Note Template";
const sourceFolder = "Templates/Daily Note";
const destinationFolder = "admin/Backup/Templates/Daily Note";

const fs = app.vault.adapter;
const dateSuffix = tp.date.now("YYYY-MM-DD");

const newFileName = fileName + " - " + dateSuffix;

// Rechercher le fichier par son nom dans le dossier source
const file = app.vault.getMarkdownFiles().find(file => file.path.includes(sourceFolder) && file.basename === fileName);

if (file) {
    const currentPath = file.path;
    const newPath = destinationFolder + "/" + newFileName + ".md";

    // Créer les répertoires de destination s'ils n'existent pas
    await fs.mkdir(destinationFolder, { recursive: true });

    // Déplacer le fichier
    //await fs.rename(currentPath, newPath);
    new Notice("Fichier déplacé avec succès vers " + newPath);
} else {
    new Notice("Fichier non trouvé");
}
%>
