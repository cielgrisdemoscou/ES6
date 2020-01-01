const settings = {
	color: {
		theme: "dark"
	}
};

/*
const chosenColor = settings.theme || "light";;
*/

/*
const {
	color: { theme : chosenColor = "light" }
} = settings;
*/

let chosenColor = "blue";

console.log(chosenColor);

({
	color: { theme : chosenColor = "light" }
} = settings);

console.log(chosenColor);

