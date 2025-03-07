````ad-tip
Source : <% url %>

<%* if (isVideo) { -%>
<video controls>
  <source src="<% image %>" type="video/mp4">
  Your browser does not support the video tag.
</video>
<%* } else { -%>
![](<% image %>)
<%* } -%>
````