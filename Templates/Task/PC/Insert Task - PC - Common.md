<%*

const settings_file = "Assets/Pc Settings.md";
const settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;

const task_type_list = settings.pc.task_type.list
const pc_type_list = settings.pc.type

let task_type = await tp.system.suggester((item) => item, task_type_list, true, "Task Type")

let pc_type = await tp.system.suggester((item) => item, pc_type_list, true, "Pc Type")

let folder_base = `${settings.pc.folder_base}/${pc_type}/${task_type}`

const template_task_type_base = settings.pc.template.template_base
let template_create_name = settings.pc.template.create
let template_create = `${template_task_type_base}/${template_create_name}`

let defaultTitle = `${pc_type} - `

let task_type_tags = settings.pc.task_type[task_type.trim()].tags

let tags = `${task_type_tags} #${pc_type.replace(/ /g,"_").toLowerCase()}`

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

let task_state = ""
if (task_type == "Wip") task_state = "/"

%>   - [<% task_state %>]  [[<% folder_base %>/<% title %>]]  #task  <% tags %>    ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>