let up = document.querySelector(".scroll");
window.onscroll = function () {
	this.scrollY >= 600 ? up.classList.add("up") : up.classList.remove("up");
};
up.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
