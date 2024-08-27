// Dark mode
const toggleDarkMode = document.getElementById('toggleDarkMode');

toggleDarkMode.addEventListener('click', () => {
    const btnText = document.getElementById('btnText');
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        btnText.textContent = 'Dark Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        btnText.textContent = 'Light Mode';
    }
});