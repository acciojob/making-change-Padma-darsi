const makeChange = (c) => {
  // your name here
	let result = {
    q: Math.floor(c / 25),
    d: Math.floor((c % 25) / 10),
    n: Math.floor((c % 25 % 10) / 5),
    p: c % 25 % 10 % 5
  };
  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
