<template>
  <div class="infoContent">
    <p v-for="textLine in text" v-bind:key="textLine">{{ textLine }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class InfoContent extends Vue {
  @Prop({ required: true }) public readonly text!: string[];
}
</script>
<style scoped>
.infoTitle {
  font-family: "Raleway", "sans-serif";
  line-height: 1.5;
  font-size: 1.5rem;
  color: #737373;
  overflow-wrap: break-word;
}
</style>
