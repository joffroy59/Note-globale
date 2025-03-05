async function new_project(tp, return_type, out_folder) {
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

  // Ask user for project abbreviation
  const project_abbreviation = await tp.system.prompt("Enter project abbreviation:", "");

  // Ask user for project Type
  const project_type_list = eln_settings.project.type
  const project_type = await tp.system.suggester(project_type_list, project_type_list, false, "Choose Type:", "")
  if (project_type == "Autre ...") {
    project_type = await tp.system.prompt("Enter Type:", "")
  }

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
   abbreviation: ${project_abbreviation}
   type: ${project_type}
   status: active
   start: ${date_created}
   end:
   duration:
   title: ~~
   subproject: ~~
   acronym: ~~
   reports:
      -
         type: wip report
         due date: YYYY-MM-dd
         link: "[[Result-${project_name}-YYYY-MM]]"
      -
         type: wip report
         due date: YYYY-MM-dd
         link: "[[Result-${project_name}-YYYY-MM]]"
      -
         type: milestone report
         due date: YYYY-MM-dd
         link: "[[Milestone-Result-${project_name}-YYYY-MM]]"
      -
         type: final report
         due date: YYYY-MM-dd
         link: "[[Final Result-${project_name}-YYYY-MM]]"
---

\`= "<div class='title' style='color:#edf'>" + this.file.name + "</div>"\`

# Experiments

- ### [[Wip - ${project_name}|🚧Wip]]
  \`\`\`dataview
  LIST
  FROM #status/wip AND !"Assets" AND !"Templates"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  \`\`\`

- ### [[Analyses]]
  \`\`\`dataview
  LIST
  FROM #analysis  AND !"Assets"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  \`\`\`

- ### [[ Processes]]
  \`\`\`dataview
  LIST
  FROM #process  AND !"Assets"
  SORT file.mtime.ts DESC
  LIMIT 6
  \`\`\`

- ### Project Meetings
  \`\`\`dataview
  LIST
  FROM #meeting AND !"Assets"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  \`\`\`

- ### Other Meetings
	- [[Exemple (<%tp.file.creation_date("YYYY MMMM")%>, Lieu)]]


# Important Dates

- ### General
	**Project start:** \`=this.project.start\`
	**Project end:** \`=this.project.end\`

- ### Reports
  \`\`\`dataviewjs
  var querry = Object.entries(dv.current().file.frontmatter.project.reports)
        .map(q => '- [ ] ' + q[1].type + '&nbsp;&nbsp;' + ' [due::' + q[1]['due date'] + ']')
  dv.paragraph(querry)
  \`\`\`

- ### Upcoming Meetings
	- <date> Exemple Meeting

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
  await tp.user.new_wip_list(tp, project_name);

  if (return_type === "insert") {
    // move and rename file
    const new_file_path = folder + '/' + filename + ".md";
    await app.vault.rename(active_file, new_file_path);
    return note_content;
  }
  else if (return_type === "create") {
    console.log(`Creating new project note in folder ${folder} with name ${filename}`);
    const tfolder = app.vault.getAbstractFileByPath(folder);
    await tp.file.create_new(note_content, filename, true, tfolder);
    // function needs to retutn an empty string, since it is called by a button
    // using the insert template shorcut templater action
    return '';
  }
}

module.exports = new_project;