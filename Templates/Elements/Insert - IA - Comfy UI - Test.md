### Test avec Comfy UI directement Workflow

```ad-info
collapse: closed

pour trouver un meilleur workflow pour  Openweb UI
```
<%*
let prompt = await tp.system.prompt("Prompt", null, true, true);
let workflow_basedir = "D:%5CIA%5CComfyUI%20workflow%5CDownload"
let workflow = await tp.system.prompt("Worflow file name  (no extension)", "");
let workflow_path = `${workflow_basedir}%5C${workflow}`
-%>

```````ad-success

```ad-tldr
title: Workflow
collapse: closed

workflow:
<%* if (workflow == "") { %>
![[Fichier Json du Worfklow (Export Comfy UI)]]
<%* } else { %>
⭐🚧 [<% workflow %>.](file:///<% workflow_path %>.json)
<%* } %>
```

---

```ad-seealso
title: config
collapse: closed


{Image}

```

---

```ad-info
title: prompt
collapse: closed

 <% prompt %>

```

---

```ad-success
title: Resultat

### Result Image with workflow


#### .

```

![[Assets/banner/Style1/Success.png|300]]

---

```ad-failure
title: Resultat


{Image}

```

time: **todo**

![[Assets/banner/Style1/Failure.png|300]]

---

```````

`BUTTON[add-wip-ia-comfyui-workflow-image-result]`

<%*
tR+= await tp.file.include(`[[Button - IA - Comfy UI - Test]]`);
-%>
