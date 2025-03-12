---
tags:
  - template
  - template/insert
  - embed
  - link

type: fragment
---
<%*
// Demander à l'utilisateur de fournir un lien
let userLink = await tp.system.prompt("Entrez le lien à embarquer :");

// Embarquer le lien en utilisant la commande "Link Embedder: Embed link"
await tp.commands.executeCommand("link-embedder:embed-link", { url: userLink });
%>
