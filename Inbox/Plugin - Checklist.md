![[Plugin - Checklist-1740619499180.png|400]]


con,figuration 
all tags 
```dataview 
TABLE WITHOUT ID length(rows) as "Tag count", join(rows.unique, ", ") as "Unique tags"
WHERE file.etags
FLATTEN file.etags as tag
GROUP BY tag
FLATTEN rows.tag[0] as unique
GROUP BY true
```

static liste
	#AcronisTrueImage, #aide, #appartement, #assignment, #backlog, #backup, #banner, #besoin, #button, #clippings, #copilot-conversation, #cpu, #dailynotes, #dashboard, #dataviewjs, #DesignYouCanFeel, #done, #embed, #excalidraw, #Exemple, #fix, #fixed, #flux_NF4, #flux_NF4➕, #generation, #git, #guide, #help, #helper, #IA, #IA/application, #IA/civitai, #IA/comfyui, #IA/comfyui/flux, #IA/images, #IA/model, #IA/prompt, #IA/StabilityMatrix, #icon, #idea, #images, #Intel, #link, #list, #liste, #local, #mcl/list-grid, #mistral, #not_working, #note, #notion, #obsidian, #office, #ollama, #online, #openwebui, #Other, #pc, #placeholder, #plugins, #podium, #problem, #procedure, #query, #reparation, #result, #sandbox, #slide, #slow_obsidian, #someday, #star, #status/open, #status/wip, #table, #tag1, #tag2, #tags, #task, #tasks, #template, #template/insert, #templater, #test, #tocheck, #todo, #toview, #txt2img, #validated, #voiture, #wins, #workflow
trie

```
#todo
#appartement
#dailynotes
#fix
#idea
#note
#obsidian
#Other
#plugins
#problem
#status/open
#status/wip
#task
#tasks
#tocheck
#toview
#voiture
#workflow
```


pourquoi je ne vois pas status/wip ???? 
mais todo semble ok a verifier dans le detail 