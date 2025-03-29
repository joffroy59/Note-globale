
<%* 

async function getFolderPAth(tp){
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
	return  attachmentsFolder
}

async function getFolderPAthRelative(tp){
	const fs = require('fs');
	
	const currentFolderPathRelative = await tp.file.folder(true)
	const currentFilePath = tp.file.path();
	const currentFolderPath = currentFilePath.substring(0, currentFilePath.lastIndexOf("/"));
	
	// Define the path for your attachments folder
	// TODO get folder from Obsidian config
	const attachmentsFolderRelative = currentFolderPathRelative + "/attachments"; 
		const attachmentsFolder = currentFolderPath + "/attachments"; 
	// Ensure the attachments folder exists
	if (!fs.existsSync(attachmentsFolder)) {
	    fs.mkdirSync(attachmentsFolder);
	}
	return  attachmentsFolderRelative
}

function getImageName(){
	// Generate a unique filename for the image
	const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
	const imageFilename = `image_${timestamp}.png`;
	return imageFilename 
}

async function GetImageFullPath(tp){

	let attachmentsFolder = await getFolderPAthRelative(tp)
	let imageFilename = await getImageName()

	return `${attachmentsFolder}/${imageFilename}`
}

async function getImageFromclipboard(app, imagePath){
	console.log("Get Image From Clipboard")
	const clipboardItems = await navigator.clipboard.read();
	for (const clipboardItem of clipboardItems) {
		for (const type of clipboardItem.types) {
			console.log(type)
			if (type.startsWith('image/')) {
				const blob = await clipboardItem.getType(type);
				const arrayBuffer = await blob.arrayBuffer();
				const buffer = Buffer.from(arrayBuffer);
				
				// Generate a unique file name

				const filePath = imagePath;
					console.log(`filePath=${filePath}`)
				// Create a new file in the Vault
				const vault = app.vault;
				await vault.createBinary(filePath, buffer);
				
				// Notify the user
				new Notice(`Image saved to ${filePath}`);
				return;
			}
			
		}
	}

}

const { app } = this;



const imagePath = await GetImageFullPath(tp)
console.log(imagePath)
console.log(await getFolderPAthRelative(tp))

// Save clipboard content as an image file
//const clipboardImage = navigator.clipboard.readText();
//clipboardImage.toFile(imagePath);

getImageFromclipboard(app, await GetImageFullPath(tp))

// Insert the image link into the note
//tR += `![[Attachments/${imageFilename}]]`;
%>
