<template>
  <rect
    :x="0"
    :y="0"
    :width="200"
    :height="200"
    rx="15"
    ry="15"
    fill="#eee"
    stroke="#0E7EF5"
    stroke-width="2"
    stroke-dashoffset="1"
    stroke-dasharray="5 10"
    stroke-linecap="round"
    class="rect"
  />
</template>

<script>
export default {};
</script>

<style scoped>
.rect {
  transform: translate(10px, 10px);
  animation: dashoffset 1s linear infinite;
}
@keyframes dashoffset {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 15;
  }
}
</style>
