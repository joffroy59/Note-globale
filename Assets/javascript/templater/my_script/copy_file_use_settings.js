const fs = require('fs');
const path = require('path');

const settings_file = "Assets/IA Settings.md";

let config_folder_list

// Fonction pour copier un fichier (asynchrone)
async function copierFichier(fichier, source, destination) {
    const cheminSource = path.resolve(source, fichier);
    const cheminDestination = path.resolve(destination, fichier);

    return new Promise((resolve, reject) => {
        fs.copyFile(cheminSource, cheminDestination, (err) => {
            if (err) {
                reject(new Error(`Erreur lors de la copie : ${err.message}`));
            } else {
                console.log(`Le fichier '${fichier}' a été copié dans '${destination}'.`);
                resolve();
            }
        });
    });
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
    try {
        config_folder_list = tp.user.get_folder_by_type(settings_file, type);
        const source = await get_path(config_folder_list.path_source_list, "Source", tp);
        const destination = await get_path(config_folder_list.path_destinations_list, "Destination", tp);

        await copierFichier(fichier, source, destination);
        let message = `Copy ${fichier} from ${source} into ${destination}`;
        console.log(message);
        return destination;
    } catch (error) {
        //console.error('Erreur dans copy_file_use_settings :', error);
        throw error;
    }
}

module.exports = copy_file_use_settings;
