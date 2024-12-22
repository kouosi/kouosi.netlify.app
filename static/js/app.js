function changeIcon() {
    if (document.body.dataset.theme == 'light') {
        themeSwitcher.innerHTML = "<i class='fa fa-sun'></i>";
    } else {
        themeSwitcher.innerHTML = "<i class='fa fa-moon'></i>";
    }
}
const themeSwitcher = document.getElementById('theme-switcher');

document.body.dataset.theme = localStorage.getItem('theme') || 'dark';
changeIcon();

themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    changeIcon();
});
