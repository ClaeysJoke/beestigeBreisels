<template>
  <div id="app">
    <tabs />
    <div class="content-wrapper" :style="styleForContent">
      <router-view />
    </div>
    <footer style="text-align: center">© 2021 Beestige Breisels</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Tabs from "./components/Tabs.vue";

@Component({
  components: {
    Tabs,
  },
})
export default class App extends Vue {
  public get windowHeight(): number {
    return window.innerHeight;
  }
  public get styleForContent(): string {
    return "height: " + (this.windowHeight - 200) + "px";
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fcf0f0;
  height: 100%;
}

.navbar {
  background-color: #a64c3a !important;
}

.nav-item.nav-item.nav-item a {
  color: white;
}

.content-wrapper {
  margin-left: 15rem;
  margin-right: 15rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  height: 100%;
  overflow: auto;
}

html {
  background-color: #fcf0f0;
}

footer {
  position: absolute;
  bottom: 0;
  height: 50px;
  background: #a64c3a;
  color: white;
  width: 100%;
}
</style>
