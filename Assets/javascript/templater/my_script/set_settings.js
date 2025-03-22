function set_settings(settings_file, type) {
    let settings_tfile = app.vault.getAbstractFileByPath(settings_file);
    let settings = app.metadataCache.getFileCache(settings_tfile).frontmatter;

    settings = {
        version: settings["ELN version"],
        path_source_list: settings.folders.sources,
        path_destinations_list: settings.folders[type],
    };
    console.log(`version: ${settings.version}`);


    return settings;

}

module.exports = set_settings;
