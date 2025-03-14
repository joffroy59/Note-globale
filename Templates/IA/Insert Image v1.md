<%*
let prompt = "Image:"
let image = await tp.system.prompt(prompt);
const regex = /^[a-zA-Z]/;
let is_internal = regex.test(image) 

let isVideo = image.includes(".mp4") || image.includes("youtube.com") || image.includes("vimeo.com");
%>
<%*   if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%*   } else if(image) { -%>
<%*     if(is_internal) { -%>
![[<% image %>|400]]
<%*     } else { -%>
![|400](<% image %>)
<%*     } -%>
<%*   } -%>