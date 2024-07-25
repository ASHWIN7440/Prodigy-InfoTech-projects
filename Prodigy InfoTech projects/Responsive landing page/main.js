function toggleLightDark() {
    document.body.classList.toggle('light');
    const iconLight = document.querySelector('.icon-light');
    const iconDark = document.querySelector('.icon-dark');
    if (document.body.classList.contains('light')) {
        iconLight.style.display = 'none';
        iconDark.style.display = 'block';
    } else {
        iconLight.style.display = 'block';
        iconDark.style.display = 'none';
    }
}
