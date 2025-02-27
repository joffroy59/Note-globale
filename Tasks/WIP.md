---
tags:
  - tasks
  - template
  - status/wip
---
# Dataview - not completed contains text tag todo

```dataview
TASK
FROM ""
WHERE  contains(upper(text), "WIP")
SORT text ASC
```
