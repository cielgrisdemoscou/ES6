const friends = ["ted", "nano", "john", "max"];

/*
// 1) forEach(Can't stop loop)
for(let i = 0; i < friends.length; i++){
	console.log(friends[i]);
}


const add = (c, i, a) => console.log(c, i, a);
// current, index, array

friends.forEach(add);

*/

// 2) for...of(can stop loop) Support Array, Iterables, NodeList, Strings
for (const friend of friends){
  console.log(friend);
}

for (const letter of "hello this") {
  console.log(letter);
}

for (const friend of friends) {
  if (friend === "john") {
    break;
  } else {
    console.log(friend);
  }
}