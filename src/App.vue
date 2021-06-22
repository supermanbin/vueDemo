<template>
  <a-layout>
    <a-layout-sider>
      <a-menu
        theme="dark"
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
      >
        <a-sub-menu key="sub1">
          <template v-slot:title>
            <ThunderboltFilled /><span>SVG</span>
          </template>
          <a-menu-item key="1">
            <router-link to="/svg/line">Line</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/svg/shape">Shape</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/svg/path">Path</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item>
          <router-link to="/grid">Grid</router-link>
        </a-menu-item>

        <a-menu-item>
          <router-link to="/auth">Auth</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">Vue Demo</a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ThunderboltFilled } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    ThunderboltFilled,
  },
});
</script>

<style scoped>
.menu {
  padding: 0;
  list-style: none;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  background: #fff;
}
.content {
  height: calc(100vh - 60px);
  padding: 10px;
  box-sizing: border-box;
}
</style>
