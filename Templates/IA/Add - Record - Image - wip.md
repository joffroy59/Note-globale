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

````ad-success
title: "Test"

#### Result

<% imagePath(image_local_path, filename) %>

<%*
  let time = await tp.system.prompt("Time", "", true, false);
-%>

time:  **<% time %>**

---

#####.


````


`BUTTON[add-wip-ia-comfyui-workflow-image-result-success-wip-inner, add-image-result-success-wip-inner-col]`
