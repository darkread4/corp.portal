function myFunction(){
	document.getElementById("myFilter").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.filter__btn')) {
		var filter = document.getElementsByClassName("filter__content");
		var i;
		for (i = 0; i < filter.length; i++){
			var openFilter = filter[i];
			if (openFilter.classList.contains('show')) {
				openFilter.classList.remove('show');
			}
		}
	}
}