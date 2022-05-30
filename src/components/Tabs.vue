<template>
  <div style="margin-bottom: 20px; padding-top: 20px; font-size: 1rem">
    <b-row>
      <b-col></b-col>
      <b-col cols="auto"
        ><router-link style="color: #a64c3a" to="/">HOME</router-link></b-col
      >
      <b-col cols="auto"
        ><router-link style="color: #a64c3a" to="/shop"
          >SHOP</router-link
        ></b-col
      >
      <b-col cols="auto"
        ><router-link style="color: #a64c3a" to="/info"
          >INFO</router-link
        ></b-col
      >
      <b-col cols="auto"
        ><router-link style="color: #a64c3a" to="/over-mij"
          >ABOUT ME</router-link
        ></b-col
      >
      <b-col cols="auto"
        ><router-link style="color: #a64c3a" to="/contact"
          >CONTACT</router-link
        ></b-col
      >
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Tabs extends Vue {}
</script>
