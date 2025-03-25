<%*
function imagePath(imagePath, title){
	return `![${title}|600](file:///${imagePath.replaceAll("\\","/")})`;
}

const type = "image"

let filename = await tp.system.prompt(`Image (with extension from Downloads)`);

let destination_path = await tp.user.copy_file_use_settings(tp, filename, type)

image_local_path = destination_path + filename
console.log(image_local_path)
-%>
<%*
  let time = await tp.system.prompt("Time", "", true, false);
-%>

> [!multi-column]
>
>> [!blank]
>> <% imagePath(image_local_path, filename) %>
>> time:  **<% time %>**
>
>> [!blank]
>> <% imagePath(image_local_path, filename) %>
>> time:  **<% time %>**
>
>> [!blank]
>> <% imagePath(image_local_path, filename) %>
>> time:  **<% time %>**

---
