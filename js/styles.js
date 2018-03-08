var btn = document.getElementById("btn");
btn.addEventListener('click', function () {
var permintaanku = new XMLHttpRequest();
permintaanku.open('GET','dbs/animal1.json');
permintaanku.onload = function() {
	var dataku = JSON.parse(permintaanku.responseText);
	renderHTML(dataku);
};
permintaanku.send();
});

function renderHTML(data){
	var tampilkan = "";
	for (){};
	document.getElementById("animal-info")
		.insertAdjacentHTML('beforeend', tampilkan );
}
