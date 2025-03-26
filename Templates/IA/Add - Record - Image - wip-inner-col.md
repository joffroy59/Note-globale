<%*
function imagePath(imagePath, title){
	return `![${title}|300](file:///${imagePath.replaceAll("\\","/")})`;
}


function parse_time(time) {
  let formatted_time = time
  if (time.includes("/")){
    time_s = parseFloat(time.split("/")[0])
    console.log(time_s)
    div = Number(time.split("/")[1])
    console.log(div)
    time_one = (time_s / div).toFixed(2)
    formatted_time = `${time} (${time_one})`
  }
  return formatted_time
}

const type = "image"

const col_count_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
  time = parse_time(time)
  if (time) new_time = time
 -%>>> [!blank]
>> <% imagePath(image_local_path, filename) %>
>> time:  **<% new_time %>**
>
<%* } -%>


---
