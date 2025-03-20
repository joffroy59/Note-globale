
/**********************************************************************************/
// move to / use file

function getLinesInString(input) {
  return input.split("\n");
}


/**********************************************************************************/
//


/**********************************************************************************/
// move to / use file

function isSameHeading(heading1, heading2) {
  return heading1.line === heading2.line;
}
function getMarkdownHeadings(bodyLines) {
  var headers = [];
  bodyLines.forEach(function (line, index) {
    var match = line.match(/^(#+)[\s]+(.*)$/);
    if (!match)
      return;
    headers.push({
      level: match[1].length,
      text: match[2],
      line: index,
    });
  });
  return headers;
}

/**
 *
 * @param lines Lines in body to find end of section
 * @param targetLine Target line to find end of section
 * @param shouldConsiderSubsections Whether to consider subsections as part of the section
 * @returns index of end of section
 */
function getEndOfSection(lines, targetLine, shouldConsiderSubsections) {
  if (shouldConsiderSubsections === void 0) { shouldConsiderSubsections = false; }
  var headings = getMarkdownHeadings(lines);
  var targetHeading = headings.find(function (heading) { return heading.line === targetLine; });
  var targetIsHeading = !!targetHeading;
  if (!targetIsHeading && shouldConsiderSubsections) {
    throw new Error("Target line ".concat(targetLine, " is not a heading, but we are trying to find the end of its section."));
  }
  if (!targetIsHeading && !shouldConsiderSubsections) {
    var nextEmptyStringIdx = findNextIdx(lines, targetLine, function (str) { return str.trim() === ""; });
    if (nextEmptyStringIdx !== null && nextEmptyStringIdx > targetLine) {
      return nextEmptyStringIdx - 1;
    }
    return targetLine;
  }
  var lastLineInBodyIdx = lines.length - 1;
  var endOfSectionLineIdx = getEndOfSectionLineByHeadings(targetHeading, headings, lines, shouldConsiderSubsections);
  var lastNonEmptyLineInSectionIdx = findPriorIdx(lines, endOfSectionLineIdx, function (str) { return str.trim() !== ""; });
  if (lastNonEmptyLineInSectionIdx !== null) {
    // Since we're finding the end, it doesn't make sense to go above the target line
    if (lastNonEmptyLineInSectionIdx < targetLine) {
      return targetLine;
    }
    var lineIsEmpty = lines[lastNonEmptyLineInSectionIdx + 1].trim() === "";
    if (lastNonEmptyLineInSectionIdx + 1 === lastLineInBodyIdx &&
      !lineIsEmpty) {
      return endOfSectionLineIdx;
    }
    if (lastNonEmptyLineInSectionIdx === 0) {
      return lastNonEmptyLineInSectionIdx + 1;
    }
    return lastNonEmptyLineInSectionIdx;
  }
  return endOfSectionLineIdx;
}
function getEndOfSectionLineByHeadings(targetHeading, headings, lines, shouldConsiderSubsections) {
  var targetHeadingIdx = headings.findIndex(function (heading) {
    return isSameHeading(heading, targetHeading);
  });
  var targetHeadingIsLastHeading = targetHeadingIdx === headings.length - 1;
  var lastLineInBodyIdx = lines.length - 1;
  if (targetHeadingIsLastHeading) {
    return lastLineInBodyIdx;
  }
  var _a = findNextHigherOrSameLevelHeading(targetHeading, headings), nextHigherOrSameLevelHeadingIndex = _a[0], foundHigherOrSameLevelHeading = _a[1];
  var higherLevelSectionIsLastHeading = foundHigherOrSameLevelHeading &&
    nextHigherOrSameLevelHeadingIndex === headings.length;
  if (higherLevelSectionIsLastHeading) {
    return lastLineInBodyIdx;
  }
  if (foundHigherOrSameLevelHeading && shouldConsiderSubsections) {
    // If the target section is the last section of its level, and there are higher level sections,
    var nextHigherLevelHeadingLineIdx = headings[nextHigherOrSameLevelHeadingIndex].line;
    return nextHigherLevelHeadingLineIdx - 1;
  }
  if (foundHigherOrSameLevelHeading && !shouldConsiderSubsections) {
    return headings[targetHeadingIdx + 1].line;
  }
  if (!shouldConsiderSubsections && !foundHigherOrSameLevelHeading) {
    var nextHeading = findNextHeading(targetHeading.line, headings);
    if (nextHeading === null) {
      return lastLineInBodyIdx;
    }
    return nextHeading;
  }
  // There are no higher level sections, but there may be more sections.
  return lastLineInBodyIdx;
}
function findNextHigherOrSameLevelHeading(targetHeading, headings) {
  var targetHeadingIdx = headings.findIndex(function (heading) {
    return isSameHeading(heading, targetHeading);
  });
  var nextSameOrHigherLevelHeadingIdx = findNextIdx(headings, targetHeadingIdx, function (heading) { return heading.level <= targetHeading.level; });
  if (nextSameOrHigherLevelHeadingIdx === null) {
    return [-1, false];
  }
  return [nextSameOrHigherLevelHeadingIdx, true];
}
function findNextHeading(fromIdxInBody, headings) {
  var nextheading = headings.findIndex(function (heading) { return heading.line > fromIdxInBody; });
  return nextheading === -1 ? null : nextheading;
}
function findPriorIdx(items, fromIdx, condition) {
  for (var i = fromIdx - 1; i >= 0; i--) {
    if (condition(items[i])) {
      return i;
    }
  }
  return null; // If no non-empty string is found before the given index
}
function findNextIdx(items, fromIdx, condition) {
  for (var i = fromIdx + 1; i < items.length; i++) {
    if (condition(items[i])) {
      return i;
    }
  }
  return null;
}
/**********************************************************************************/
//



function replace_date_elemen(input, date){
  return input.replaceAll('ww', moment(date).isoWeek())
    .replaceAll('YYYY', moment(date).format('YYYY'))
    .replaceAll('MM', moment(date).format('MM'))
    .replaceAll('DD', moment(date).format('DD'))
}

function get_DailyNote_path(plugin_name, date = new Date()){

  const periodicNotesPlugin = app.plugins.getPlugin(plugin_name);
  const periodicNotesSettings = periodicNotesPlugin.settings;
  const dailyNoteSettings = periodicNotesSettings.daily;

  console.log(periodicNotesSettings);

  console.log(dailyNoteSettings.folder)
  // Get the path and filename for the daily note
  const dailyNotePath = replace_date_elemen(dailyNoteSettings.folder, date);
  const dailyNoteFilename = replace_date_elemen(dailyNoteSettings.format, date) + '.md';

  // Combine the path and filename to get the full path
  const fullDailyNotePath = `${dailyNotePath}/${dailyNoteFilename}`;

  // Log the full path to the console
  console.log(fullDailyNotePath);


  return fullDailyNotePath
}

async function insert_task_common(tp, project_name = null, show = false) {
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

  const daily_note_path = get_DailyNote_path('periodic-notes', date)
  console.log(`daily_note_path=${daily_note_path}`)

  const settings_file = "Assets/Tasks Settings.md";
  const settings = app.metadataCache.getFileCache(app.vault.getAbstractFileByPath(settings_file)).frontmatter;

  const global_task_type_list = settings.golbal_task_type
  let global_task_type = await tp.system.suggester((item) => item, global_task_type_list, true, "Global Task Type")

  const settings_root = settings[global_task_type]

  const global_task_type_tags = global_task_type.replace(/ /g, "_").toLowerCase()

  const task_type_list = settings_root.task_type.list
  const generic_type_list = settings_root.type

  let task_type = await tp.system.suggester((item) => item, task_type_list, true, "Task Type")

  let generic_type = await tp.system.suggester((item) => item, generic_type_list, true, "Generic Type")

  let folder_base = `${settings_root.folder_base}/${task_type}/${generic_type}`
  console.log(`folder_base=${folder_base}`)

  const template_task_type_base = settings_root.template.template_base
  let template_create_name = settings_root.template.create
  console.log(`template_create_name=${template_create_name}`)

  let template_create = `${template_task_type_base}/${template_create_name}`

  let defaultTitle = `${global_task_type} - ${generic_type} - `
  console.log(settings_root)
  console.log(`settings_root=${settings_root}`)

  let task_type_tags = settings_root.task_type[task_type.trim()].tags

  let tags = `#${global_task_type_tags} ${task_type_tags} #${generic_type.replace(/ /g, "_").toLowerCase()}`
  let title = await tp.system.prompt("Title (create Note Link)", defaultTitle);

  console.log(`template_create=${template_create}`)

  // Create Note
  // let existing = tp.file.find_tfile(title);
  // let createdFileDisplay;
  // if (existing) {
  //   createdFileDisplay = existing.basename;
  //   new Notice(`${title} exists`)
  // } else {
  //   createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile(template_create), title, true, folder_base));
  //   new Notice(`${title} Created.`, "/" + folder_base + "/")
  // }
  // //await tp.file.move("/"+ folder_base + "/" + title, folder_basetp.file.find_tfile(title));

  let task_state = " "
  if (task_type == "Wip") task_state = "/"

  const note_content = `
    - [${task_state}]  [[${folder_base}/${title}|${title}]]  ${tags}    ➕ ${tp.date.now()}
`;

  console.log(`daily_note_path=${daily_note_path}`)

  // const folder = path.join(folder_projects, project_name);
  // const folder = folder_projects + '/' + project_name;
  // if (!app.vault.getAbstractFileByPath(folder)) {
  //   console.log(`${folder} does not exist.`);
  //   console.log(`Creating folder ...`);
  //   await app.vault.createFolder(folder)
  // } else {
  //   console.log(`${folder} exists.`);
  // }
  // console.log(`Creating new Wip note in folder ${folder} with name ${filename}`);
  // const tfolder = app.vault.getAbstractFileByPath(folder);


  //await tp.file.create_new(note_content, filename, show, tfolder);

  const dailyNote = tp.file.find_tfile(daily_note_path);
  //await app.vault.modify(dailyNote, tp.file.content + note_content);
  let dailyNoteContent = await app.vault.read(dailyNote);

  console.log(`dailyNote=${dailyNote}`)
  console.log(`dailyNoteContent=${dailyNoteContent}`)
  const targetString = "🚧 Wip"
  console.log(`targetString=${targetString}`)

  // const targetRegex = new RegExp(`\\s*${escapeRegExp(targetString.replace("\\n", ""))}\\s*`);
  // console.log(targetRegex)
  const fileContentLines = getLinesInString(dailyNoteContent);
  let targetPosition = 45;
  const targetNotFound = targetPosition === -1;
  if (targetNotFound) {
    reportError(new Error("Unable to find insert after line in file"), "Insert After Error");
  }
  const endOfSectionIndex = getEndOfSection(fileContentLines, targetPosition, false);
  targetPosition = endOfSectionIndex ?? fileContentLines.length - 1;



  console.log(`targetPosition=${targetPosition}`)

  // let lines =  getLinesInString(dailyNoteContent)
  // console.log(lines)
  // console.log(lines[10])
  // const endOfSectionIndex = getEndOfSection(
  //   lines,
  //   0,
  //   false,
  // );
  console.log(`endOfSectionIndex=${endOfSectionIndex}`)


  if (endOfSectionIndex !== -1) {
    const headerEndIndex = dailyNoteContent.indexOf("\n", endOfSectionIndex );
    const newContent = dailyNoteContent.slice(0, headerEndIndex) + note_content + dailyNoteContent.slice(headerEndIndex);
    // await dailyNote.write(newContent);
    await app.vault.modify(dailyNote, newContent);

    console.log(`Updated Daily Note ${daily_note_path}`);
  } else {
    console.log("Header not found");
  }

  return ""
}

module.exports = insert_task_common;