### Test avec Comfy UI directement Workflow

<%*
let time = await tp.system.prompt("Time", "xx.yy seconds", true, true);
-%>

`BUTTON[add-wip-ia-comfyui-workflow-image-result-success]`

```````ad-success

### Result Image with workflow Success

#### .

time:  **<% time %>**
<%* tR+= await tp.file.include(`[[Insert - Success - M]]`); -%>
```````

<%*
tR+= await tp.file.include(`[[Button - IA - Comfy UI - Test]]`);
-%>

