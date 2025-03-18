<%*

const MAX_HEADING_LENGTH = 75;


let text = app.workspace.activeEditor.getSelection().split("\n")[0]
alert(text)

const header_level_list = ["###","##","####","#####"]
let header_level = await tp.system.suggester((item) => item, header_level_list);


-%>
