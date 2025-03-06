async function new_wip_list(tp, project_name=null, show=false) {
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
    folder_projects = eln_settings.folder.projects;
  }
  catch (error) {
    console.log(`folder.projects not found in ELN settings.`);
    return;
  }
  /**********************************************************************************/

  // test if project_name is given
  if (project_name === null) {
    show = true;
    // get list of project
    const project_list = app.plugins.plugins.dataview.api
      .pages('#project AND !"Assets"')
      .sort(p => p.file.name, 'asc')
      .map(p => String([p.file.name]))
      .values;

    project_name = await tp.system.suggester(project_list, project_list, false, 'Select project:')
  }
  var author = '';
  try {
    author = eln_settings.note.author;
  }
  catch (error) {
    console.log(`note.author not found in ELN settings.`);
  }

  button_insert_id = eln_settings.project[project_name].button_id

  // get current date and format it to ISO 8601
  const date = new Date();
  const date_created = date.toISOString().split('T')[0];

  const note_content = `---
ELN version: ${eln_version}
cssclass: wide-page
date created: ${date_created}
author: ${author}
note type: wip-list
tag:
  - " #list/wip"
project:
  name: ${project_name}
---

\`\`\`dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
\`\`\`

\`\`\`dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
\`\`\`

\`BUTTON[${button_insert_id}]\`

> [!Example] TOC
> - [[#All Wip]]

## All Wip

\`\`\`dataview
TABLE WITHOUT ID
  file.link as Wip,
  wip.description as Description,
  date-created
FROM #status/wip AND !"Templates"
WHERE project.name = this.project.name
SORT wip.type, file.link asc
\`\`\`




\`\`\`dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
\`\`\`
`;

  const filename = "Wip - " + project_name;
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

module.exports = new_wip_list;