<%*

  let title
  let is_note_created
  let source_text


async function get_title_choice_type() {
  const manage_note_label = 'As Note'
  const choices = [manage_note_label, 'Simple Text']
  title = await tp.system.prompt("Enter a value (Choice Note Link)", null, true)
  is_note_created = (await tp.system.suggester(choices, choices, false, "Choose Type of tile")) === manage_note_label;
  source_text = is_note_created ? `[[${title}]]` : title
}

const settings_file = "Assets/Tasks Settings.md";
const settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;

const global_task_type_list = settings.golbal_task_type
let global_task_type = await tp.system.suggester((item) => item, global_task_type_list, true, "Global Task Type")

const settings_root = settings[global_task_type]

const global_task_type_tags = global_task_type.replace(/ /g,"_").toLowerCase()

const task_type_list = settings_root.task_type.list
const generic_type_list = settings_root.type

let task_type = await tp.system.suggester((item) => item, task_type_list, true, "Task Type")

let generic_type = await tp.system.suggester((item) => item, generic_type_list, true, "Generic Type")

let folder_base = `${settings_root.folder_base}/${task_type}/${generic_type}`
console.log(folder_base)
const template_task_type_base = settings_root.template.template_base
let template_create_name = settings_root.template.create
console.log(template_create_name)
let template_create = `${template_task_type_base}/${template_create_name}`

let defaultTitle = `${global_task_type} - ${generic_type} - `
console.log(settings_root)
let task_type_tags = settings_root.task_type[task_type.trim()].tags

let tags = `#${global_task_type_tags} ${task_type_tags} #${generic_type.replace(/ /g,"_").toLowerCase()}`

get_title_choice_type()

console.log(template_create)

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

source_text = is_note_created ? `[[${folder_base}/${title}|${title}]]` : title


  %> -[<% task_state %>] <% source_text %>  <% tags %>    ➕ <% tp.date.now() %>