class MyPromise {
  static allSettled(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let count = 0;
      promises.forEach((promise, index) => {
        promise
          .then((value) => {
            results[index] = { status: "fulfilled", value };
          })
          .catch((reason) => {
            results[index] = { status: "rejected", reason };
          })
          .finally(() => {
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          });
      });
    });
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let count = 0;

      promises.forEach((promise, index) => {
        promise
          .then((value) => {
            results[index] = value;
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          })
          .catch((reason) => {
            reject(reason);
          });
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        Promise.resolve(promise)

          .then((value) => {
            resolve(value);
          })
          .catch((reason) => {
            reject(reason);
          });
      });
    });
  }
}
