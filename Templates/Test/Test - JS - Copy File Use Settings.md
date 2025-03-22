<%*

//let workflow_name = "workflow-flux-multi-area-prompting-iEV0GPNdgjVp68QRYqEO-jaguar_pesky_18-openart.ai"
let workflow_name = await tp.system.prompt("Workflow sans extension .json", "a", true, false);

let workflow_filename = `${workflow_name}.json`

tp.user.copy_file_use_settings(tp, workflow_filename)

%>