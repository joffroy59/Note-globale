
vior [[Refactor - include workflowDirList et autre liste (TEST)]]

let workflowDirList = [
	"D:\\IA\\ComfyUI workflow\\Download",
	"D:\\IA\\ComfyUI workflow\\totest",
	"D:\\IA\\ComfyUI workflow",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow_auto",
	"D:\\dev-data\\IA\\Stability Matrix Project\\workflow"]

comme ELN  [[ELN Settings]]

```js
  // get META DATA of ELN SETTINGS
  const eln_settings_file = "Assets/ELN Settings.md";
  const eln_settings_tfile = app.vault.getAbstractFileByPath(eln_settings_file);
  const eln_settings = app.metadataCache.getFileCache(eln_settings_tfile).frontmatter;

```


a tester 