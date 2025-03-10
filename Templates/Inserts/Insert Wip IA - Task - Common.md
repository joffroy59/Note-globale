<%*

const ia_settings_file = "Assets/IA Settings.md";
const ia_settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(ia_settings_file)).frontmatter;
const config_wip = ia_settings.wip

const typeList = config_wip.types

let type = await tp.system.suggester((item) => item, typeList)

// get configuration for the type of wip
const config_wip_type = config_wip[type]
let baseFolder = config_wip_type.folder
let template_create = config_wip_type.template.create
let defaultTitle = config_wip_type.title
let ia_tag = config_wip_type.tag
let ia_type_tag = ""
const sub_type_type = config_wip_type.sub_type
let sub_type = ""
if (sub_type_type) {
	sub_type = await tp.system.suggester((item) => item, sub_type_type)
	baseFolder += `/${sub_type}`
	defaultTitle += ` ${sub_type} - `
	ia_type_tag = `${config_wip_type.tag_type}/${sub_type.toLowerCase()}`
}

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);
let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
  new Notice(`${title} exists`)
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(template_create), title, true));
  new Notice(`${title} Created.`)
}
await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));

let tags = ia_tag + " " + ia_type_tag

%>   - [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA <% tags %>    ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>