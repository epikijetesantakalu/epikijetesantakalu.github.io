const themes = ["pinkmode", "purplemode", "kaerumode"];
let currentThemeIndex = 0;
const body = document.body;

function copyText() {
	navigator.clipboard.writeText(
		`<a href="https://epiku.net/"><img src="https://epiku.net/sitelen/88x31.gif" height="31" alt="button to epiku.net"></a>`
	);
	alert("Copied to clipboard!");
}

function colours() {
	body.classList.remove(themes[currentThemeIndex]);
	currentThemeIndex = (currentThemeIndex + 1) % themes.length;
	body.classList.add(themes[currentThemeIndex]);
}
