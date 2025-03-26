<%*
function imagePath(imagePath, title){
	return `![${title}|300](file:///${imagePath.replaceAll("\\","/")})`;
}

const type = "image"

const col_count_list = [1, 2, 3, 4, 5, 6]
let column_count = await tp.system.suggester((item) => item, col_count_list, true, "Column number: ")

let filenames = []
-%>

> [!multi-column]
>
<%*
let filename
let destination_path
let new_time
for (let i = 0; i < column_count; i++) {
  filename = await tp.system.prompt(`Image (with extension from Downloads)`);
  destination_path = await tp.user.copy_file_use_settings(tp, filename, type)
  image_local_path = destination_path + filename
  console.log(image_local_path)
  time = await tp.system.prompt("Time", "", true, false);
  if (time) new_time = time
 -%>>> [!blank]
>> <% imagePath(image_local_path, filename) %>
>> time:  **<% new_time %>**
>
<%* } -%>


---
