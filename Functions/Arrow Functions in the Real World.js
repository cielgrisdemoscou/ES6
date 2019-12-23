const emails = {"haut@gmail.com", "cielbleu@naver.com", "cielgris@apple.com", "ted@google.com"};

/*
const foundMail = emails.find(item => item.includes("@gmail.com")):
console.log(foundMail);


const noGmail = emails.filter(email => !email.includes("gmail.com"));						  
console.log(noGmail);


const cleaned = []
emails.forEach(email => {
	cleaned.push(email.split("@")[0]);
});

console.log(cleaned);

const cleaned = emails.map(email => email.split("@")[0]);
*/

const cleaned = emails.map((email, index) => {(
	username: email.split("@")[0],
	index
)});

console.table(cleaned);