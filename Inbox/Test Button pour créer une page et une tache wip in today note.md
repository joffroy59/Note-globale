
## create a file in Sanbox/Test/


### avec Metabind button
tout seul non 
et QuickAdd

```meta-bind-button
label: This is a button
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-test1
style: default
actions:
  - type: command
    command: quickadd:choice:0f040fca-317c-4986-b7d4-caf3cb283021

```
KO 

### test avec 

```embed
title: "Note title automatically generated from first words of the Note (similar to Joplin) - Feature requests - Obsidian Forum"
image: "https://forum.obsidian.md/uploads/default/original/3X/b/a/ba1a1301f580d34a881803aa5ed8cf7ff3cdf0ef.png"
description: "Use case or problem I create dozens of new notes a week and they’d all be named Untitled {number} if I didn’t specifically click the title bar and name them.  Proposed solution I’d like the first 5-7 words of the note to auto-populate to the note title. This would often correspond to the top-level header of the note anyway.  For instance if I create a note that starts with the header  # Dishwasher Repair Tips  the note would just be automatically titled Dishwasher Repair Tips unless I change it,..."
url: "https://forum.obsidian.md/t/note-title-automatically-generated-from-first-words-of-the-note-similar-to-joplin/22832"
```

#### test 1

```meta-bind-button
label: This is a button
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-test1-2
style: default
actions:
  - type: command
    command: quickadd:choice:0f040fca-317c-4986-b7d4-caf3cb283021

```

Ok mais trop de prompt 
#### test autre bouton sans quickadd 

```meta-bind-button
label: This is a button 2
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-test1-2
style: default
actions:
  - type: templaterCreateNote
    templateFile: Templates/Test/Template - Test1.md
    folderPath: Inbox
    fileName: Untitled
    openNote: true
    openIfAlreadyExists: false

```

OK 

#### autre version label lieux 

```meta-bind-button
label: This is a button 3
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-test1-3
style: default
actions:
  - type: templaterCreateNote
    templateFile: Templates/Test/Template - Test1 1.md
    folderPath: Inbox
    fileName: Untitled
    openNote: true
    openIfAlreadyExists: false

```

OK

#### avec plus de prompt 

```meta-bind-button
label: This is a button 3
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-test1-3
style: default
actions:
  - type: templaterCreateNote
    templateFile: Templates/Test/Template - Test1 2.md
    folderPath: Inbox
    fileName: Untitled
    openNote: true
    openIfAlreadyExists: false

```
OK 

### faire un vrai bouton avec This is a button 3

- [x] creation [[IA/ComfyUI/Flux/]]
- [x] copy du template [[Template - Test1 2]] en [[Create Wip IA - ComFyUI - Flux]] ✅ 2025-01-28
- [x] definition du bouton dans MetaBind ✅ 2025-01-28
- [x] test ✅ 2025-01-28 [[Test Button pour créer une page et une tache wip in today note#faire un vrai bouton avec This is a button 3]] en fait non 
- [x] faire un insert dans le bouton "generique" par selection, du sous type  `BUTTON[insert-daily-wip-ia-select]` dans la page [[Panel/Actions|Actions]]  résultat:  [[Flux GGUF text2img Workflow OK]]  ✅ 2025-01-28 et dans [[📒2025-01-28#🚧 Wip ———————]]


`BUTTON[insert-daily-wip-ia_comfyui-flux]`

OK 
qwdfqsd
