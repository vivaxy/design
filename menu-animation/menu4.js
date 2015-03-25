var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","menu.xml",false);
var menu = "";
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML;
var menuList = xmlDoc.getElementsByTagName("menu")[0].getElementsByTagName("name");
for (var i=0;i<menuList.length;i++){
	menu = menu +
		"<div class='menu'>" +
		menuList[i].childNodes[0].nodeValue +
		"</div>";
}
document.write(menu);