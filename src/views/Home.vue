<template>
  <div class="home">
    <b-row
      ><b-col>
        <info-title text="OVER BEESTIGE BREISELS" style="margin-bottom: 6rem" />
        <info-content :text="introText" /> </b-col
      ><b-col>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="2000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
        >
          <!-- Slides with custom text -->
          <b-carousel-slide :img-src="require('../assets/baret9.jpeg')" />
          <b-carousel-slide :img-src="require('../assets/hoofdband1.jpeg')" />
          <b-carousel-slide :img-src="require('../assets/muts1.jpeg')" />
        </b-carousel> </b-col
    ></b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InfoTitle from "../components/InfoTitle.vue";
import InfoContent from "../components/InfoContent.vue";

@Component({
  components: {
    InfoTitle,
    InfoContent,
  },
})
export default class Home extends Vue {
  public get introText(): string[] {
    return [
      "Heb jij net als ik ook al vele trucjes geprobeerd om die mutsen, sjaals en truien aangenaam dragen te maken?",

      "Wil je een warm en zacht knitje zonder dat u zich hoeft zorgen te maken over dat irriterend gevoel?",

      "Dan heb ik voor jou de ideale oplossing. Ik maak handgebreide accessoires uit alpacawol en merinowol. Deze zijn hypoallergeen. ",
    ];
  }
}
</script>
