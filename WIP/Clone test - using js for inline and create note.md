---
ELN info:
  template: Create Task WIP.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-21
  copyright: GNU Affero General Public License v3.0


tags:
  - status/wip
---



---
## Tasks
- [ ] [[#Duplication]] ➕ 2025-03-21
- [/] utlisation dans autre task 
	- [x] dans [[Panel/Actions|Actions]] pour action rapide ✅ 2025-03-22
	- [ ] [[#Task Type En cours]] a l'utilisation d'un type de task voir comment l'utiliser pour remplacer et enlever bouton existant 
		- [ ] [[Panel/Actions|Actions]]
		- [ ] note existantes
- [ ] regroupement type de creation de task pour en avoir qu'une seule avec settings ou comme ELN creation par project creation et definition des element du projet 
- [ ] ??? que faire de 'Test Project'

---
## Tasks Detail


### Duplication
[[Use js for creating note]]

- [x] Tasks
	- [x] bouton : ✅ 2025-03-21
```meta-bind-button
label: testtest
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: testtest
hidden: false
actions:
  - type: runTemplaterFile
    templateFile: Templates/Insert assets/templates/Test New Note In Progress.md

```
👉
```meta-bind-button
label: Create Task Generic
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: create-task-genericc
hidden: false
actions:
  - type: runTemplaterFile
    templateFile: Templates/Insert assets/templates/Insert - Create - Task - Generic.md

```


- [x] script js [[insert_task_common.js]] existant ✅ 2025-03-21
- [x] template  : [[Templates/Insert assets/templates/Test New Note In Progress]] 👉 [[Templates/Insert assets/templates/Insert - Create - Task - Generic]] ✅ 2025-03-21
- [x] persistence du button dans meta bind ✅ 2025-03-22
- [x] `BUTTON[create-task-genericc]` ✅ 2025-03-22


![[Clone test - using js for inline and create note-1742598004591.png|400x101]]


### Task Type En cours
a l'utilisation d'un type de task voir comment l'utiliser pour remplacer et enlever bouton existant 

```
- [ ] [[Panel/Actions|Actions]]
- [ ] note existantes
```

- [ ] Types
	- [ ] [[#Toview]]









#### Toview

![[Clone test - using js for inline and create note-1742598221489.png|150]]

