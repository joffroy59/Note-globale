<%*
const filePath = `Daily Note/${tp.date.now("YYYY")}/${tp.date.now("MM")}/${tp.date.now("WW")}/📒${tp.date.now("YYYY-MM-DD")}.md`;
const fileContent = await app.vault.read(await app.vault.getAbstractFileByPath(filePath));
const targetHeader = "### Missed Tasks";
const headerIndex = fileContent.indexOf(targetHeader);

if (headerIndex === -1) {
    tR += "Header not found.";
} else {
    const restOfFile = fileContent.slice(headerIndex + targetHeader.length);
    const nextHeaderIndex = restOfFile.search(/#+ /);
    const headerContent = nextHeaderIndex === -1 ? restOfFile.trim() : restOfFile.slice(0, nextHeaderIndex).trim();
    tR += headerContent;

    // Create new content without the header content
    const newFileContent = fileContent.slice(0, headerIndex + targetHeader.length) + restOfFile.slice(nextHeaderIndex === -1 ? restOfFile.length : nextHeaderIndex + targetHeader.length).trim();
    await app.vault.modify(await app.vault.getAbstractFileByPath(filePath), newFileContent);

}
%>


