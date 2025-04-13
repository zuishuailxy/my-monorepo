const targetMap = new WeakMap();
const depsMap = new Map(); // store the dep
let dep = new Set(); // store the effect function

let activeEffect = null;
function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}

const track = (target, key) => {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    dep.add(activeEffect);
  }
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

// ref
function ref(raw) {
  const r = {
    get value() {
      track(r, "value");
      return raw;
    },
    set value(newValue) {
      if (raw !== newValue) {
        raw = newValue;
        trigger(r, "value");
      }
    },
  };

  return r;
}

// computed
function computed(getter) {
  let result = ref();
  effect(() => (result.value = getter()));

  return result;
}

// Test
let product = reactive({
  price: 5,
  quantity: 2,
});
let salePrice = computed(() => product.price * 0.9);
let total = computed(() => salePrice.value * product.quantity);

console.log("before:", total.value, salePrice.value);
product.quantity = 3;
console.log("after quantity:", total.value, salePrice.value);

product.price = 10;
console.log("after price:", total.value, salePrice.value);

product.name = "pc";
console.log("name", product.name);
product.name = "Socks";
console.log("name", product.name);
