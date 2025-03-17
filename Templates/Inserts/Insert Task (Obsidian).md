 <%*
const manage_note_label = 'As Note'
let entree = await tp.system.prompt("Enter a value (Choice Note Link)", null, true);
let is_note_created  = (await tp.system.suggester([manage_note_label,'Simple Text'],[manage_note_label,'Simple Text'], false, "Choose Type of tile")) === manage_note_label;

let source_text = is_note_created ? `[[${entree}]]` : entree

%>   - [ ] <% source_text %>  #todo #task #obsidian  ➕ <% tp.date.now() %>