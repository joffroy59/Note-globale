<%*
const question = "Tasks ?"
let taskEnable = (await tp.system.suggester(['Yes','No'],['Yes','No'], false, question)) === 'Yes';

<%* if (taskEnable) { -%>
---
## Tasks
- [ ] Task1
---
<%* } -%>