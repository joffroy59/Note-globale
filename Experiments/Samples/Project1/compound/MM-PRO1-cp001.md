---
ELN version: 0.4.2
cssclass: wide-page
date created: 2025-03-01
author: Name Surname
note type: sample
tag:
  - " #sample/Project1 "
  - " #sample/compound "
project:
  name: Project1
  type: undefined
series:
  part of collection: false
  name: none
  type: none
  number of samples: 0
  sample id: 0
sample:
  name: MM-PRO1-cp001
  type: compound
  description: 
  chemical formula: $qsdqd$
  molar mass: ~~ g/mol
  density: ~~ g/cm3
  educts: 
    -
      name: Chemical1
      mass: ~~
      volume: ~~

process:
  # Process parameters for Process1
  Process1:
    name: Process1
    type: calcination
    description: ~~
    devices: 
    parameters:
      parameter_1: ~~ unit
      parameter_2: ~~ unit
      parameter_3: ~~ unit

---

```button
name Add Analysis
type command
action Templater: Insert Templates/Insert assets/templates/New Analysis.md
class accent-button
```


> [!Example] TOC
> - [[#Properties]]
> - [[#Processing]]
> - [[#My Notes]]
> - [[#Characterization]]
> - [[#Electrochemical Characterization]]

## Properties

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/sample", {});
```

## Processing

- [[Process1]]
```dataviewjs
await dv.view("/Assets/javascript/dataview/views/process", { key: "process" });
```


## My Notes

[object Promise]

## Characterization

```dataview
TABLE WITHOUT ID
    file.link as Analysis,
    analysis["method"] as Method,
    analysis["operator"] as Operator,
    analysis["date"] as Date,
    analysis["status"] as Status
FROM #analysis
WHERE sample.name = this.sample.name
```

## Electrochemical Characterization

```dataview
TABLE WITHOUT ID
    file.link as Analysis,
    sample["working electrode"]["name"] as "WE Electrode",
    sample["electrolyte"]["name"] as Electrolyte,
    analysis["method"] as Method,
    analysis["parameters"]["cycles"] as Cycles,
    analysis["parameters"]["Ewe min"] as Ewe_min,
    analysis["parameters"]["Ewe max"] as Ewe_max,
    analysis["date"] as Date,
    analysis["status"] as Status
FROM #analysis
WHERE sample.name = this.sample.name AND analysis.method = "GCPL"
```

```dataviewjs
await dv.view("/Assets/javascript/dataview/views/note_footer", {});
```