// sidebard
var toggleBtn = document.querySelector('#about');
var closer = document.querySelector('#closer');
var sidebar = document.querySelector('sidebar');


toggleBtn.addEventListener('click', function () {
	sidebar.classList.toggle('is-closed');
})

closer.addEventListener('click', function () {
	sidebar.classList.toggle('is-closed');
})

var instructBtn = document.querySelector('#insClose');
instructBtn.addEventListener('click', function () {
	$("#instruction").show(0, function () {
		$("#instruction").fadeOut(500);
	});
})

$(document).ready(function () {

	/*! Fades in page on load */
	$('body').css('display', 'none');
	$('body').fadeIn(2000);

});