const targetMap = new WeakMap();
const depsMap = new Map(); // store the dep
let dep = new Set(); // store the effect function

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

// proxy and reflect
function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },

    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (oldValue != value) {
        trigger(target, key);
      }
      return result;
    },
  };
  return new Proxy(target, handler);
}

// Test
let product = reactive({
  price: 5,
  quantity: 2,
});
let total = 0;

let effect = () => {
  total = product.price * product.quantity;
};
effect();
console.log("total", total);

product.price = 10;
console.log("total", total);
