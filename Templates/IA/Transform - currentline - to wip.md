<%*
// Get the current line
let currentLine = tp.file.cursor.line_content;

// Find the last element under the "🚧 Wip ———————" section
// let wipSection = tp.file.content.split("## 🚧 Wip ———————")[1];
// let lastElement = wipSection.split("\n").filter(line => line.trim().startsWith("- [/]")).pop();
 

// Find the index of the last element
//let lastElementIndex = wipSection.split("\n").indexOf(lastElement);

// Cut the current line
//tp.file.delete_line(tp.file.cursor.line_index);

// Insert the current line under the last element
//tp.file.insert_text_at(lastElementIndex + 1, currentLine + "\n");

let entree = await tp.system.prompt("Enter a value :", "feeeee");

%>

