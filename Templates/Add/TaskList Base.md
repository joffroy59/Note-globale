<%*
const question = "Tasks ?"
let taskEnable = (await tp.system.suggester((item) => item, ['Yes','No'])) === 'Yes'

if (taskEnable) { -%>
---
## Tasks
- [ ] Task1 ➕ <% tp.date.now("YYYY-MM-DD") %>

---

## Tasks Detail


<%* } -%>