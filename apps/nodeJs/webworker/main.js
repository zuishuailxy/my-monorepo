const worker = new Worker('worker.js');
worker.postMessage('Hello World');

worker.onmessage = function (event) {
  console.log('Received from worker:', event.data);
};

worker.onerror = function(error) {
  console.error('Worker error:', error.message);
};