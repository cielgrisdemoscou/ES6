const infiniteArgs = (...lee) => console.log(lee);
infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);

const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
};
bestFriendMaker("lee", "doing", "going");