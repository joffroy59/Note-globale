const fs = require('fs');
const path = require('path');

const settings_file = "Assets/IA Settings.md";
const type = "workflow"

let settings_folder_list

let tp

// Fonction pour copier un fichier
function copierFichier(fichier, source, destination) {
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

async function get_path(list, type, tp){

    let choice = await tp.system.suggester((item) => item, list, true, "Folder " + type)


    return choice
}

async function copy_file_use_settings(tp, fichier) {

    settings_folder_list = tp.user.set_settings(settings_file, type);

    const source = await get_path(settings_folder_list.path_source_list, "Source", tp);
    const destination = await get_path(settings_folder_list.path_destinations_list, "Destination", tp);

    copierFichier(fichier, source, destination);
    let message = `Copy todo ${fichier} from ${source} into ${destination}`;
    console.log(message);
    return destination;
}

module.exports = copy_file_use_settings;
