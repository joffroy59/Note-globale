---
tags:
  - IA
  - result
---
 To effectively manage your ideas and knowledge in Obsidian, use the following Markdown syntax:

- Create notes or pages for each topic by simply typing `#` followed by the title of the note (e.g., `# Meeting Minutes from Jan 5, 2023`). Note titles preceded with hashes correspond to headings, and you can have up to six levels: `#`, `##`, `###`, `####`, `#####`, and `######`.

- Use Backlinks to establish relationships between notes. Mention a different note by enclosing its title within double square brackets (e.g., `[[Meeting Minutes from Jan 4, 2023]]`). By doing this, the linked note will automatically appear under the "Backlink" section of that page.

- Utilize tags to categorize your notes and make it easier to find related information. Add a tag by enclosing the tag name within double parentheses followed by a space (e.g., `(Project A)`). You can also create new tags by defining them when they are first used. For example:

  ```
  # Meeting with John
  This is the meeting note for the discussion with John on Project A. ((Project A))
  ```

- Make use of links within your notes to navigate and associate knowledge. Similar to Backlinks, regular links can be created using Markdown or Obsidian Aliases format: `[alias](location)`. For example, you might link to an external resource like this:

  ```
  [Wikipedia Entry on Machine Learning](https://en.wikipedia.org/wiki/Machine_Learning)
  ```

- Use Inline Math and LaTeX notation for equations, formulas, and mathematical expressions. You can write an equation in a separate line like this:

  $$w_{ij}^{ext{new}} = w_{ij}^{ext{current}} + etacdotdelta_jcdot x_{ij}$$
  And provide an explanation inline, e.g.: ($eta$ represents the learning rate, $delta_j$ denotes the error term, and $x_{ij}$ is the input)

- Don't forget to take advantage of Obsidian's advanced features like keywords, custom templates, and graph view for a more efficient and enjoyable experience.
arf