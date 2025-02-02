
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
	- [x] duplication [[IA civitai - Daily]]  en [[IA civitai - Daily sandbox1]]
	le problème : demande 2 fois le titre et l'url 

	- [x] duplication [[Insert Wip IA - IA civitai]] -> [[Insert Wip IA - IA civitai sandbox1]]
	- [x] changement de la quickadd Sandbox1 (+ duplication du Capture 🚧Insert WIP IA - Select en 🚧Insert WIP IA - Sanbox1 )
	![[Pasted image 20250202211738-1.png|150]]


test de creation de la note de puiis le termplate d'insertion dans todaynopte 
avec Obsidian api 
[create - Developer Documentation](https://docs.obsidian.md/Reference/TypeScript+API/Vault/create)
`create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>;`

