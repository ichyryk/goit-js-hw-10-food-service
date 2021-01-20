const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

const checkbox = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

// bodyRef.classList.add(Theme.LIGHT)

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    bodyRef.classList.add(Theme.DARK)
    checkbox.checked = true;
}

function changeTheme() {
    if (checkbox.checked) {
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK)
        localStorage.clear()
    }
}

checkbox.addEventListener('change', changeTheme)

