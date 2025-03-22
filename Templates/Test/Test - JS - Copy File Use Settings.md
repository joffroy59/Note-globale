<%*
let workflow_name = await tp.system.prompt("Workflow sans extension .json", "", true, false);
let workflow_filename = `${workflow_name}.json`

tp.user.copy_file_use_settings(tp, workflow_filename)
%>