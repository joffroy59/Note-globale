---
ELN version: 0.4.2
cssclass: normal-page
date created: 2025-03-01
author: Name Surname
note type: chemical
tags: 
  - " #chemical/metal "

# ELN information for chemical
chemical:
  type: metal
  field of use: 
    - "electrode"
  name: Chemical1
  CAS: CAS1
  synonyms:
  formula: $$
  properties:
    molar mass:  g/mol
    density: ~~ g/cm3
    melting point: ~~ K
    boiling point: ~~ K
    solubility in water: ~~ g/l
  batch:
    grade: ""
    supplier: 
    manufacturer: 
    product name: "Chemical1"
    delivery date: 2025-03-01
    batch number: 
    quantity: 
    url: "[link to store](https://de.vwr.com)"
  safety:
    safety data sheet: "[[msds-dummy.pdf|MSDS]]"
    h-statements:
      - Hxxx
    p-statements:
      - Pxxx
    threshold limit value: ~~
    toxicity: ~~ mg·kg−1 (LD50)
---

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/chemical", {});
```

```dataviewjs
  await dv.view("/Assets/javascript/dataview/views/chem_links", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
