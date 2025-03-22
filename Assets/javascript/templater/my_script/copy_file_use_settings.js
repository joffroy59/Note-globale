const fs = require('fs');
const path = require('path');

const settings_file = "Assets/IA Settings.md";
const type = "workflow"

let settings_tfile; // Declare the variable
let settings;       // Declare the variable
let version;        // Declare the variable

// let path_source_list;
// let path_destinations_list

let settings_folder_list

function set_settings() {
    settings_tfile = app.vault.getAbstractFileByPath(settings_file);
    settings = app.metadataCache.getFileCache(settings_tfile).frontmatter;

    version = settings["ELN version"];

    // path_source_list = settings.folders.sources;
    // path_destinations_list = settings.folders["workflow"];

    settings_folder_list = {
        path_source_list: settings.folders.sources,
        path_destinations_list: settings.folders[type],
    };

}

// Fonction pour copier un fichier
function copierFichier(fichier, source, destination) {
    console.log(`version: ${version}`);

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

function copy_file_use_settings(fichier) {
    set_settings();

    // source = path_source_list[0]
    // source = path_dest[0]
    const source = settings_folder_list.path_source_list[0]
    const destination = settings_folder_list.path_destinations_list[0]


    copierFichier(fichier, source, destination);
    let message = `Copy todo ${fichier} from ${source} into ${destination}`;
    console.log(message);
    return message;
}

module.exports = copy_file_use_settings;
