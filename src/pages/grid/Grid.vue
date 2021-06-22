<template>
  <div class="grid">
    <div>grid - 1</div>
    <div>grid - 2</div>
    <div>grid - 3</div>
    <div>grid - 4</div>
    <div>grid - 5</div>
    <div>grid - 6</div>
    <div>grid - 7</div>
    <div>grid - 8</div>
    <div>grid - 9</div>
    <div>grid - 10</div>
    <div>grid - 11</div>
  </div>

  <div class="chat-list">
    <div class="chat-item">
      00010001000100010001000100010001000100010001000100010001000100010001000100010001000100010001
    </div>
    <div class="chat-item">0002</div>
    <div class="chat-item">0003</div>
    <div class="chat-item">0004</div>
    <div class="chat-item">0005</div>
  </div>

  <div class="nine-grid">
    <div class="grid-item">0001</div>
    <div class="grid-item">0002</div>
    <div class="grid-item">0003</div>
    <div class="grid-item">0004</div>
    <div class="grid-item">0005</div>
    <div class="grid-item">0006</div>
    <div class="grid-item">0007</div>
    <div class="grid-item">0008</div>
  </div>
  <a-button type="primary" class="roll-action" @click="rolling">start</a-button>
  <div class="dis-table">
    <div class="index">1</div>
    <div class="cover"></div>
    <div class="detail">
      <h3>000001</h3>
      <div class="infos">
        <p class="auther"></p>
        <div>This is detail...</div>
      </div>
    </div>
  </div>
  <div class="dis-table">
    <div class="index">2</div>
    <div class="cover"></div>
    <div class="detail">
      <h3>000002</h3>
      <div class="infos">
        <p class="auther"></p>
        <div>This is detail...</div>
      </div>
    </div>
  </div>

  <!-- main header sidebar footer -->
  <div class="main">
    <div class="header">header</div>
    <div class="sidebar">sidebar</div>
    <div class="container">container</div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Grid",
  methods: {
    rolling() {
      anime({
        targets: ".grid-item",
        backgroundColor: [{ value: "#000" }, { value: "#ff0" }],
        // direction: "alternate",
        easing: "linear",
        // loop: true,
        // duration: 200,
        // delay: anime.stagger(200),
        delay: function (el, i, l) {
          console.log(l);
          return i * 100;
        },
        endDelay: function (el, i) {
          return i * 100;
        },
      });
    },
  },
};
</script>

<style scoped>
.main {
  display: grid;
  height: 100vh;
  margin: 20px 0;
  grid-template: 100px 1fr 120px / 300px 1fr;
}
.header {
  background: #fff;
  grid-column: 1 / 3;
}
.sidebar {
  background: rgb(11, 118, 233);
  color: #fff;
  width: 300px;
}
.container {
  /* grid-column: 2 / 3; */
}
.footer {
  background: #333;
  grid-column: 1 / 3;
}

.grid {
  display: grid;
  height: 300px;
  /* grid-template-columns: [a] minmax(80px, auto) [b] repeat(3, 1fr); */
  /* grid-template-columns: repeat(4, 1fr);
  grid-template-rows: minmax(80px, auto) 1fr; */
  grid-template: minmax(80px, auto) 1fr 1fr / minmax(80px, auto) 1fr 1fr; /* grid-template: areas rows / columns */
  column-gap: 10px;
  row-gap: 15px;
  /* grid-template-areas: "a-a a-b a-c a-d"; */
  /* align-items: flex-start; */
  /* transition: grid-template-columns ease-in 1s, row-gap ease-in 1s; */
}
.grid > div {
  padding: 12px;
  border-radius: 5px;
  background: #fff;
}
.grid > div:first-child {
  /* grid-column-start: b;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3; */
  /* grid-column: a / b;
  grid-row: 1 / 3;
  background: #ccc; */
  /* align-self: end; */
}
/* .grid > div:nth-child(2) {
  height: 120px;
} */

.dis-table {
  display: table;
  width: 100%;
  margin: 1px 0 0;
}
.dis-table > div {
  display: table-cell;
}
.index {
  width: 80px;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
  background: #fff;
}
.cover {
  position: relative;
  width: 100px;
  height: 140px;
  background: #eee;
  vertical-align: middle;
  padding: 0;
}
.cover::before {
  position: absolute;
  content: "";
  width: 10%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 20%,
    rgba(0, 0, 0, 0) 100%
  );
}
.detail {
  vertical-align: middle;
  background: #fff;
  padding: 0 0 0 20px;
}

.chat-list {
  display: grid;
  row-gap: 15px;
  padding: 20px 0;
  grid-template-rows: minmax(0, auto);
  grid-template-columns: minmax(0, auto);
}
.chat-item {
  background: rgb(170, 188, 249);
  padding: 15px;
  justify-self: flex-start;
  border-radius: 10px 10px 10px 0;
  margin: 0 100px 0 0;
  word-break: break-all;
}
.chat-item:nth-child(even) {
  justify-self: flex-end;
  border-radius: 10px 10px 0 10px;
  margin: 0 0 0 100px;
}
.roll-action {
  vertical-align: bottom;
  margin: 0 20px;
}
.nine-grid {
  display: inline-grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  column-gap: 10px;
  row-gap: 10px;
}
.nine-grid .grid-item {
  width: 100px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nine-grid .grid-item:nth-child(4) {
  grid-column: 3 / 4;
}
.nine-grid .grid-item:nth-child(8) {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
.nine-grid .grid-item:nth-child(5) {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}
.nine-grid .grid-item:nth-child(6) {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
.nine-grid .grid-item:nth-child(7) {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}
/* .nine-grid .grid-item:nth-child(1) {
  animation-delay: 0;
}
.nine-grid .grid-item:nth-child(2) {
  animation-delay: 0.25s;
}
.nine-grid .grid-item:nth-child(3) {
  animation-delay: 0.5s;
}

.nine-grid .grid-item:nth-child(5) {
  animation-delay: 0.75s;
}
.nine-grid .grid-item:nth-child(8) {
  animation-delay: 1s;
}
.nine-grid .grid-item:nth-child(7) {
  animation-delay: 1.25s;
}
.nine-grid .grid-item:nth-child(6) {
  animation-delay: 1.5s;
} */
@keyframes rollPannel {
  0% {
    background: #000;
  }
  100% {
    background: rgb(255, 217, 0);
  }
}
</style>
