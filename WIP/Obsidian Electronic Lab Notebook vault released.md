---
tags:
  - "#done"
---

 
````ad-tip
Source : https://forum.obsidian.md/t/obsidian-electronic-lab-notebook-vault-released/86577/1

Exemple Vault Local: [Home](obsidian://open?vault=ELN_vault&file=Home) 
````
^d1842e

````ad-note
title: Note
[[Obsidian Electronic Lab Notebook vault released - Share & showcase - Obsidian Forum]] 

[https://github.com/fcskit/obsidian-eln 406](https://github.com/fcskit/obsidian-eln)

````

```ad-attention

[ELN_vault](obsidian://open?vault=ELN_vault&file=assets%2Fimages%2FInstruments%2Fdummy-image-instrument.png)

```

---
### 🖼 Screenshot 
![[Obsidian Electronic Lab Notebook vault released-1740605646371.png]]

![[Obsidian Electronic Lab Notebook vault released-1740605662081.png]]

![[Obsidian Electronic Lab Notebook vault released-1740605670865.png]]


### A Reprendre

- [x] [[#Note Home]] ✅ 2025-03-03
	- [x] [[#Duplication dans mon vault]]  ✅ 2025-02-27
- [x] [[Obsidian Electronic Lab Notebook vault released - Home section  element|Home section  element]] ✅ 2025-03-01
- [-] [[Obsidian Electronic Lab Notebook vault released - Home section  element 1 - Other]]
- [-] [[#voir]] 
- [-] Action
        ![[Obsidian Electronic Lab Notebook vault released-1740606622669.png|150x36]]
- [-] folder tree color bar (theme ? )
- [x] [[#Task Achieved]] ✅ 2025-03-01
- [x] [[#Menu]] ✅ 2025-03-01
      ![[Obsidian Electronic Lab Notebook vault released-1740771528761.png]]
- [x] home ? (pour ne pas etre obligé par daily note ) [[Home]] ✅ 2025-03-03
- [-] [[Obsidian Electronic Lab Notebook vault released - Structure folder et asset|Structure folder et asset]] 
        ![[Obsidian Electronic Lab Notebook vault released-1740605834462.png|150x134]]
- [x] [[Obsidian Electronic Lab Notebook vault released - List|List]] ✅ 2025-03-03
      ![[Obsidian Electronic Lab Notebook vault released-1740605847300.png|150x242]]
- [x] Note ✅ 2025-03-03
      ![[Obsidian Electronic Lab Notebook vault released-1740605857470.png|150x53]]
      ![[Obsidian Electronic Lab Notebook vault released-1740960834237.png|150x97]]
- [-] Theme 
        ![[Obsidian Electronic Lab Notebook vault released-1740605743452.png]]
- [x] [[#utiliser bouton metabind]] (ca a deja marché mais u ? note [[Samples]] ? ) #todo ✅ 2025-03-03
	  
#### Note [[Home]]

![[#^d1842e]]

#### Duplication dans mon vault

![[Obsidian Electronic Lab Notebook vault released-1740605985815.png|600]]

  - [x] copier a  la main
	- [x]  [dashboard.css](file:///C:%5CUsers%5Cjerom%5COneDrive%5CDocuments%5CObsidian%5CSandbox%5Cobsidian-eln%5CELN_vault%5C.obsidian%5Csnippets%5Cdashboard.css) vers [dashboard.css](file:///D:%5Cobsidian%5CMyNote%5CNote-globale%5C.obsidian%5Csnippets%5Cdashboard.css)
	- [x] /assets/javascript/dataview/views/note_footer
		- [ ] trouver comment installer correctement [dashboard.css](file:///D:%5Cobsidian%5CMyNote%5CNote-globale%5C.obsidian%5Csnippets%5Cdashboard.css)






#### header 
trouvé dans [[Projects]]  a remettre 
````markdown
```dataviewjs
await dv.view("/assets/javascript/dataview/views/note_header", {});
```
````

#### Menu
trouvé dans [[Projects]]  a remettre 
`````markdown fold
```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```
`````

- [x] css  copy from edn [D:\obsidian\MyNote\Note-globale\.obsidian\snippets\page-styles.css](file:///d%3A/obsidian/MyNote/Note-globale/.obsidian/snippets/page-styles.css) ✅ 2025-03-01
      ![[Obsidian Electronic Lab Notebook vault released-1740855176823.png|150x18]]
      ![[Obsidian Electronic Lab Notebook vault released-1740855204390.png|300]]
- [x] remettre dans ✅ 2025-03-03
	- [x] trouver ou enlever dans [[Lists]] ✅ 2025-03-03


### Task Achieved
![[Obsidian Electronic Lab Notebook vault released-1740777270482.png|150x159]]

[[Exemple Task Avancement]]
- [x] add /assets/javascript/dataview/views/circular_progress ✅ 2025-02-28
![[Obsidian Electronic Lab Notebook vault released-1740777514495.png|150x158]]

- [x] css : [D:\obsidian\MyNote\Note-globale\.obsidian\snippets\circular_progress.css](file:///d%3A/obsidian/MyNote/Note-globale/.obsidian/snippets/circular_progress.css) ✅ 2025-02-28
![[Obsidian Electronic Lab Notebook vault released-1740777558004.png|150x161]]

- [ ] intégrer danbs dayly note
[[📒2025-02-28]]
![[Obsidian Electronic Lab Notebook vault released-1740778798810.png|150x222]]

un peu gros #idea  essayer de 
- [ ] faire un header avec code deja trouvé [[#header]]


- [ ] faire un template a insérer et inclure le template (factorisation) 


### utiliser bouton metabind
exemple [[Chemicals]]

``````
```button
name New Chemical
type command
action Templater: Insert Templates/Insert Assets/templates/New Chemical.md
class accent-button
```
``````
```button
name New Chemical
type command
action Templater: Insert Templates/Insert Assets/templates/New Chemical.md
class accent-button
```

- [x] test OK 
- [x] remplacement  [[Chemicals]] ✅ 2025-03-03
- [x] test ✅ 2025-03-03
- [x] remlpacement all ✅ 2025-03-03

new-sample

`BUTTON[new-chemicals]`


- [x] si ok desativer plugin ✅ 2025-03-03

![[Obsidian Electronic Lab Notebook vault released-1740963256575.png]]![[Obsidian Electronic Lab Notebook vault released-1740963276856.png|150x204]]