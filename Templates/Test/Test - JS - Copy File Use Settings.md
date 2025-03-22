<%*

let workflow_name = "workflow-flux-multi-area-prompting-iEV0GPNdgjVp68QRYqEO-jaguar_pesky_18-openart.ai"
//await tp.system.prompt("Workflow sans extension .json", "", true, false);

let workflow_filename = `${workflow_name}.json`
const src_folder = "C:\\Test\\Download"
const dest_folder_path = "C:\\Test\\Target\\"


tp.user.copy_file_use_settings(workflow_filename, src_folder, dest_folder_path)

%>