const fs = require('fs');
const path = require('path');

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

function copy_file(fichier, source, destination) {
    copierFichier(fichier, source, destination)
    let message = `Copy ${fichier} from ${source} into ${destination}`
    console.log(message)
    return destination;
}

module.exports = copy_file;
