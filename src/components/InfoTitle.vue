<template>
  <div class="infoTitle">
    {{ text }}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class InfoTitle extends Vue {
  @Prop({ required: true }) public readonly text!: string;
}
</script>
<style scoped>
.infoTitle {
  font-size: 1.8rem;
  color: #a64c3a;
  font-weight: 400;
  font-style: normal;
}
</style>
