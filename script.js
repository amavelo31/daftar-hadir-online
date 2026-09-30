const formAbsen = document.getElementById("formAbsen");
const inputNama = document.getElementById("nama");
const listKehadiran = document.getElementById("listKehadiran");

formAbsen.addEventListener("submit", function (event) {
	event.preventDefault();

	const nama = inputNama.value.trim();

	if (!nama) {
		return;
	}

	const itemKehadiran = document.createElement("li");
	itemKehadiran.textContent = nama;
	listKehadiran.appendChild(itemKehadiran);

	inputNama.value = "";
	inputNama.focus();
});
