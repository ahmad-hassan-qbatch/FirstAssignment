// if we do not have set time inside the fun2 the arrow function then
// it is passed to event loop before the console Third else the console 2nd will be displayed after third

function withSetTimeOut(fun2) {
  console.log("with First");
  fun2();
  console.log("with Third");
}

function withOutSetTimeOut(fun2) {
  console.log("with out First");
  fun2();
  console.log("with out Third");
}

withSetTimeOut(() => {
  setTimeout(() => {
    console.log("with Second");
  }, 0);
});

withOutSetTimeOut(() => {
  console.log("with out Second");
});
