<template>
  <Card
    class="Card"
    v-for="message in messages"
    :key="message.idMensajeInicial"
  >
    <template #title>{{ message.tituloMensajeInicio }}</template>
    <template #content>
      <p class="m-0">
        {{ message.descripcionMensajeInicio }}
      </p>
    </template>
  </Card>

  <div class="fullLine">
    <h1 class="title">Novedades/Noticias Recientes</h1>
    <Divider class="Divider" type="solid" />
  </div>

  <div class="conteinerCards">
    <Card
      style="width: 25rem; overflow: hidden"
      v-for="recentNew in news"
      :key="recentNew.idNoticiaReciente"
      class="m-1"
    >
      <template #header>
        <img
          class="imageCard"
          alt="user header"
          :src="recentNew.imagenNoticiaReciente"
        />
      </template>
      <template #title>{{ recentNew.tituloNoticia }}</template>
      <template #content>
        <p class="m-0">
          {{ recentNew.descripcionNoticia }}
        </p>
      </template>

      <template #footer>
        <a
          v-if="recentNew.linkAuxiliar"
          :href="recentNew.linkAuxiliar"
          target="_blank"
          class="link-label"
          for="linkButton"
          >Ver Más</a
        >

        <Button
          v-if="recentNew.linkAuxiliar"
          outlined
          rounded
          severity="info"
          id="linkButton"
          class="mr-2"
          @click="goToLink(recentNew.linkAuxiliar)"
        >
          <div class="icon-wrapper">
            <span class="material-symbols-outlined icon">arrow_outward</span>
          </div>
        </Button>
      </template>
    </Card>
  </div>
</template>

<script setup>
//========================================================//
//Imports de Recursos
//========================================================//
import { ref, onMounted } from "vue";
import { createClient } from "@supabase/supabase-js";

//========================================================//
//Variables de Supabase
//========================================================//
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//========================================================//
//Variables de Datos
//========================================================//
const messages = ref(); //Guardar los mensajes de la DB
const news = ref();

//========================================================//
//Mounted
//========================================================//
onMounted(async () => {
  const { data: dataMessages, error: dataMessageError } = await supabase
    .from("mensajesactivos")
    .select("*");

  messages.value = dataMessages;

  const { data: dataNews, error: dataNewsError } = await supabase
    .from("noticiasactivas")
    .select("*");
  news.value = dataNews;
});

//========================================================//
//Methods
//========================================================//
const goToLink = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};
</script>

<style scoped>
/* Card de Mensaje Inicial */
.Card {
  margin: 20px;
}

.Divider {
  padding: 10px;
  margin: 0 20px;
  width: 97%;
}

.title {
  margin: 0 25px;
}

.containerInfo {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
}

.textImage {
  margin: 10px;
}

.cardImage {
  width: 300px;
  height: 300px;
}

/* Cards de Noticias Recientes */

.conteinerCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.imageCard {
  width: 400px;
  height: 220px;
}

.fullLine {
  flex: 1 1 100%;
}

::v-deep(#linkButton.p-button) {
  padding: 10px;
  margin: 0 3px;
  width: 30px;
  height: 30px;
}

::v-deep(.p-card-footer) {
  display: flex;
  justify-content: flex-end; /* Alinear a la derecha en el footer */
  align-items: center; /* Alinear verticalmente al centro en el footer */
  padding: 5px;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon {
  font-size: 20px;
  color: var(--darkblue);
}

.link-label {
  display: inline-flex;
  align-items: center;
  height: 30px;
  margin-right: 5px;
  color: var(--darkblue);
  text-decoration: none;
}

.link-label:hover {
  color: var(--lightcyan);
}

.link-label:active {
  color: var(--darkblue);
}
</style>
