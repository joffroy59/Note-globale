async function new_wip_ia_list(tp, project_name=null, show=false) {
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

  // get current date and format it to ISO 8601
  const date = new Date();
  const date_created = date.toISOString().split('T')[0];

  const note_content = `---
ELN version: ${eln_version}
cssclass: wide-page
date created: ${date_created}
author: ${author}
note type: wip-ia-list
tag:
  - " #list/wip/ia"
project:
  name: ${project_name}
---

\`\`\`dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
\`\`\`

\`\`\`dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
\`\`\`

\`BUTTON[insert-daily - task - wip]\`

> [!Example] TOC
> - [[#Compounds]]
> - [[#Electrodes]]
> - [[#Electrochemical Cells / Batteries]]
> - [[#All Samples]]

## Compounds

\`\`\`dataview
TABLE WITHOUT ID
  file.link as Sample,
  sample["chemical formula"] as "Formula",
  sample.educts.name as "Educts",
  sample.educts.mass as "Mass",
  date-created
FROM #sample
WHERE project.name = this.project.name AND sample.type = "compound"
SORT sample.type, file.link asc
\`\`\`

## Electrodes

\`\`\`dataview
TABLE WITHOUT ID
  file.link as Sample,
  sample["active material"].name as "Active material",
  sample["active material"].mass as "AM mass",
  sample.binder.mass as "Binder mass",
  sample["conductive additive"].mass as "Cond. additive mass",
  date-created
FROM #sample
WHERE project.name = this.project.name AND sample.type = "electrode"
SORT electrode["active-material"], sample.type, file.link asc
\`\`\`

## Electrochemical Cells / Batteries

\`\`\`dataview
TABLE WITHOUT ID
  file.link as Sample,
  sample["working electrode"]["name"] as "Working",
  sample["counter electrode"]["name"] as "Counter",
  sample["reference electrode"]["name"] as "Reference",
  sample["electrolyte"]["name"] as "Electrolyte",
  date-created
FROM #sample
WHERE project.name = this.project.name AND sample.type = "electrochemical cell"
SORT sample.type, file.link asc
\`\`\`

## All Wip IA

\`\`\`dataview
TABLE WITHOUT ID
  file.link as Sample,
  wip.type as Type,
  wip.description as Description,
  date-created
FROM #status/wip/IA
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

module.exports = new_wip_ia_list;