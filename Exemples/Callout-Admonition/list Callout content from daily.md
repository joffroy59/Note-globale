```embed
title: "Extract the contents of callout boxes from daily notes"
image: ""
description: "From this post, here's an example Dataview script to extract the contents of callout boxes from daily notes, and present the result in a table: Download here: https://drive.google.com/file/d/1HvWT_..."
url: "https://share.note.sx/1f2nsian"
```

[[All ad-attention]]

##All ad-*
```dataviewjs
// You can update this to filter as you like - filtering for just your daily notes would be good
const pages = dv.pages('#dailynotes')

// This regex will find the contents of a specifically formatted callout
//const regex = /\n```ad-(\w+)\r?\ntitle:(.+?)\r?\n(\*.+?)```/

//const regex = /\n.*Today.*/
const regex = /\n```ad-(\w+)\r?\ntitle:(.+?)[\r?\n]*```/

const rows = []
for (const page of pages) {
    const file = app.vault.getAbstractFileByPath(page.file.path)
    // Read the file contents
    const contents = await app.vault.read(file)
    // Extract the summary via regex
    for (const callout of contents.match(new RegExp(regex, 'sg')) || []) {
        const match = callout.match(new RegExp(regex, 's')) 
        rows.push([match[2], match[1], match[3], page.file.link])
    }
}

dv.table(['Title', 'Type', 'Bullets', 'Link'], rows)
```

