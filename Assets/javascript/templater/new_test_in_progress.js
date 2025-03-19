async function new_test_in_progress(tp, project_name = null, show = true) {
  var path = require('path');

  /**********************************************************************************/
  // get META DATA of ELN SETTINGS
  const eln_settings_file = "Assets/ELN Settings.md";
  const eln_settings_tfile = app.vault.getAbstractFileByPath(eln_settings_file);
  const eln_settings = app.metadataCache.getFileCache(eln_settings_tfile).frontmatter;

  const eln_version = eln_settings["ELN version"];
  /**********************************************************************************/
  // initialize OUTPUT FOLDER(S)
  var folder_projects;
  try {
    folder_projects = "Wip/Test"
  }
  catch (error) {
    console.log(`folder.projects not found in ELN settings.`);
    return;
  }
  /**********************************************************************************/
  // test if project_name is given
  if (project_name === null) {
    project_name = "test"
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

  const note_content = `---
ELN version: ${eln_version}
cssclass: wide-page
date created: ${date_created}
author: ${author}
note type: wip-list
tags:
  - "status/wip"
project:
  name: ${project_name}
---

#todo


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

}

module.exports = new_test_in_progress;