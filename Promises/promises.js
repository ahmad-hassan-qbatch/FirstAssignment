//  promises will always be running even the function who calls the promises ended or not
function test1(params) {
  const promise = new Promise((resolve, reject) => {
    if (1) {
      setTimeout(() => {
        resolve("OK");
      }, 2000);
    } else {
      reject("not ok");
    }
  });

  res = promise.then((response) => {
    setTimeout(() => {
      console.log("second");
      console.log(response);
      return 2;
    }, 2000);
  });

  setTimeout(() => {
    console.log(res, "Inside Function");
  }, 5000);
  return res;
}
let a = test1();
console.log(a, "Outside Function");