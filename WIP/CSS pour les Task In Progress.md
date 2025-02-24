---
tags:
  - status/wip
---

---

 
````ad-tip
Source : 

````

````ad-note
title: Note
 
se baser sur un theme avec des icones pour WIP et creer un css pour Obsidian global 



````

### Theme de base  obsidian gruvbox

![[CSS pour les Task In Progress-1740427540577.png|400]]
### Minimal

![[CSS pour les Task In Progress-1740427594821.png|400]]

#### remarque 
pas de couleur pouyr les header 
#### CSS avec Theme de base 

[obsidian-minimal/theme.css at master · kepano/obsidian-minimal · GitHub](https://github.com/kepano/obsidian-minimal/blob/master/theme.css)


```css

/* [/] Incomplete */
input[data-task="/"]:checked,
li[data-task="/"] > input:checked,
li[data-task="/"] > p > input:checked {
  background-image: none;
  background-color: transparent;
  position: relative;
  overflow: hidden;
}
input[data-task="/"]:checked:after,
li[data-task="/"] > input:checked:after,
li[data-task="/"] > p > input:checked:after {
  top: 0;
  left: 0;
  content: " ";
  display: block;
  position: absolute;
  background-color: var(--background-modifier-accent);
  width: calc(50% - 0.5px);
  height: 100%;
  -webkit-mask-image: none;
}

```

###  test avec tasks.css  
---
### # ITS Theme

[Obsidian--ITS-Theme/theme.css at main · SlRvb/Obsidian--ITS-Theme · GitHub](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/theme.css)

```css

```
KO

### Border 🆗 

[obsidian-border/theme.css at main · Akifyss/obsidian-border · GitHub](https://github.com/Akifyss/obsidian-border/blob/main/theme.css)

```css
body:not(.disable-alternative-checkboxes) input[data-task="/"]:checked,
body:not(.disable-alternative-checkboxes) li[data-task="/"]>input:checked,
body:not(.disable-alternative-checkboxes) li[data-task="/"]>p>input:checked {
    --checkbox-color-hover: var(--color-yellow);
    --checkbox-color: var(--color-yellow);
    border: 2px var(--color-yellow) solid;
    background: conic-gradient(var(--color-yellow) 0% 37.5%, transparent 37.5% 100%);
}

body:not(.disable-alternative-checkboxes) input[data-task="/"]:checked:hover,
body:not(.disable-alternative-checkboxes) li[data-task="/"]>input:checked:hover,
body:not(.disable-alternative-checkboxes) li[data-task="/"]>p>input:checked:hover {
    background: conic-gradient(var(--color-yellow) 0% 37.5%, transparent 37.5% 100%);
}

body:not(.disable-alternative-checkboxes) input[data-task="/"]:checked:after,
body:not(.disable-alternative-checkboxes) li[data-task="/"]>input:checked:after,
body:not(.disable-alternative-checkboxes) li[data-task="/"]>p>input:checked:after {
    background-color: rgba(0, 0, 0, 0);
    -webkit-mask-image: none;
}
```

avec theme en cours
![[CSS pour les Task In Progress-1740430037428.png|400]]
### sanctum 

bof

[GitHub - jdanielmourao/obsidian-sanctum: A minimalist theme for Obsidian.md, with the aim of creating a serene space of retreat, for thought and uninterrupted work.](https://github.com/jdanielmourao/obsidian-sanctum)


```css
body:not(.disable-alternative-checkboxes) input[data-task="/"]:checked,

body:not(.disable-alternative-checkboxes) li[data-task="/"]>input:checked,

body:not(.disable-alternative-checkboxes) li[data-task="/"]>p>input:checked {

  background-color: var(--checkbox-color);

  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&lt;Transparent Rectangle&gt;'/%3E%3C/svg%3E");

}
```

![[CSS pour les Task In Progress-1740430366189.png|400]]


### Feather ✅

[obsidian-feather/theme.css at main · zfmohammed/obsidian-feather · GitHub](https://github.com/zfmohammed/obsidian-feather/blob/main/theme.css)

#### Default

```css
input[data-task="/"]:checked,
li[data-task="/"]>input:checked,
li[data-task="/"]>p>input:checked {
    background-image: none;
    background-color: transparent;
    position: relative;
    overflow: hidden;
}

input[data-task="/"]:checked:after,
li[data-task="/"]>input:checked:after,
li[data-task="/"]>p>input:checked:after {
    top: 0;
    left: 0;
    content: " ";
    display: block;
    position: absolute;
    background-color: var(--color-accent);
    width: calc(50% - 0.5px);
    height: 100%;
    -webkit-mask-image: none;
}
```

![[CSS pour les Task In Progress-1740430856826.png|400]]

#### orange
```css
input[data-task="/"]:checked,
li[data-task="/"]>input:checked,
li[data-task="/"]>p>input:checked {
    background-image: none;
    background-color: transparent;
    position: relative;
    overflow: hidden;
}

input[data-task="/"]:checked:after,
li[data-task="/"]>input:checked:after,
li[data-task="/"]>p>input:checked:after {
    top: 0;
    left: 0;
    content: " ";
    display: block;
    position: absolute;
    background-color: var(--bright-orange);
    width: calc(50% - 0.5px);
    height: 100%;
    -webkit-mask-image: none;
}
```

![[CSS pour les Task In Progress-1740431134238.png|400]]

#### Orange link 

```css
/* ======checkboxes ====== */
body {
    /* Checkboxes */
    --checkbox-radius: 0px;
    /* --checkbox-wip-color: var(--bright-orange); */
    --checkbox-wip-color: var(--link-color);
}

input[data-task="/"]:checked,
li[data-task="/"]>input:checked,
li[data-task="/"]>p>input:checked {
    background-image: none;
    background-color: transparent;
    position: relative;
    overflow: hidden;
}

input[data-task="/"]:checked:after,
li[data-task="/"]>input:checked:after,
li[data-task="/"]>p>input:checked:after {
    top: 0;
    left: 0;
    content: " ";
    display: block;
    position: absolute;
    background-color: var(--checkbox-wip-color);
    width: calc(50% - 0.5px);
    height: 100%;
    -webkit-mask-image: none;
}


```

![[CSS pour les Task In Progress-1740431508065.png|400]]


#### Checckbox color and good size for status done

```css
/* ======checkboxes ====== */
body {
    /* Checkboxes */
    --checkbox-radius: 0px;
    /* --checkbox-wip-color: var(--bright-orange); */
    /* --checkbox-wip-color: var(--link-color); */
    --checkbox-wip-color: var(--checkbox-color);
}

input[data-task="/"]:checked,
li[data-task="/"]>input:checked,
li[data-task="/"]>p>input:checked {
    background-image: none;
    background-color: transparent;
    position: relative;
    overflow: hidden;
}

input[data-task="/"]:checked:after,
li[data-task="/"]>input:checked:after,
li[data-task="/"]>p>input:checked:after {
    top: 2px;
    left: 2px;
    content: " ";
    display: block;
    position: absolute;
    background-color: var(--checkbox-wip-color);
    width: calc(30% - 0.5px);
    height: 65%;
    -webkit-mask-image: none;
}
```

![[CSS pour les Task In Progress-1740432350745.png|400]]
![[20250224-2126-22.3871660.mp4]]