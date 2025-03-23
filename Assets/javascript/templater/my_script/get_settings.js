function get_settings(settings_file) {
    let settings_tfile = app.vault.getAbstractFileByPath(settings_file);
    let settings = app.metadataCache.getFileCache(settings_tfile).frontmatter;

    return settings;
}

module.exports = get_settings;
