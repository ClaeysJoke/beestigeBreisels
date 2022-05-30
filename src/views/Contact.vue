<template>
  <div>
    <b-row style="margin-top: 8rem">
      <b-col style="max-width: 20rem"
        ><img width="100%" alt="me" src="../assets/logo.png"
      /></b-col>
      <b-col style="max-width: 60rem">
        <b-row style="margin-bottom: 2rem">
          <b-col><info-title text="GET IN TOUCH" /></b-col>
        </b-row>
        <b-row
          ><b-col><input-field :placeholder="'Naam'" /></b-col>
          <b-col><input-field :placeholder="'E-mailadres'" /></b-col
        ></b-row>
        <b-row
          ><b-col
            ><input-field
              :text="true"
              :placeholder="'Bericht'" /></b-col></b-row
      ></b-col>
    </b-row>
    <b-row
      ><b-col></b-col
      ><b-col cols="auto"
        ><b-button style="background-color: #a64c3a; border-color: #a64c3a"
          >Verzenden</b-button
        ></b-col
      ></b-row
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import InfoTitle from "../components/InfoTitle.vue";
import InfoContent from "../components/InfoContent.vue";
import InputField from "../components/InputField.vue";
@Component({
  components: {
    InfoTitle,
    InfoContent,
    InputField,
  },
})
export default class Contact extends Vue {
  private name: string = "";
}
</script>
