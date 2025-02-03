<%*
let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>
`````ad-example
title: WIP IA - Model
collapse: open

- [/] [[<% baseFolder %>/<% title %>]]  #status/wip #IA #IA/model  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

---

```ad-tip
title: Stability Matrix - ComfyUI
collapse: Closed

- `= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`
- `= "[Stability Project]" + "(<file:///" + this.stability_project_path + ">)"`*
```
`````