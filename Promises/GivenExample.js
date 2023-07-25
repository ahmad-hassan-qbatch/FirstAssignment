async function func2() {
  console.log("HERE 3");
};

async function func1() {
  await func2();
  console.log("HERE 2");
  console.log("HERE 4");
  
};

async function main() {
  console.log("HERE 1");
  console.log("HERE 5");
  func1();
};

main();