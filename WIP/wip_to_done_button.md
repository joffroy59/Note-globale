---
tags:
  - status/wip
---
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
