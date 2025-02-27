---
tags:
  - status/wip
---
```dataview
table file.name as "Note", file.cday as "Date de création"
from ""
where contains(file.tags, "#problem")
sort file.cday desc


```

```dataview
table file.name as "Note", file.cday as "Date de création", file.content as "Contenu"
from ""
where contains(file.tags, "#problem")
sort file.cday desc

```

## Liste de problèmes
- dsfdfsdf
	- arf
- arf



## Research
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet eu nibh sed pharetra. Praesent sit amet magna vel lacus condimentum finibus id ac quam. Cras eu eros posuere, molestie lacus at, laoreet purus. Phasellus sodales ex turpis, et vehicula mauris euismod at. Duis pulvinar dictum commodo. Etiam auctor urna non nunc mollis mollis. #tag1
-  Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed erat nulla, scelerisque at consectetur vel, lobortis quis mauris. Donec ut vehicula augue. Donec nec elit malesuada, posuere nibh vitae, lacinia elit. #tag2 
- Nulla dignissim cursus pretium. Proin luctus ante sed mi elementum feugiat. Vivamus quis eros a nisi condimentum maximus vitae nec tortor. Sed fermentum felis eu tristique vehicula. #tag1
- Aenean eu magna vel nulla vulputate faucibus. Suspendisse laoreet et est eu dapibus. Sed hendrerit lorem tristique sapien vestibulum congue. Nulla facilisi. Integer id sollicitudin lorem. Integer egestas porta mauris, nec condimentum enim sodales quis.



```query
tag:#problem -tag:#daily-note

```






