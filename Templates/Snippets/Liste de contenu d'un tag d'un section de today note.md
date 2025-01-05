---
tags:
  - template
---

<%*
const fs = require('fs');
const path = require('path');
const notesPath = tp.file.folder(true);
const files = fs.readdirSync(notesPath);

let problemSections = [];

files.forEach(file => {
  if (path.extname(file) === '.md') {
    const filePath = path.join(notesPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const problemSection = content.match(/## 🚨Problème ——————————————[\s\S]*?##/);
    if (problemSection) {
      problemSections.push({
        note: file,
        content: problemSection[0]
      });
    }
  }
});

problemSections.forEach(section => {
  tR += `## ${section.note}\n\n${section.content}\n\n`;
});
%>
