---
ELN info:
  template: <% tp.file.title %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0

project:
  name: Domotique

tags:
  - status/wip
  - domotique/action

---
<%*
let baseFolder = "Domotique/Actions"

let title = tp.file.title
let defaultTitle = "Untitled"
if (title.startsWith(defaultTitle)) {
	title = await tp.system.prompt("Title from page");
	if (!title) title = defaultTitle
	await tp.file.rename(`${title}`);
}

let actionDesc = await tp.system.prompt("Action Description");
let note = await tp.system.prompt("Note", null, true, true);
-%>

<%* if (actionDesc) { %>
````ad-tip
Action : <% actionDesc %>

````
<%* } %>
````ad-note
title: Note
<% note %>

````
