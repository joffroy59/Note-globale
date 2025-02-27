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
 

````

---

Template: [[Liste all tags]]
QuickAdd ; Insert - Liste All Tags


Test:  ✅
```dataview 
TABLE WITHOUT ID length(rows) as "Tag count", join(rows.unique, ", ") as "Unique tags"
WHERE file.etags
FLATTEN file.etags as tag
GROUP BY tag
FLATTEN rows.tag[0] as unique
GROUP BY true
```




