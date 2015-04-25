var xhr = new XMLHttpRequest();
xhr.open('GET', 'menu.xml', false);
var menu = '';
xhr.send();
var xmlDoc = xhr.responseXML;
var menuList = xmlDoc.getElementsByTagName('menu')[0].getElementsByTagName('name');
for (var i = 0; i < menuList.length; i++) {
    menu = menu +
        '<div class="menu">' +
        menuList[i].childNodes[0].nodeValue +
        '</div>';
}
document.write(menu);
