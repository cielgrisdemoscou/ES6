const friends = ["ted", "nano"];

const newFriends = [...friends, "dal"];

console.log(newFriends);

const ted = {
	username: "ted"
};

console.log({ ...nico, password: 123});

const user = {
	username: "ted",
	age: 23,
	/* lastName: lastName >!== "" ? lastName : undefined; */
	...(lastName !== "" && { lastname })
};





