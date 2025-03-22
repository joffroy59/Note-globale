function getTip(){
  let content =""

  return content
}

async function create_wip_ia_generic(tp, project_name = null, show = false) {
  var path = require('path');

  /**********************************************************************************/
  // get META DATA of SETTINGS
  const eln_settings_file = "Assets/IA Wip Settings.md";
  const eln_settings_tfile = app.vault.getAbstractFileByPath(eln_settings_file);
  const eln_settings = app.metadataCache.getFileCache(eln_settings_tfile).frontmatter;

  const eln_version = eln_settings["ELN version"];
  /**********************************************************************************/
  // initialize OUTPUT FOLDER(S)
  var folder_projects;
  try {
    folder_projects = "Wip/IA"
  }
  catch (error) {
    console.log(`folder.projects not found in ELN settings.`);
    return;
  }
  /**********************************************************************************/
  // test if project_name is given
  if (project_name === null) {
    project_name = "IA"
  }
  var author = '';
  try {
    author = eln_settings.note.author;
  }
  catch (error) {
    console.log(`note.author not found in ELN settings.`);
  }

  // get current date and format it to ISO 8601
  const date = new Date();
  const date_created = date.toISOString().split('T')[0];

  let filename = "Test - " + project_name;

  let workflowDirList = [
    "D:\\IA\\ComfyUI workflow\\Download",
    "D:\\IA\\ComfyUI workflow\\totest",
    "D:\\IA\\ComfyUI workflow",
    "D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto",
    "D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]


  worflowBaseFolder = workflowDirList[0]
  let defaultWorkflowName = "workflow_test"

  let title = tp.file.title
  let defaultTitle = "Untitled"
  if (title.startsWith(defaultTitle)) {
    title = await tp.system.prompt("Title :");
    if (!title) title = defaultTitle
    await tp.file.rename(`${title}`);
  }

  let worflow = await tp.system.prompt("Worflow file name  (no extension)");

  if (worflow) {
    worflowBaseFolder = await tp.system.suggester((item) => item, workflowDirList, true, "Worflow file path");
  } else {
    worflow = defaultWorkflowName
  }

  workflowFolder = "file:///" + worflowBaseFolder.replace(/ /g, '%20').replace(/\\/g, '%5C') + "%5C"

  let url = await tp.system.prompt("url");

  let image = await tp.system.prompt("Image");
  let generationData = await tp.system.prompt("Generation Data", null, false, true);
  let note = await tp.system.prompt("Note", null, true, true);

  let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
  let hasTip = (url || image)


  const note_content_header = `---
ELN version: ${eln_version}
ELN info:
  template: <% tp.config.template_file.name %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0
cssclass: wide-page
date created: ${date_created}
author: ${author}
note type: wip-list
wip:
  type: IA
  description: Travaux sur IA
project:
  name: ${project_name}
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
stability_project_path: D:\dev-data\IA\Stability Matrix Project
tags:
  - status/wip
  - IA
---

`;


  let note_body = `
  #todo
  `;

  note_body += getTip() + `
  `;


  const note_content = `${note_content_header}
---

${note_body}


\`\`\`dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
\`\`\`
`;



  // const folder = path.join(folder_projects, project_name);
  const folder = folder_projects + '/' + project_name;
  if (!app.vault.getAbstractFileByPath(folder)) {
    console.log(`${folder} does not exist.`);
    console.log(`Creating folder ...`);
    await app.vault.createFolder(folder)
  } else {
    console.log(`${folder} exists.`);
  }
  console.log(`Creating new Wip note in folder ${folder} with name ${filename}`);
  const tfolder = app.vault.getAbstractFileByPath(folder);

  await tp.file.create_new(note_content, filename, show, tfolder);

  return ""
}

module.exports = create_wip_ia_generic;