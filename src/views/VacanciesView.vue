<template>
  <main>
    <div>
      <h1>Vocalias</h1>

      <div class="ButtonLine">
        <Button class="buttonVacancies" label="Aplicar Vocalia" />
        <Button class="buttonVacancies" label="Conocer Vocalia" />
      </div>

      <Divider class="Divider" type="solid" />

      <h1>Vocalias Aplicadas</h1>
      <div class="containerCard">
        <Card class="Card">
          <template #content>
            <p class="m-0">
              Únete a nuestra comunidad de jóvenes apasionados por el servicio,
              la oración y el compañerismo. Aquí encontrarás oportunidades para
              crecer en tu fe, hacer nuevos amigos y contribuir a la
              transformación de nuestra sociedad a través de acciones concretas
              y caritativas.
            </p>
          </template>
        </Card>

        <Card class="Card">
          <template #content>
            <p class="m-0">
              Únete a nuestra comunidad de jóvenes apasionados por el servicio,
              la oración y el compañerismo. Aquí encontrarás oportunidades para
              crecer en tu fe, hacer nuevos amigos y contribuir a la
              transformación de nuestra sociedad a través de acciones concretas
              y caritativas.
            </p>
          </template>
        </Card>
      </div>
    </div>
  </main>
</template>

<script setup>
import ButtonsChains from "@/components/ButtonsChains.vue";
import { ref } from "vue";
</script>

<style scoped>
.Divider {
  margin: 15px;
  margin-bottom: 20px;
  background-color: var(--darkblue);
  width: 100%;
  height: 2px;
}

.buttonVacancies {
  margin: 20px;
}

.Card {
  width: 400px;
  height: 200px;
  margin: 20px;
}

.containerCard {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  gap: 10px;
}
</style>
