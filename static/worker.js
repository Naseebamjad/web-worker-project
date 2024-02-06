// worker.js
onmessage = function (event) {
   
  let sum = 0;
  for (let i = 0; i < 9999999999; i++) {
       sum += i;

  }
  
    postMessage({ result: 'Processing with Web Workers completed.' });
  };
  