<%*
const question = "Tasks ?"
let taskEnable = (await tp.system.suggester(['Yes','No'],['Yes','No'], false, question)) === 'Yes';

if (taskEnable) { -%>
---
## Tasks
- [ ] Integrate in Comfy UI  workflow ➕ <% tp.date.now("YYYY-MM-DD") %>
- [ ] Test ➕ <% tp.date.now("YYYY-MM-DD") %>
---
<%* } -%>

---

