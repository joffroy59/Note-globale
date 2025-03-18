<%*
let tast_name = await tp.system.prompt("Task name", "Task 1", true, false);
let prompt = await tp.system.prompt("Task name", "Task 1", true, true);
console.log(navigator.clipboard)
-%>
##### <% tast_name %>
---

```ad-warning
title: <% tast_name %>
collapse: Open

Info : < info >

> [!cite]- Execution
>  < image execution>
>  

> [!cite]- Résultat
>  < image resultat>

> [!cite]- Prompt
>  <% prompt %>
```

<%*
const clipboardItems = await navigator.clipboard.read();
for (const item of clipboardItems) {
    if (item.types.includes('image/png')) {
        const blob = await item.getType('image/png');
        const arrayBuffer = await blob.arrayBuffer();
        //const base64String = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
        const imagePath = `attachments/${tp.date.now("YYYYMMDDHHmmss")}.png`;
        //await tp.system.save_file(imagePath, base64String, "base64");
        await tp.file.create_new(...new Uint8Array(arrayBuffer), imagePath);
        tR += `![Image](${imagePath})`;
    }
}
%>


<% tp.system.clipboard() %>



Time : ****

###### Commentaire
 global : rien a voir | Identique |  similaire | pas dans le meme style | n'importe quoi 
 

--- 
![[Assets/banner/Style1/Success.png|200]]
![[Assets/banner/Style1/Failure.png|200]]

--- 
