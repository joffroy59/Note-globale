---
tags:
  - status/wip
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

- [/] [[#Note Home]]
	- [x] [[#Duplication dans mon vault]]  ✅ 2025-02-27
	- [/] [[#section > element type Home Book]]
- [ ] [[#voir]] 
- [ ] Action
        ![[Obsidian Electronic Lab Notebook vault released-1740606622669.png|150x36]]
- [ ] folder tree color bar (theme ? )
- [/] [[#Task Achieved]]
- [ ] [[#Menu]] 
      ![[Obsidian Electronic Lab Notebook vault released-1740771528761.png]]
- [ ] home ? (pour ne pas etre obligé par daily note )
- [/] [[#structure folder et asset]] 
        ![[Obsidian Electronic Lab Notebook vault released-1740605834462.png|150x134]]
- [/] List
      ![[Obsidian Electronic Lab Notebook vault released-1740605847300.png|150x242]]
- [ ] Note
      ![[Obsidian Electronic Lab Notebook vault released-1740605857470.png|150x53]]
- [ ] Theme 
        ![[Obsidian Electronic Lab Notebook vault released-1740605743452.png]]
	  
#### Note [[Home]]

![[#^d1842e]]

##### Duplication dans mon vault

![[Obsidian Electronic Lab Notebook vault released-1740605985815.png|600]]

  - [x] copier a  la main
	- [x]  [dashboard.css](file:///C:%5CUsers%5Cjerom%5COneDrive%5CDocuments%5CObsidian%5CSandbox%5Cobsidian-eln%5CELN_vault%5C.obsidian%5Csnippets%5Cdashboard.css) vers [dashboard.css](file:///D:%5Cobsidian%5CMyNote%5CNote-globale%5C.obsidian%5Csnippets%5Cdashboard.css)
	- [x] /assets/javascript/dataview/views/note_footer
		- [ ] trouver comment installer correctement [dashboard.css](file:///D:%5Cobsidian%5CMyNote%5CNote-globale%5C.obsidian%5Csnippets%5Cdashboard.css)


##### section > element : type  [[Home#Book]]

- [ ] [[#Book]]


- [ ] utiliser bouton metabind (ca a deja marché mais u ? note [[Samples]] ? ) #todo
###### voir  l'erreur locale 

![[Obsidian Electronic Lab Notebook vault released-1740609119778.png|400]]

###### sur le vault s'exemple

 ![[Obsidian Electronic Lab Notebook vault released-1740768115806.png|300]]

###### Book

- [x] Home#Book ✅ 2025-03-01
	- [x] ajouter template ✅ 2025-03-01
pas de création donc à voir plus tard

![[Obsidian Electronic Lab Notebook vault released-1740853819296.png|150x73]]



###### [Samples](app://obsidian.md/Samples)

###### Projects
a un bouton de création 

![[Obsidian Electronic Lab Notebook vault released-1740771398336.png|400]]

![[Obsidian Electronic Lab Notebook vault released-1740771553350.png|400]]

- [ ] duplicate page (list + add)
- [ ] clone template  [[Projects]]

- [ ] transformation de button (Styles) en metabind button 

```button
name New Project
type command
action Templater: Insert assets/templates/New Project.md
class accent-button
```

pas trouvé comment terminer un projet 

garder idée des liste des autre projet et faire pour WIP IA  ^7b6524

#### header 
trouvé dans [[Projects]]  a remettre 

```dataviewjs
await dv.view("/assets/javascript/dataview/views/note_header", {});
```

#### Menu
trouvé dans [[Projects]]  a remettre 

```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

#### structure folder et asset
#todo 
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


- [ ] faire un template a inserver et inclure le template (factorisatoin) 

