<%*
let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a value :");
if (!entree) entree = defaultValue
%>
`````ad-example
title: WIP IA - Model
collapse: open

- [/] <% entree %>  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
worflow: 
image: 
```

```ad-note
title: Note

```

`````
