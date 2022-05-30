<template>
  <div>
    <b-row
      ><b-col>
        <info-title style="margin-bottom: 5rem" text="ABOUT ME" />
        <info-content :text="textAboutMe" />
        <p style="color: #a64c3a; margin-top: 2rem">Groetjes, Jolien</p>
      </b-col>

      <b-col><img width="100%" alt="me" src="../assets/me.jpg" /> </b-col
    ></b-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import InfoTitle from "../components/InfoTitle.vue";
import InfoContent from "../components/InfoContent.vue";
@Component({
  components: {
    InfoTitle,
    InfoContent,
  },
})
export default class About extends Vue {
  public get textAboutMe(): string[] {
    return [
      "Hoi hoi.",

      "Ik ben Jolien, in het dagelijkse leven werk ik als laborante.",

      "Mijn vriend, mijn hond en ik wonen sinds enkele jaren in Waregem. ",

      "Tijdens de coronacrisis pikte ik mijn passie voor breien terug op en ontdekte ik ook de wonderen van alpacawol. Met mijn bijberoep wil ik dan ook een oplossing bieden voor diegenen waarbij wol zoooo kriebelt zoals bij mij. ",
    ];
  }
}
</script>
<style></style>
