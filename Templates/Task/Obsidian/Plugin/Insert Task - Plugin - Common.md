<%*
const global_task_type = "plugin"
const settings_file = "Assets/Tasks Settings.md";
const settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;
const settings_root = settings.plugin

const global_task_type_tags = global_task_type.replace(/ /g,"_").toLowerCase()

const task_type_list = settings_root.task_type.list
const generic_type_list = settings_root.type

let task_type = await tp.system.suggester((item) => item, task_type_list, true, "Task Type")

let generic_type = await tp.system.suggester((item) => item, generic_type_list, true, "Generic Type")

let folder_base = `${settings_root.folder_base}/${task_type}/${generic_type}`

const template_task_type_base = settings_root.template.template_base
let template_create_name = settings_root.template.create
let template_create = `${template_task_type_base}/${template_create_name}`

let defaultTitle = `${generic_type} - `

let task_type_tags = settings_root.task_type[task_type.trim()].tags

let tags = `#${global_task_type_tags} ${task_type_tags} #${generic_type.replace(/ /g,"_").toLowerCase()}`
let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

// Create Note
let existing = tp.file.find_tfile(title);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
  new Notice(`${title} exists`)
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(template_create), title, true, folder_base));
  new Notice(`${title} Created.`, "/"+ folder_base + "/")
}
//await tp.file.move("/"+ folder_base + "/" + title, folder_basetp.file.find_tfile(title));

let task_state = " "
if (task_type == "Wip") task_state = "/"


%>   - [<% task_state %>]  [[<% folder_base %>/<% title %>|<% title %>]]  <% tags %>    ➕ <% tp.date.now() %>