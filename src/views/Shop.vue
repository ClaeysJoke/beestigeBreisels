<template>
  <div>
    <b-card-group deck>
      <b-card
        title="Baret"
        :img-src="require('../assets/baret9.jpeg')"
        img-alt="Baret"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text> € 30,00 </b-card-text>

        <b-button href="#" variant="primary">In winkelwagen</b-button>
      </b-card>
      <b-card
        title="Hoofdband"
        :img-src="require('../assets/hoofdband1.jpeg')"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text> € 20,00 </b-card-text>

        <b-button href="#" variant="primary">In winkelwagen</b-button>
      </b-card>
      <b-card
        title="Muts"
        :img-src="require('../assets/muts1.jpeg')"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text> € 35,00 </b-card-text>

        <b-button href="#" variant="primary">In winkelwagen</b-button>
      </b-card>
    </b-card-group>
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
export default class Shop extends Vue {
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
