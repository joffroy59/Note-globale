<%*
let filename = `arf.bmp`
let type = "image"


let destination_path = await tp.user.copy_file_use_settings(tp, filename, type)

image_local_path = destination_path + filename

-%>

<% image_local_path %>
TO FINISH
