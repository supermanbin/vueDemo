<template>
  <div class="wrapper">
    <div class="tool-bar">
      <animation-formatter-number :number="12345"></animation-formatter-number>
      <br />
      <!-- 测试font-awesome -->
      <font-awesome-icon :icon="['fas', 'plus']" />
      <a-button size="small" :disabled="minusDisabled" @click="minusHandle">
        <template #icon><MinusOutlined /></template>
      </a-button>
      <a-input :value="zoom" size="small" style="width: 60px" />
      <a-button size="small" :disabled="plusDisabled" @click="addHandle">
        <template #icon><PlusOutlined /></template>
      </a-button>
    </div>

    <svg
      id="canvas"
      :viewBox="viewBox"
      x="0"
      y="0"
      :width="width"
      :height="height"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      class="svg"
      preserveAspectRatio="xMidYMid meet"
      ref="svgRef"
      @click="clickHandle"
    >
      <path d=""></path>
      <!-- <DialogNodePanel :position="{ x: 100, y: 100 }" /> -->
      <router-view></router-view>
    </svg>
  </div>
</template>

<script>
import _ from "lodash";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons-vue";
import AnimationFormatterNumber from "../../components/AnimationFormatterNumber";

export default {
  name: "Svg",
  components: {
    MinusOutlined,
    PlusOutlined,
    AnimationFormatterNumber,
  },
  data: () => ({
    viewBox: "0 0 0 0",
    width: 0,
    height: 0,
    zoom: 100,
    zoomLevel: 1,
    plusDisabled: false,
    minusDisabled: false,
    mousePos: {
      x: 0,
      y: 0,
    },
  }),
  watch: {
    // zoom(val) {
    // if (val === 200) {
    //   this.plusDisabled = true;
    // } else {
    //   this.plusDisabled = false;
    // }
    // },
    mousePos(newV, oldV) {
      console.log(newV, oldV);
      this.mousePos.x = newV.x - oldV.x;
    },
  },
  computed: {},
  beforeCreate() {
    console.log("============> beforeCreate", this.$el);
  },
  created() {
    console.log("============> created", this.$el);
    this.width = document.documentElement.clientWidth - 220;
    this.height = document.documentElement.clientHeight - 84;
    this.viewBox = `0 0 ${window.innerWidth - 220} ${window.innerHeight - 84}`;
  },
  beforeMount() {
    console.log("============> beforeMount", this.$el);
  },
  mounted() {
    console.log("============> mounted", this.$el);
    window.addEventListener(
      "resize",
      _.debounce(() => {
        this.width = document.documentElement.clientWidth - 220;
        this.height = document.documentElement.clientHeight - 84;
        this.viewBox = `0 0 ${window.innerWidth - 220} ${
          window.innerHeight - 84
        }`;
      }, 50)
    );
  },
  beforeUpdate() {
    console.log("============> beforeUpdate", this.$el);
  },
  updated() {
    console.log("============> updated", this.$el);
  },
  methods: {
    clickHandle(e) {
      this.mousePos.x = e.offsetX;
      this.mousePos.y = e.offsetY;
      console.log(e);
    },
    renderLine() {
      const { svgRef } = this.$refs;
      svgRef.appendChild();
    },
    minusHandle() {
      this.zoom = this.zoom - 1000;
      if (!this.zoom) {
        this.zoom = 0;
        this.viewBox = "0 0 0 0";
        return;
      }
      this.zoomLevel = this.zoomLevel + 0.1;
      this.viewBox = `0 0 ${window.innerWidth * this.zoomLevel} ${
        window.innerHeight * this.zoomLevel
      }`;
    },
    addHandle() {
      if (this.zoom === 200) return;
      this.zoom = this.zoom + 10000;
      this.zoomLevel = this.zoomLevel - 0.1;
      this.viewBox = `0 0 ${window.innerWidth * this.zoomLevel} ${
        window.innerHeight * this.zoomLevel
      }`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
svg#canvas {
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.tool-bar {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
