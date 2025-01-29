```embed
title: "Templater User Scripts for Obsidian"
image: ""
description: "Convenient user scripts around the Templater plugin for Obsidian."
url: "https://obsidian-scripts.mihaiconstantin.com/docs/prompt.html#creating-note-from-template"
```

### Test
template de test : [[Get a movie summary based on its title]]

- [x] required : [[Install User Script For Templater]] ✅ 2025-01-29
resulat ok apres supression appel a ia 
- [x] [[The Movie Title]]  avec [[Get a movie summary based on its title - no AI]]✅ 2025-01-29

### Adaptation pour créer un test d'IA 

 [[Get a movie summary based on its title - no AI]]
 
[[Test Add IA]]

 netoyage transformation en IA 
 - [x] [[Flux GGUF text2img Workflow OK2]] ✅ 2025-01-29
fait avec `command palette > create note from template > [[Test Add IA]]` et en donnant comme titre Flux GGUF text2img Workflow OK2
- [x] Faire un bouton vers ce template (create) ✅ 2025-01-29

```meta-bind-button
label: This is a button 4
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-test1-4
style: default
actions:
  - type: templaterCreateNote
    templateFile: Templates/Test/Test Add IA.md
    folderPath: Inbox
    fileName: Untitled
    openNote: true
    openIfAlreadyExists: false

```


essaie d'appel d'ne action quickadd 

- [ ] a finir 
