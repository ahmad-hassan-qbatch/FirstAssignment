let First1 = new Promise((resolve, reject) => {
  resolve("First 1");
});

let First2 = new Promise((resolve, reject) => {
  resolve("First 2");
});

let First3 = new Promise((resolve, reject) => {
  resolve("First 3");
});

let Second1 = new Promise((resolve, reject) => {
  resolve("Second 1");
});

let Second2 = new Promise((resolve, reject) => {
  reject("Second 2");
});

let Second3 = new Promise((resolve, reject) => {
  resolve("Second 3");
});
let forFirst = [First1, First2, First3];

let forSecond = [Second1, Second2, Second3];
async function PromiseAllFirst() {
  const First = await Promise.all(forFirst);
  console.log(First);
}

async function PromiseAllSecond() {
  const Second = await Promise.all(forSecond);
  console.log(Second);
}

async function PromiseAllSettleFirst() {
  const First = await Promise.allSettled(forFirst);
  console.log(First);
}

async function PromiseAllSettleSecond() {
  const Second = await Promise.allSettled(forSecond);
  console.log(Second);
}
async function PromiseAnyFirst() {
  const First = await Promise.any(forFirst);
  console.log(First);
}

async function PromiseAnySecond() {
  const Second = await Promise.any(forSecond);
  console.log(Second);
}
// PromiseAllFirst()
// PromiseAllSecond()

// PromiseAllSettleFirst()
// PromiseAllSettleSecond()

PromiseAnyFirst();
PromiseAnySecond()
