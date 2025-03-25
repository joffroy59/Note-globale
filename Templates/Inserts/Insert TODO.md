 <%*
let title
let is_note_created

async function get_title_choice_type() {
    const manage_note_label = 'As Note'
    const choices = [manage_note_label, 'Simple Text']
    title = await tp.system.prompt("Enter a value (Choice Note Link)", null, true)
    is_note_created = (await tp.system.suggester(choices, choices, false, "Choose Type of tile")) === manage_note_label;
    source_text = is_note_created ? `[[${title}]]` : title
}



get_title_choice_type()

%>   - [ ] <% source_text %>  #todo  ➕ <% tp.date.now() %>