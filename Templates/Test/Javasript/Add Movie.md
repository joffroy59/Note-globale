---

<%-*

// The configuration object containing several elements.
let config = {
    // The note location.
    path: {
        prompt: true,
        display: "Where to store the movie note?",
        value: "Wip/Test/Movies"
    },

    // The note file name.
    filename: {
        prompt: false,
        display: "How to name the movie note?",
        value: "{{ title }}"
    },

    // The movie title.
    title: {
        prompt: true,
        display: "What is the tile of the movie?",
        value: "The Movie Title"
    },

    // The genre of the movie.
    genre: {
        prompt: true,
        display: "What is the movie genre?",
        value: ["comedy", "thriller", "other"],
        check: (value) => value === "thriller" ? false : true
    },

    // Whether the movie is re-watchable.
    rewatch: {
        prompt: true,
        display: "Would I rewatch this movie?",
        value: ["yes", "no"],
        text: ["Without a doubt, yes!", "I mean... it was okay, but..."]
    },

    // A general summary of the movie.
    summary: {
        prompt: true,
        display: "What is the summary of the movie?",
        value: "{{ title }}",
        multiline: true,
    }
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
tags:
  - test
---

# 🎥 <% config.title.value %>

## Description

- Genre: #<% config.genre.value %>
- Re-watchable: <% config.rewatch.value %>

## Summary

<% config.summary.value %>

