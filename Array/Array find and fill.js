const friends = [
  "moon@gmail.com",
  "trump@gmail.com",
  "putin@gmail.com",
  "mb@gmail.com"
];

const target =friends.find(friend => friend.includes("gmail.com"));

console.log(target);

const check = () => friends.findIndex(friend => friend.includes("gmail.com"));

let target2 = check();

console.log(target2);

const username = friends[target2].split("@")[0];

const email = "korea.com";

friends[target2] = `${username}@${email}`;

friends.fill("*".repeat(5), 1, 3);

console.log(friends);