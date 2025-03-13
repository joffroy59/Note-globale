
async function insert_image(tp, return_type, out_folder) {
  const path = require('path');
  const fs = require('fs');

  /**********************************************************************************/
  // get META DATA of ELN SETTINGS
  const eln_settings_file = "Assets/ELN Settings.md";
  const eln_settings_tfile = app.vault.getAbstractFileByPath(eln_settings_file);
  const eln_settings = app.metadataCache.getFileCache(eln_settings_tfile).frontmatter;

  const eln_version = eln_settings["ELN version"];

  /**********************************************************************************/
  // initialize OUTPUT FOLDER(S)
  const folder_analysis = get_property(eln_settings, 'folder', 'analyses');
  const folder_local_data = get_property(eln_settings, 'folder', 'local data');
  const folder_remote_data = get_property(eln_settings, 'folder', 'remote data');
  /**********************************************************************************/
  const author = get_property(eln_settings, 'note', 'author');
  // get current date and format it to ISO 8601
  const date = new Date();
  const date_created = date.toISOString().split('T')[0];

  const tags_yaml = '\n  - " #analysis/' +
    sample_name.replace(/[\s]/g, '_') + '/' + analysis_method.replace(/[\s]/g, '_') + '"\n';




  let image = await tp.system.prompt("Image:");
  const regex = /^[a-zA-Z]/;
  let is_internal = regex.test(image)

  let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");

  let note_content = ""

  if (isVideo) {
    note_content += `
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>';
`
  } else if(image) {
    if(is_internal) {
      note_content += `  ![[${image} %>|400]]`
    } else {
      note_content += `  ![|400](${image})`
    }
  }

  /**********************************************************************************/
  /*                       MOVE AND RENAME TEMPLATE FILE                            */
  /**********************************************************************************/
  var analysis_name = sample_name + " - " + analysis_method.replace(/[\s]/g, '_');
  // const analysis_project_folder = path.join(folder_analysis, sample_meta.project.name);
  const analysis_project_folder = folder_analysis + '/' + sample_meta.project.name;
  if (!app.vault.getAbstractFileByPath(analysis_project_folder)) {
    console.log(`${analysis_project_folder} does not exist.`);
    console.log(`Creating folder ...`);
    await app.vault.createFolder(analysis_project_folder)
  }
  const analysis_sample_folder = analysis_project_folder + '/' + sample_name;

  if (app.vault.getAbstractFileByPath(analysis_sample_folder)) {
    const vault_folder = app.vault.adapter.basePath;

    // determine index for new analysis
    var index;
    // get list of folders in analysis folder
    // const analysis_folder_list = fs.readdirSync(path.join(vault_folder, analysis_project_folder));
    const analysis_folder_list = fs.readdirSync(vault_folder + '/' + analysis_sample_folder);
    // filter list for folders that start with analysis_name
    if (analysis_folder_list.length == 0) {
      index = 1;
    } else {
      const analysis_folder_list_filtered = analysis_folder_list
        .filter(folder => folder.startsWith(analysis_method.replace(/[\s]/g, '_')))
        .sort();
      if (analysis_folder_list_filtered.length == 0) {
        index = 1;
      }
      else {
        // get last folder in list
        const last_folder = analysis_folder_list_filtered[analysis_folder_list_filtered.length - 1]
        // get index from last folder
        index = parseInt(last_folder.split('_').pop()) + 1;
      }
    }
  } else {
    console.log(`${analysis_sample_folder} does not exist.`);
    console.log(`Creating folder ...`);
    await app.vault.createFolder(analysis_sample_folder)
    index = 1;
  }
  // append index to analysis_name with leading zeros
  analysis_name = analysis_name + "_" + index.toString().padStart(2, '0')

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

  const filename = analysis_name;
  // const folder = path.join(analysis_project_folder, analysis_name);
  const folder = analysis_sample_folder + '/' +
    analysis_method.replace(/[\s]/g, '_') + '_' + index.toString().padStart(2, '0');

  else if (return_type === "create") {
    console.log(`Creating new analysis note in folder ${folder} with name ${filename}`);
    const tfolder = app.vault.getAbstractFileByPath(folder);
    await tp.file.create_new(note_content, filename, true, tfolder);
    return '';
  }
}

module.exports = insert_image();