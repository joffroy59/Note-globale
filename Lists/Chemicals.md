---
ELN version: 0.3.2
cssclass: wide-page
date created: 2025-03-01
author:  Jerome Offroy
note type: chemical-list
tag: list/chemicals
---

```dataviewjs
await dv.view("/assets/javascript/dataview/views/navbar", {});
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_header", {});
```

> [!Example] TOC
>   - [[#Inorganic Compounds]]
>   - [[#Organic Compounds]]
>   - [[#Conductive Additives]]
>   - [[#Solvents]]
>   - [[#Metals]]

`BUTTON[new-chemicals]`

## Inorganic Compounds

```dataview
TABLE WITHOUT ID
  file.link as Chemical,
  chemical["field of use"] as "Field of use",
  chemical.name as "Name", 
  chemical.formula as "Formula", 
  chemical.properties["molar mass"] as "Molar mass",
  chemical.CAS as CAS, 
  chemical.batch["delivery date"] as "Date"
FROM #chemical AND !"Assets"
WHERE chemical.type = "inorganic compound"
SORT chemical.type, chemical.name ASC
```

## Organic Compounds

```dataview
TABLE WITHOUT ID
  file.link as Chemical,
  chemical["field of use"] as "Field of use",
  chemical.name as "Name", 
  chemical.formula as "Formula", 
  chemical.properties["molar mass"] as "Molar mass",
  chemical.CAS as CAS, 
  chemical.batch["delivery date"] as "Date"
FROM #chemical AND !"Assets"
WHERE chemical.type = "organic compound"
SORT chemical.type, chemical.name ASC
```

## Conductive Additives

```dataview
TABLE WITHOUT ID
  file.link as Chemical,
  chemical["field of use"] as "Field of use",
  chemical.name as "Name", 
  chemical.formula as "Formula", 
  chemical.properties["molar mass"] as "Molar mass",
  chemical.CAS as CAS, 
  chemical.batch["delivery date"] as "Date"
FROM #chemical AND !"Assets"
WHERE chemical.type = "conductive additive"
SORT chemical.type, chemical.name ASC
```

## Solvents

```dataview
TABLE WITHOUT ID
  file.link as Chemical,
  chemical["field of use"] as "Field of use",
  chemical.name as "Name", 
  chemical.formula as "Formula", 
  chemical.properties["molar mass"] as "Molar mass",
  chemical.properties.density as "density",
  chemical.CAS as CAS, 
  chemical.batch["delivery date"] as "Date"
FROM #chemical AND !"Assets"
WHERE chemical.type = "solvent"
SORT chemical.type, chemical.name ASC
```

## Metals

```dataview
TABLE WITHOUT ID
  file.link as Chemical,
  chemical["field of use"] as "Field of use",
  chemical.name as "Name", 
  chemical.formula as "Formula", 
  chemical.properties["molar mass"] as "Molar mass",
  chemical.CAS as CAS, 
  chemical.batch["delivery date"] as "Date"
FROM #chemical AND !"Assets"
WHERE chemical.type = "metal"
SORT chemical.type, chemical.name ASC
```


```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```
