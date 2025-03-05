---
ELN version: 0.4.2
cssclass: dashboard, wide-page
banner: "[[obsidian-eln-banner.png]]"
banner_y: 0.5
author: Jerome Offroy
date created: 2025-03-05
note type: project
tag:
  - " #project/Domotique "
project:
   name: Domotique
   abbreviation: Domotique
   type: perso
   status: active
   start: 2025-03-05
   end:
   duration:
   title: ~~
   subproject: ~~
   acronym: ~~
   reports:
      -
         type: wip report
         due date: YYYY-MM-dd
         link: "[[Result-Domotique-YYYY-MM]]"
      -
         type: wip report
         due date: YYYY-MM-dd
         link: "[[Result-Domotique-YYYY-MM]]"
      -
         type: milestone report
         due date: YYYY-MM-dd
         link: "[[Milestone-Result-Domotique-YYYY-MM]]"
      -
         type: final report
         due date: YYYY-MM-dd
         link: "[[Final Result-Domotique-YYYY-MM]]"
---

`= "<div class='title' style='color:#edf'>" + this.file.name + "</div>"`

# Experiments

- ### [[Wip - Domotique|🚧Wip]]
  ```dataview
  LIST
  FROM #status/wip AND !"Assets" AND !"Templates"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### [[Analyses]]
  ```dataview
  LIST
  FROM #analysis  AND !"Assets"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### [[ Processes]]
  ```dataview
  LIST
  FROM #process  AND !"Assets"
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### Project Meetings
  ```dataview
  LIST
  FROM #meeting AND !"Assets"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### Other Meetings
	- [[Exemple (2025 March, Lieu)]]


# Important Dates

- ### General
	**Project start:** `=this.project.start`
	**Project end:** `=this.project.end`

- ### Reports
  ```dataviewjs
  var querry = Object.entries(dv.current().file.frontmatter.project.reports)
        .map(q => '- [ ] ' + q[1].type + '&nbsp;&nbsp;' + ' [due::' + q[1]['due date'] + ']')
  dv.paragraph(querry)
  ```

- ### Upcoming Meetings
	- <date> Exemple Meeting

```dataviewjs
    await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
