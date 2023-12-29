// Toggle the visibility of the menu on small screens
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});
