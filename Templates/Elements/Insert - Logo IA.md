<%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;
const logos = ia_settings.logo.ia.list
const logo_id = await tp.system.suggester((item) => item, logos);

let logo_img = ia_settings.logo.ia[logo_id].image
-%>![[<% logo_img %>|24]]