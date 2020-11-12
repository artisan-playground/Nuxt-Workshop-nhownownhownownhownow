<template>
  <div>
    <h1>HELLO</h1>
    <div>Prop: {{ data }}</div>
    <div>Prop: {{ fromParent() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Number, default: 2 },
    fromParent: {
      type: Function,
    },
  },
  mounted() {
    this.calculate();
  },
  methods: {
    calculate() {
      let result = Math.pow(this.data, 2);
      this.$emit("result", result);
    },
  },
};
</script>

<style></style>
