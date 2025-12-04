const themes = ["blackpinkmode", "pinkmode", "nightmode", "kaerumode", "purplemode", "pastelmode"];
const body = document.body;
let currentThemeIndex = parseInt(localStorage.getItem("themeIndex"), 10);
if (isNaN(currentThemeIndex)) {
    currentThemeIndex = 0;
}
body.classList.add(themes[currentThemeIndex]);

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
    localStorage.setItem("themeIndex", currentThemeIndex);
}
