<template>
  <div style="margin-bottom: 20px">
    <b-row>
      <b-col
        ><b-form-input
          v-if="!text"
          v-model="value"
          :placeholder="placeholder"
        ></b-form-input>
        <b-form-textarea
          v-if="text"
          v-model="value"
          :placeholder="placeholder"
          rows="6"
          max-rows="10"
        ></b-form-textarea>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class InputField extends Vue {
  @Prop({ required: true }) public readonly placeholder!: string;
  @Prop({ default: false }) public readonly text!: boolean;

  private value: string = "";
}
</script>
