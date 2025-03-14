 <%*
let baseFolder = "ToView"
const templateName = "Templates/Inserts/Create Task ToView"

let title = await tp.system.prompt("Title (Choice Note Link)", null, true, false);

let is_note_created  = (await tp.system.suggester(['Create Note','Simple Text'],['Create Note','Simple Text'], false, "Choose Type of tile")) === 'Create Note';

let source_text = title
if (is_note_created){
	source_text = `[[${title}]]`
}
let existing = tp.file.find_tfile(title);

if (is_note_created){
	source_text = `[[${title}]]`
	let createdFileDisplay;
	if (existing) {
	  createdFileDisplay = existing.basename;
	} else {
	  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(templateName), title, true));
	}
	await tp.file.move("/"+ baseFolder + "/" + title, tp.file.find_tfile(title));	
}

%>   - [ ] <% source_text %>  #task  #toview  ➕ <% tp.date.now() %> 
