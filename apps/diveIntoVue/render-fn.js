import { h } from "vue";

const Stack = {
  render() {
    const slot = this.$slots.default ? this.$slots.default({}) : [];
    return h(
      "div",
      { class: "stack" },
      slot.map((child) => {
        return h("div", { class: `mt-${this.$props.size}` }, [child]);
      })
    );
  },
};
