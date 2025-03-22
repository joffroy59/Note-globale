const fs = require('fs');
const path = require('path');

const settings_file = "Assets/IA Settings.md";

settings_tfile;
settings;
version;

function setSettings(){
    settings_tfile = app.vault.getAbstractFileByPath(settings_file);
    settings = app.metadataCache.getFileCache(settings_tfile).frontmatter;

    version = settings["ELN version"];
}

// Fonction pour copier un fichier
function copierFichier(fichier, source, destination) {

    setSettings();
    console.log(`version: ${version}`)


    const cheminSource = path.resolve(source, fichier);
    const cheminDestination = path.resolve(destination, fichier);

    fs.copyFile(cheminSource, cheminDestination, (err) => {
        if (err) {
            console.error('Erreur lors de la copie :', err);
        } else {
            console.log(`Le fichier '${fichier}' a été copié dans '${destination}'.`);
        }
    });
}

// Exemple d'utilisation
// const fichier = 'mon_fichier.md';
// const source = '/chemin/de/source';
// const destination = '/chemin/de/destination';

//copierFichier(fichier, source, destination);


function copy_file_use_settings(fichier, source, destination) {
    copierFichier(fichier, source, destination)
    let message = `Copy todo ${fichier} from ${source} into ${destination}`
    console.log(message)
    return message;
}

module.exports = copy_file_use_settings;
