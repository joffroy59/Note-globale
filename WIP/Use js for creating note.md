---
ELN info:
  template: Create Task WIP.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-20
  copyright: GNU Affero General Public License v3.0


tags:
  - status/wip
---


---
## Tasks
- [x] [[#Create Template]] ➕ 2025-03-20 ✅ 2025-03-20
- [x] [[#Create js ]] ✅ 2025-03-20
- [x] [[#test avec templater]] ✅ 2025-03-21
- [x] [[#button]] et test ok sur daily note ✅ 2025-03-21

---

## Tasks Detail


### Create Template

[[Test New Note In Progress]]


### Create js

[[new_test_in_progress.js]]



### test avec Templater

 ✅[[Test - test]]

✅ appel double

✅inline create note and insert line in sepcifiqu file  [[Insert Task - Common]]

in today note 


### button

```ad-info

avec choix de la section mais avec des nom et du code static pas completemetn nettoye
```

#### Truc trouvés :

- Récupérer la configuration du plugin  **Periodic Notes** pour utiliser le modèle de chemin et titre de la daily note avec remplacement des valeurs par celles du jour.
- Insérer du  contenu dans  la note quotidienne dans une section spécifique, et l'ajouter à la fin de cette section
    




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

![[Assets/banner/Style1/Success.png|200]]


## Todo

```ad-success
title: TODO ⭐⭐⭐

ca va permettre de toute faire en js avec des parametre notemment pour factoriser enctre ligne creer et la page cree qui n'avait pas acces aux sous type et devait faire du "parsing degueux" de fodler et nom 
```
