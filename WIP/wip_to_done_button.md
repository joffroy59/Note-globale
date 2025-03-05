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


### Lorem ipsum dolor sit amet, consectetur adipiscing...

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

