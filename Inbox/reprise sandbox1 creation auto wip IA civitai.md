
### config
use : 
- [[Templates/IA/IA civitai - Daily.md]]
- [[Templates/Inserts/Insert Wip IA - Select]]
	- [[Insert Wip IA - IA civitai]]



![[Pasted image 20250202205544-1.png]]

![[Pasted image 20250202205549-1.png]]

### tasks

- [x] creation d'un bouton p pour l'action en test ✅ 2025-02-02
![[Pasted image 20250202210106-1.png|150]]

```meta-bind-button
label: Test Sandbox1
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-sandbox1
style: default
actions:
  - type: command
    command: quickadd:choice:23ffd3c3-541e-4288-bf3d-3ed2ec165425

```

- [ ] test fix problème de titre de la note créée 
	- [x] duplication [[IA civitai - Daily]]  en [[IA civitai - Daily v2]]
	le problème : demande 2 fois le titre et l'url 

	- [x] duplication [[Insert Wip IA - IA civitai]] -> [[Insert Wip IA - IA civitai v2]]
	- [x] changement de la quickadd Sandbox1 (+ duplication du Capture 🚧Insert WIP IA - Select en 🚧Insert WIP IA - Sanbox1 )
	![[Pasted image 20250202211738-1.png|150]]


test de creation de la note de puiis le termplate d'insertion dans todaynopte 
avec Obsidian api 
[create - Developer Documentation](https://docs.obsidian.md/Reference/TypeScript+API/Vault/create)
`create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>;`

Trouvé : 
- [x] [Templater snippets](https://zachyoung.dev/posts/templater-snippets)
test de 
```ad-note
Here’s a script that will create an internal link in a template that will create a new file using a template if it doesn’t already exist.

<%*
const fileName = "This is the name of a file";
const existing = tp.file.find_tfile(fileName);
let createdFileDisplay;
if (existing) {
  createdFileDisplay = existing.basename;
} else {
  createdFileDisplay = (await tp.file.create_new(tp.file.find_tfile("template-name"), fileName)).basename;
}
_%>

// Somewhere later in the file
[[<% createdFileDisplay %>]]
```


button de test pour créer seulement l'élément de today note 

- [x] Test et exemple : [[MirrorStyle]]

```meta-bind-button
label: Test Wip IA civitai
icon: ""
hidden: false
class: ""
tooltip: ""
id: test-sandbox1-2
style: default
actions:
  - type: command
    command: quickadd:choice:117a593c-e4ee-46ec-b9f3-a6e27ad40600

```

- [x] Test et exemple (renommage) : [[MirrorStyle]]
```meta-bind-button
label: This is a button
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions: []

```
`BUTTON[insert-daily-wip-ia_civitai-v2]`
