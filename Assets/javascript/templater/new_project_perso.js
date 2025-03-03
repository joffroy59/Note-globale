async function new_project_perso(tp, return_type, out_folder) {
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
    folder_projects = eln_settings.folder['projects perso'];
  }
  catch (error) {
    console.log(`folder.projects perso not found in ELN settings.`);
    return;
  }
  /**********************************************************************************/
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

  const project_name = await tp.system.prompt("Enter project name:", "");

const note_content = `---
ELN version: ${eln_version}
cssclass: dashboard, wide-page
banner: "[[obsidian-eln-banner.png]]"
banner_y: 0.5
author: ${author}
date created: ${tp.date.now()}
note type: project
tag:
  - " #project/${project_name.replace(' ', '_')} "
project:
   name: ${project_name}
   type: perso
   status: active
   start: ${tp.date.now()}
   end:
   duration:
   title: ~~
   subproject: ~~
---

\`= "<div class='title' style='color:#edf'>" + this.file.name + "</div>"\`

# TODO

\`\`\`dataviewjs
    await dv.view("/Assets/javascript/dataview/views/note_footer", {});
\`\`\`
`;

  const active_file = app.workspace.getActiveFile();
  // if return_type is not defined
  if (return_type === undefined) {
    // get content of active file
    const active_file_content = await app.vault.read(active_file);
    // check if active file is empty
    if (active_file_content === '') {
      return_type = "insert";
    }
    else {
      return_type = "create";
    }
  }

  const filename = project_name;
  // const folder = path.join(folder_projects, project_name);
  const folder = folder_projects + '/' + project_name;

  if (!app.vault.getAbstractFileByPath(folder)) {
      console.log(`${folder} does not exist.`);
      console.log(`Creating folder ...`);
      await app.vault.createFolder(folder)
  } else {
      console.log(`${folder} exists.`);
  }
  if (return_type === "insert") {
    // move and rename file
    // const new_file_path = path.join(folder, filename + ".md");
    const new_file_path = folder + '/' + filename + ".md";
    await app.vault.rename(active_file, new_file_path);
    return note_content;
  }
  else if (return_type === "create") {
    console.log(`Creating new sample note in folder ${folder} with name ${filename}`);
    const tfolder = app.vault.getAbstractFileByPath(folder);
    await tp.file.create_new(note_content, filename, true, tfolder);
    // function needs to retutn an empty string, since it is called by a button
    // using the insert template shorcut templater action
    return '';
  }
}

module.exports = new_project_perso;