// Immediately Invoked Function Expressions IIFE
/*
Immediately Invoked Function Expressions (IIFE) are 
JavaScript functions that are executed immediately 
after they are defined. They are typically used to 
create a local scope for variables to prevent them 
from polluting the global scope.
*/
(function chai() {
  console.log("DB CONNECTED 2");
})();

(() => {
  console.log("DB CONNECTED");
})();

((NAME) => {
  console.log(`DB CONNECTED ${NAME}`);
})("VIANY");
