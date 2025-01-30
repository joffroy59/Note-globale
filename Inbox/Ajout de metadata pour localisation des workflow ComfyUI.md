---
workflow_dir: D:\dev-data\IA\Stability Matrix Project\workflow_auto
---
pour avoir le chemin de stockage local 

pourra servir pour automatiser et pour trouver les workflow vite 

--- 

- [x] [[Insert Wip IA - IA civitai]] ✅ 2025-01-31
- [x] [[Insert Wip IA - ComFyUI - Flux]] car besoin de workflow base folder ✅ 2025-01-31

--- 
### Test local 

[C](file:///C:%5C)
[`= this.workflow_dir`](file:///)
--- 
Metadata Ajoutées 

| metadata                     | value                                                 |
| :--------------------------- | :---------------------------------------------------- |
| **workflow_dir**             | D:\dev-data\IA\Stability Matrix Project\workflow_auto |
| **stability_project_path**   | D:\dev-data\IA\Stability Matrix Project               |

---

- [ ] try solution 
```embed
title: "Insert metadata as a link to a file/folder path - Help - Obsidian Forum"
image: "https://forum.obsidian.md/uploads/default/original/3X/b/a/ba1a1301f580d34a881803aa5ed8cf7ff3cdf0ef.png"
description: "I tried your version and also based on it I tried to write it in different ways to turn it into a hyperlink. Not sure but it seems like this function applies to files inside the Obsidian file manager, it doesn’t work as a link to a local file in the computer file system, or I’m doing something wrong 🤔"
url: "https://forum.obsidian.md/t/insert-metadata-as-a-link-to-a-file-folder-path/89789/4"
```


❌ using link 
[`= this.workflow_dir`]((`= link(this.workflow_dir)`))

❌ avec code source
[test](`= this.workflow_dir`)

✅ auter avec source 
`= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`

✅ sans passer par source 
`= "[Workflow]" + "(<file:///" + this.workflow_dir + ">)"`




