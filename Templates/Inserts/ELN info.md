<%*
const defaultValeur = "Template"
let template_name = await tp.system.prompt("Nom du Template", defaultValeur);
-%>
ELN info:
  template:  <% template_name %>
  version: 0.3.2
  author: Jerome Offroy
  modified: <% tp.date.now() %>
  copyright: GNU Affero General Public License v3.0
  
  