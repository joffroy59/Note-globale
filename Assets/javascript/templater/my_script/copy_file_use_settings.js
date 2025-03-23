const fs = require('fs');
const path = require('path');

const settings_file = "Assets/IA Settings.md";

let config_folder_list

// Fonction pour copier un fichier
function copierFichier(fichier, source, destination) {
    const cheminSource = path.resolve(source, fichier);
    const cheminDestination = path.resolve(destination, fichier);
    try {
        fs.copyFile(cheminSource, cheminDestination, null)
        msg = `Le fichier '${fichier}' a été copié dans '${destination}'.`
        console.log(msg);
    } catch (err) {
        msg = 'Erreur lors de la copie :'
        console.error(msg, err);
        throw new Error(msg, err);
    };
}

async function get_path(list, type, tp){
    console.log(list)
    if (list.length > 1 ){
        result_path = await tp.system.suggester((item) => item, list, true, "Folder " + type)
    } else {
        result_path = list[0]
    }
    return result_path
}

async function copy_file_use_settings(tp, fichier, type = "default") {

    config_folder_list = tp.user.get_folder_by_type(settings_file, type);
    const source = await get_path(config_folder_list.path_source_list, "Source", tp);
    const destination = await get_path(config_folder_list.path_destinations_list, "Destination", tp);

    copierFichier(fichier, source, destination);
    let message = `Copy ${fichier} from ${source} into ${destination}`;
    console.log(message);
    return destination;
}

module.exports = copy_file_use_settings;
