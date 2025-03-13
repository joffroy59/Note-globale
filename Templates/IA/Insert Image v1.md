---
type: add
---
<%*
let image = await tp.system.prompt("Image");

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
%>
<%*   if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%*   } else if(image) { -%>
![|400](<% image %>)
<%*   } -%>