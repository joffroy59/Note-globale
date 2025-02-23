<%-*
// The configuration object containing several elements.
let config = {
    // The note location.
    path: {
        prompt: true,
        display: "Where to store the note?",
        value: "IA/ComfyUI/Flux"
    },

    // The note file name.
    filename: {
        prompt: true,
        display: "How to name the note (Workflow)?",
        value: "{{ title }}"
    },

    title: {
        prompt: false,
        display: "What is the tile of the workflow?",
        value: "The Workflow Name"
    },


}

// Proceed with the note creation gracefully.
try {
    // Create the note or insert the template.
    await tp.user.makeNoteWithPrompting(tp, config)

    // Let the user know if the operation succeeded.
    new Notice(`Created note '${config.title.value}'.`)
} catch(error) {
    // Inform the user.
    new Notice(error.message)

    // Stop the execution.
    return
}
_%>

---
<%*
let workflowFolder= "file:///D:%5Cdev-data%5CIA%5CStability%20Matrix%20Project%5Cworkflow%5C"

let title = config.filename.value
let worflow = config.filename.value

let defaultValue = "WIP IA"  
let entree = await tp.system.prompt("Enter a content :","[[" + title + "]]");
if (!entree) entree = defaultValue


let image = await tp.system.prompt("Image");
let note = await tp.system.prompt("Note");
%>
---
<%* tp.file.cursor() %> 
`````ad-example
title: WIP IA - ComfyUI - Flux
collapse: open

- [/] <% entree %>  #status/wip #IA #IA/comfyui/flux  ➕ <% tp.date.now() %> 🛫 <% tp.date.now() %>

```ad-tip
source: 

worflow: <% worflow %> 
[<% worflow %>.json](<% workflowFolder + worflow.replace(/ /g, '%20') %>.json)


image: ![](<% image %>)


```

```ad-note
title: Note
<% note %> 

```

`````

[[<% title %>]]

---
creation date:: [[<%tp.file.creation_date("YYYY")%>/<%tp.file.creation_date("MM")%>/<%tp.file.creation_date("WW")%>/📒<%tp.file.creation_date("YYYY-MM-DD")%>]]  <%tp.file.creation_date("HH:mm")%>



