


function type_workflolw(){

    src_dest_folder = {
        source: settings["ELN version"],
        destination: settings.folders[type],
    };

    return src_dest_folder
}


function get_src_dest_folder(settings_file, type) {
    let settings_tfile = app.vault.getAbstractFileByPath(settings_file);
    let settings = app.metadataCache.getFileCache(settings_tfile).frontmatter;

    console.log(`version: ${settings.version}`);


    return src_dest_folder;

}

module.exports = get_src_dest_folder;
