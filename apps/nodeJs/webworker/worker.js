// 监听主线程发送的消息
onmessage = function(event) {
  console.log('Worker received:', event.data);
  
  // 执行一些计算或任务
  let result = `Worker processed: ${event.data.toUpperCase()}`;

  // 向主线程发回消息
  postMessage(result);
};