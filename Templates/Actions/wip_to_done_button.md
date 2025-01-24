<button class="wip-to-done-button">Transformer en DONE</button>

<script>
document.querySelectorAll('.wip-to-done-button').forEach(button => {
    button.addEventListener('click', () => {
        const admonition = button.closest('.admonition');
        if (admonition) {
		    alert('here');
        }
    });
});
</script>
