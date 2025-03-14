<%*

const settings_file = "Assets/Pc Settings.md";
const settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;
const task_type_list = settings.pc.task_type
const pc_type_list = settings.pc.type
alert()
let task_type = await tp.system.suggester((item) => item, task_type_list)

let pc_type = await tp.system.suggester((item) => item, pc_type_list)


let folder_base = settings.pc.folder_base

const template_task_type_base = settings.template_base
let template_create_name = `Create Task ${task_type} ${pc_type}`
let template_create = `${template_task_type_base}/${task_type}/${pc_type}/${template_create_name}`

let defaultTitle = `${pc_type} - `
let tags = `#${task_type} #${pc_type}`

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


%>   - [/] [[<% baseFolder %>/<% title %>]]  #task  <% tags %>    ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>