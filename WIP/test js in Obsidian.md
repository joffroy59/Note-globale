---
ELN info:
  template: Create Task WIP.md
  version: 0.3.2
  author: Jerome Offroy
  modified: 2025-03-22
  copyright: GNU Affero General Public License v3.0


tags:
  - status/wip
---
````ad-tip
Source : https://codeinfocus.com/blog/2024-12/using-custom-scripts-in-obsidian/

![](https://codeinfocus.com/img/blog/2024/scripts-in-obsidian.webp)
````

````ad-note
title: Note
pour ensuite faire la copy de fichier pour wip ia 

````


---
## Tasks
- [ ] [[#Test js simple]] ➕ 2025-03-22
	- [ ] [[#Usage with Templater]]
	- [ ] 

---
## Tasks Detail


### Test js simple

[[simple.js]]

dataview
### Usage with Templater
[[Test Simple JS]]


# code pour faire copier coller de fichier 


```js
const fs = require('fs');
const path = require('path');

// Fonction pour copier un fichier
function copierFichier(fichier, source, destination) {
    const cheminSource = path.resolve(source, fichier);
    const cheminDestination = path.resolve(destination, fichier);

    fs.copyFile(cheminSource, cheminDestination, (err) => {
        if (err) {
            console.error('Erreur lors de la copie :', err);
        } else {
            console.log(`Le fichier '${fichier}' a été copié dans '${destination}'.`);
        }
    });
}

// Exemple d'utilisation
const fichier = 'mon_fichier.md';
const source = '/chemin/de/source';
const destination = '/chemin/de/destination';

copierFichier(fichier, source, destination);
```

```ts
import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    console.log('Plugin chargé avec succès !');
    this.addCommand({
      id: 'say-hello',
      name: 'Dire bonjour',
      callback: () => {
        new Notice('Bonjour, monde !');
      },
    });
  }

  onunload() {
    console.log('Plugin déchargé.');
  }
}
```