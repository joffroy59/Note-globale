---
ELN version: 0.4.2
cssclass: dashboard, wide-page
banner: "[[obsidian-eln-banner.png]]"
banner_y: 0.5
author: Jerome Offroy
date created: 2025-03-04
note type: project
tag:
  - " #project/IA "
project:
   name: IA
   abbreviation: IA
   type: science
   status: active
   start: 2023-03-01
   end: 2024-02-28
   duration: 3 years
   funding agency: ~~
   funding code: ~~
   title: ~~
   subproject: ~~
   acronym: ~~
   project coordinator science: ~~
   project manager administation: ~~
   reports:
      -
         type: interim report
         due date: YYYY-MM-dd
         link: "[[Interim Report-IA-YYYY-MM]]"
      -
         type: interim report
         due date: YYYY-MM-dd
         link: "[[Interim Report-IA-YYYY-MM]]"
      -
         type: milestone report
         due date: YYYY-MM-dd
         link: "[[Milestone Report-IA-YYYY-MM]]"
      -
         type: final report
         due date: YYYY-MM-dd
         link: "[[Milestone Report-IA-YYYY-MM]]"
---

`= "<div class='title' style='color:#edf'>" + this.file.name + "</div>"`

# Experiments

- ### [[Wip - IA|🚧Wip]]
  ```dataview
  LIST
  FROM #status/wip AND #IA AND !"Assets" AND !"Templates"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### [[Analyses]]
  ```dataview
  LIST
  FROM #analysis  AND!"Assets"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### [[ Processes]]
  ```dataview
  LIST
  FROM #process  AND!"Assets"
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### Project Meetings
  ```dataview
  LIST
  FROM #meeting AND!"Assets"
  WHERE project.name = this.project.name
  SORT file.mtime.ts DESC
  LIMIT 6
  ```

- ### Other Meetings
	- [[Clustertreffen 3 (2022 Nov, München)]]


# Important Dates

- ### General
	**Project start:** `=this.project.start`
	**Project end:** `=this.project.end`

- ### Reports
  ```dataviewjs
  var querry = Object.entries(dv.current().file.frontmatter.project.reports)
        .map(q => '- [ ] ' + q[1].type + '[due::' + q[1]['due date'] + ']')
  dv.paragraph(querry)
  ```

- ### Upcoming Meetings
	- 17.11.2022 Clustertreffen München

# People

```dataviewjs
    await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
