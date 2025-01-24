

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


```ad-note
<button class="wip-to-done-button">Transformer en DONE</button>
```




