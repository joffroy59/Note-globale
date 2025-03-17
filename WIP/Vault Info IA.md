# 〽️ Stats IA

```dataview
LIST
FROM "IA/ComfyUI"
FLATTEN list(split(file.folder, "/")) as folderParts
GROUP BY folderParts[1] as sub-folder
```

```dataview
LIST
FROM "IA/ComfyUI"
GROUP BY replace(file.folder, "IA/ComfyUI", "") as subfolder
WHERE contains(subfolder, "/")
LIMIT 10
```

| Task |            |                     |                                                  |     |
| ---- | ---------- | ------------------- | ------------------------------------------------ | --- |
| IA   |            |                     | **`$=dv.pages('"IA"').length`**                  |     |
|      | IA/ComfyUI |                     | **`$=dv.pages('"IA/ComfyUI"').length`**          |     |
|      |            | IA/ComfyUI/civitai  | **`$=dv.pages('"IA/ComfyUI/civitai"').length`**  |     |
|      |            | IA/ComfyUI/Flux     | **`$=dv.pages('"IA/ComfyUI/Flux"').length`**     |     |
|      |            | IA/ComfyUI/Flux NF4 | **`$=dv.pages('"IA/ComfyUI/Flux NF4"').length`** |     |
|      |            | IA/ComfyUI/WAN 2.1  | **`$=dv.pages('"IA/ComfyUI/WAN 2.1"').length`**  |     |
|      |            | IA/ComfyUI/workflow | **`$=dv.pages('"IA/ComfyUI/workflow"').length`** |     |
