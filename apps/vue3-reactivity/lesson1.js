const targetMap = new WeakMap();

const depsMap = new Map(); // store the dep

let dep = new Set(); // store the effect function

let effect = () => {
  const { price, quantity } = product;
  total = price * quantity;

  console.log("total:", total);
};

const track = (target, key) => {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(effect);
};
const trigger = (target, key) => {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => effect());
  }
};

// test
let product = { price: 5, quantity: 2 };
let total = 0;

track(product, "quantity");
trigger(product, "quantity");

product.quantity = 3;
// 这里会发生变化 因为trigger会触发effect函数
trigger(product, "quantity");
