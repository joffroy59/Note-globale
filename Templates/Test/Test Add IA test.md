<%-*
// Get a movie summary based on its title.
async function getMovieSummary(prompt, systemPrompt = "Your role is to identify a movie by its title and provide a succinct summary.") {
    // The OpenAI API endpoint.
    const openAiURL = "https://api.openai.com/v1/chat/completions";

    // The OpenAI API request headers.
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    };

    // The OpenAI API request body.
    const body = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt }
        ]
    });

    // Send the request to the OpenAI API.
    const response = await fetch(openAiURL, {
        method: "POST",
        headers: headers,
        body: body
    });

    // Parse the response object.
    const data = await response.json();

    // Get the assistant response.
    const assistantResponse = data.choices[0].message.content;

    // Return the response.
    return assistantResponse;
}

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

# 🎥 <% config.title.value %>

## Description

- Genre: #<% config.genre.value %>
- Re-watchable: <% config.rewatch.value %>

