<template>
  <main>
    <Banner />
    <ButtonsChains />
    <Card />
  </main>
</template>

<script setup>
//========================================================
//Imports de Recursos
//========================================================
import { ref,onMounted } from "vue";
import Banner from "../../components/Banner.vue";
import ButtonsChains from "@/components/ButtonsChains.vue";
import Card from "@/components/Card.vue";

</script>

<style lang="scss" scoped>
.fullLine {
  flex: 1 1 100%;
}
</style>
