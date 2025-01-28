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
        display: "How to name the note?",
        value: "{{ title }}"
    },

    // The movie title.
    title: {
        prompt: true,
        display: "What is the tile of the workflow?",
        value: "The Workflow Name"
    },


}

// Proceed with the note creation gracefully.
try {
    // Create the note or insert the template.
    await tp.user.makeNoteWithPrompting(tp, config)

    // Let the user know if the operation succeeded.
    new Notice(`Created note '${config.filename.value}'.`)
} catch(error) {
    // Inform the user.
    new Notice(error.message)

    // Stop the execution.
    return
}
_%>

# 🧠 <% config.title.value %>

## Description

TODO

