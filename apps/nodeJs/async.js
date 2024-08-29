// console.log("Hello => number 1");
// setImmediate(() => {
//     console.log("Running before the timeout => number 3");
// });
// setTimeout(() => {
//     console.log("The timeout running last => number 4");
// }, 0);
// process.nextTick(() => {
//     console.log("Running at next tick => number 2");
// });


// Test
// setImmediate(function A() {
//   console.log(1);
//   setImmediate(function B(){console.log(2);});
// });

// setTimeout(function timeout() {
//   console.log('TIMEOUT FIRED');
// }, 0);


setImmediate(function (){
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
  });

  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);
});