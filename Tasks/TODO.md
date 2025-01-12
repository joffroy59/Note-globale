---
tags:
  - tasks
  - template
---
# Todo

```dataview
TASK
WHERE !completed
 AND contains(upper(text), "#TODO")
SORT text ASC

```



```dataview
TASK
FROM "Daily Note"
WHERE !completed

SORT text ASC

```

