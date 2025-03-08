 <%*
const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;
const config_wip = ia_settings.wip

const typeList = config_wip.types
const template_name_base = config_wip.template.insert

let type = await tp.system.suggester((item) => item, typeList)

tR+= await tp.file.include(`[[${template_name_base} ${type}]]`);
%>