const wrapper = document.querySelector(".wrapper");


/*
const addWelcome = () => {

	const div = document.createElement("div");
	const h1 = document.createElement("h1");
	h1.innerText = 'Hello';
	h1.className = "classHELLO";
	div.append(h1);
	wrapper.append(div);	
	/*
	const div = `
	<div class="hello">
		<h1>Hello</h1>
	</div>
	`;
	wrapper.innerHTML = div;
};

setTimeout(addWelcome, 5000);
*/

const friends = ["me", "ted", "nano", "mark"];

const list = `
	<h1>People i love</h1>
	<ul>
		${friends.map(friend => `<li>${friend}</li>`).join("")}
	</ul>
`;


wrapper.innetHTML = list;



