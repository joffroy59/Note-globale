
<%* 
const { app } = this;
const fs = require('fs');

const currentFilePath = tp.file.path();
const currentFolderPath = currentFilePath.substring(0, currentFilePath.lastIndexOf("/"));

// Define the path for your attachments folder
// TODO get folder from Obsidian config
const attachmentsFolder = currentFolderPath + "/attachments"; 

// Ensure the attachments folder exists
if (!fs.existsSync(attachmentsFolder)) {
    fs.mkdirSync(attachmentsFolder);
}

// Generate a unique filename for the image
const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
const imageFilename = `image_${timestamp}.png`;
const imagePath = `${attachmentsFolder}/${imageFilename}`;

// Save clipboard content as an image file
const clipboardImage = tp.clipboard.readImage();
clipboardImage.toFile(imagePath);

// Insert the image link into the note
tR += `![[Attachments/${imageFilename}]]`;
%>
