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


Time : ****

###### Commentaire
 global : rien a voir | Identique |  similaire | pas dans le meme style | n'importe quoi 
 

--- 
![[Assets/banner/Style1/Success.png|200]]
![[Assets/banner/Style1/Failure.png|200]]

--- 
