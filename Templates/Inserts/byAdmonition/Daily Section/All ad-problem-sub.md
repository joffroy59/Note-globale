
```dataviewjs
// You can update this to filter as you like - filtering for just your daily notes would be good
const pages = dv.pages('#dailynotes')

// This regex will find the contents of a specifically formatted callout
//const regex = /\n```ad-(\w+)\r?\ntitle:(.+?)\r?\n(\*.+?)```/

//const regex = /\n.*Today.*/


const ad_name = "warning"

const ad_start = "```ad-" + ad_name + "\ntitle: "
const ad_end   = "\n```\n"

const regex = /\n[`]+ad-(warning)\r?\ntitle:(.+?)[\r?\n]*[`]+/

const rows = []
for (const page of pages) {
    const file = app.vault.getAbstractFileByPath(page.file.path)
    // Read the file contents
    const contents = await app.vault.read(file)
    // Extract the summary via regex
    for (const callout of contents.match(new RegExp(regex, 'sg')) || []) {
        const match = callout.match(new RegExp(regex, 's')) 
        rows.push([page.file.link, 
	        ad_start+match[2]+ad_end, 
	        match[3] 
	        ])
    }
}

dv.table(['Link', 'Content',  'Bullets' ], rows
);

```
