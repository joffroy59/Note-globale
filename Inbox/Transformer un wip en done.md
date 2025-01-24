# Demande le chat 

``````ad-info
j'ai des admonition sur une page qui sont de type wip ou done et je voudrais creer un bouton dans un abmonition wip pour le transformer en admonition done et le mettre dans le sous titre ## DONE

21:30

![LeChat Logo](https://chat.mistral.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fle-chat-logo-dark.ff291bca.png&w=48&q=75)

Pour transformer une admonition de type "WIP" en une admonition de type "DONE" et la déplacer sous le sous-titre "## DONE" dans Obsidian, vous pouvez utiliser un plugin comme Templater ou un script personnalisé. Voici comment vous pouvez le faire avec Templater :

### Étape 1 : Installer Templater

1. Allez dans les paramètres d'Obsidian.
2. Cliquez sur "Community plugins".
3. Cliquez sur "Browse" et recherchez "Templater".
4. Installez et activez le plugin Templater.

### Étape 2 : Créer un template pour le bouton

1. Créez un nouveau fichier dans votre dossier de templates (généralement `Templates`).
2. Nommez ce fichier, par exemple, `wip_to_done_button.md`.
3. Ajoutez le code suivant dans ce fichier :

```markdown
<button class="wip-to-done-button">Transformer en DONE</button>

<script>
document.querySelectorAll('.wip-to-done-button').forEach(button => {
    button.addEventListener('click', () => {
        const admonition = button.closest('.admonition');
        if (admonition) {
            const content = admonition.innerHTML;
            const doneSection = document.createElement('div');
            doneSection.innerHTML = `## DONE\n\n!!! done "Done"\n${content}\n`;
            admonition.parentNode.insertBefore(doneSection, admonition.nextSibling);
            admonition.remove();
        }
    });
});
</script>

```

### Étape 3 : Utiliser le template dans vos notes

1. Dans votre note, ajoutez une admonition de type "WIP" et incluez le template avec le bouton :

```markdown
!!! wip "Work In Progress"
    <%* include("Templates/wip_to_done_button.md") %>
    Ceci est une admonition WIP.

```

### Étape 4 : Activer Templater dans votre note

1. Assurez-vous que Templater est activé pour votre note. Vous pouvez le faire en ajoutant le tag `#templater` en haut de votre note.

### Exemple complet

Voici un exemple complet de note avec une admonition "WIP" et le bouton pour la transformer en "DONE" :

```markdown
# Ma Note

!!! wip "Work In Progress"
    <%* include("Templates/wip_to_done_button.md") %>
    Ceci est une admonition WIP.

## DONE

```

Lorsque vous cliquez sur le bouton "Transformer en DONE", l'admonition "WIP" sera transformée en une admonition "DONE" et déplacée sous le sous-titre "## DONE".

### Remarque

Ce script utilise du JavaScript pour manipuler le DOM. Assurez-vous que votre environnement Obsidian permet l'exécution de scripts JavaScript. Si vous rencontrez des problèmes, vous pouvez ajuster le script ou utiliser des plugins supplémentaires pour gérer les interactions plus complexes.
``````

# Exécution

### Étape 2 : Créer un template pour le bouton
- [x] [[wip_to_done_button]] #done 

### Étape 3 : Utiliser le template dans vos notes
- [ ] [[Inbox/Test]]
### Étape 4 : Activer Templater dans votre note
- [ ] [[Inbox/Test]]