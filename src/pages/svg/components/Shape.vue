<template>
  <g color="#666">
    <circle :cx="100" :cy="100" r="20" class="aaa" fill="currentcolor" />
  </g>
  <g>
    <ellipse :cx="20" :cy="20" rx="20" ry="20" fill="#84FF68" />
    <polyline points="0,100 50,25 50,75 100,0" />
    <polyline points="100,150 50, 200 100, 100" />
  </g>
</template>

<style scoped>
.aaa {
  animation: bord 1s linear infinite alternate;
}
@keyframes bord {
  0% {
    r: 20;
  }
  100% {
    r: 30;
  }
}
</style>
