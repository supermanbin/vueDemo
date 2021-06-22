<template>
  <g>
    <!-- <path
      d="M10 10 H100 V100 h-90 z"
      fill="rgba(0,0,0,0.5)"
      stroke="red"
      stroke-width="2"
    />
    <path
      d="M 100 26.283 C 100 126.283 162.236 -134.332 228.608 128.541 C 294.98 191.414 348.774 130.128 348.774 130.128"
      class="shape"
    /> -->
  </g>
</template>
<script>
export default {
  methods: {
    clickHandle(e) {
      console.log(e.target);
    },
  },
};
</script>
<style scoped>
.shape {
  fill: rgba(0, 0, 0, 0.5);
  stroke: red;
  stroke-width: 2;
  transition: all ease 0.3s;
  cursor: pointer;
}
.shape:hover {
  fill: rgba(0, 0, 0, 1);
}
</style>
