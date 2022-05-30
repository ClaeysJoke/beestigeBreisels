<template>
  <div>
    <b-container>
      <b-row>
        <b-col style="margin-right: 20px">
          <b-row
            ><info-title text="MATERIAAL" />
            <info-content :text="textForMaterial"
          /></b-row>
          <b-row
            ><info-title text="VERZENDING" />
            <info-content :text="textForSending"
          /></b-row>
        </b-col>
        <b-col style="margin-right: 20px"
          ><b-row
            ><info-title text="VERZORGING" /> <info-content :text="textForCare"
          /></b-row>
        </b-col>
        <b-col
          ><b-row
            ><info-title text="MAAT" />
            <info-content :text="textForSize" /></b-row
          ><b-row
            ><info-title text="RETOUR" />
            <info-content :text="textForReturn" /></b-row
        ></b-col>
      </b-row>
    </b-container>
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
export default class Info extends Vue {
  public get textForMaterial(): string[] {
    return [
      "Door gebruik te maken van merinowol en alpacawol in mijn breisels zorg ik ervoor dat je geen kriebels hebt.",

      "Merinowol is thermo-regulerend, antibacterieel en heeft een ademend vermogen.",

      "Door deze fijne vezels is de wol zeer buigzaam en gaat ze ook minder rap irriteren.",

      "Alpacawol is hypoallergeen (door gebrek aan lanoline) en kriebelt dus niet. Deze wol is bovendien zeer warm, licht en zacht. ",

      "In elk product is alpaca- en merinowol verwerkt waardoor je een warm, zacht en comfortabel wintergevoel heeft.",
    ];
  }

  public get textForCare(): string[] {
    return [
      "Ik werk met natuurlijke wol waardoor het aangeraden wordt het knitje niet teveel te wassen.",

      "Wol is zelfreinigend en wordt dus niet snel vuil. Aangezien de knitjes uit een dierlijke vezel bestaan",

      "volstaat het om deze af en toe buiten in de wind te laten opfrissen. ",

      "Is het knitje toch vuil dan wordt een handwas met een ph neutraal wasmiddel aangeraden. ",

      "Druk het water uit het knitje en rol het in een handdoek (niet wringen!!). Laat het plat in de wind ",

      "drogen om nare geurtjes te voorkomen. ",

      "Is jou knitje zijn vorm verloren dan kan u altijd snel wat stomen met een zakdoek ertussen. ",
    ];
  }

  public get textForSize(): string[] {
    return [
      "In elk breiwerk wordt gewerkt met twee maten.  De standaardmaat (voor vrouwen) is S/M. ",

      "Voor heren wordt de grotere maat M/L aangeraden. ",
    ];
  }

  public get textForSending(): string[] {
    return [
      "Indien het knitje beschikbaar is, kan je rekenen op een levertermijn van maximaal 1 werkweek.",

      "Wenst u liever een kleur dat op het moment niet beschikbaar is, dan maak ik dit graag voor u met heel veel liefde. ",

      "Hou dan rekening met een verwerkingstijd van 3 weken.",
    ];
  }

  public get textForReturn(): string[] {
    return [
      "Past het knitje niet dan kan dit binnen de 14 dagen teruggestuurd worden onaangeroerd en in de originele verpakking. ",

      "De verzendingskosten voor de teruggestuurde producten worden door de koper zelf betaald.",

      "De oorspronkelijke verzendkosten worden ook niet terugbetaald. ",
    ];
  }
}
</script>
