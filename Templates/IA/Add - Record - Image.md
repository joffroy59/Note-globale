<%*
function imagePath(imagePath, title){
	return `[${title}](file:///${imagePath.replaceAll("\\","/")})`;
}

const type = "image"

let filename = await tp.system.prompt(`Image (with extension from Downloads)`);

let destination_path = tp.user.copy_file_use_settings(tp, filename, type)

image_local_path = destination_path + filename
console.log(image_local_path)
-%>

<% imagePath(image_local_path, filename) %>
TO FINISH 2ddddddzzz
