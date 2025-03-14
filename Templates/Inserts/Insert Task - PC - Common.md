<%*

const settings_file = "Assets/Pc Settings.md";
const settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;
alert(settings)
const task_type_list = settings.pc.task_type.list
const pc_type_list = settings.pc.type

let task_type = await tp.system.suggester((item) => item, task_type_list)

let pc_type = await tp.system.suggester((item) => item, pc_type_list)


let folder_base = settings.pc.folder_base

const template_task_type_base = settings.pc.task_type.template_base
let template_create_name = `Create Task ${task_type} ${pc_type}`
let template_create = `${template_task_type_base}/${task_type}/${pc_type}/${template_create_name}`

let defaultTitle = `${pc_type} - `

let task_type_tags = settings.pc.task_type[task_type.trim()].tags
alert(task_type)
let tags = `${task_type_tags} #${pc_type}`

let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

# Create Note
console.log(template_create)


%>   - [/] [[<% folder_base %>/<% title %>]]  #task  <% tags %>    ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>