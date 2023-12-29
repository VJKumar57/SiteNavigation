// Toggle the visibility of the menu on small screens
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('main-content').innerHTML = this.responseText;
        }
    };
    
    // Adjust the path accordingly
    xhttp.open("GET", page + '.html', true);
    xhttp.send();
}

// Toggle the visibility of the menu on small screens
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});
