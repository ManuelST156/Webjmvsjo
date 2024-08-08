<template>
  <main>
    <div class="fullLine">
      <h1 class="title">Actividades Comunes del Centro</h1>
      <Divider class="Divider" type="solid" />
    </div>
    <div class="conteinerCards">
      <Card
        id="card"
        style="width: 25rem; overflow: hidden"
        v-for="activity in activities"
        :key="activity.idInfoPaginaActividad"
        class="m-1"
      >
        <template #header>
          <img
            class="imageCard"
            alt="user header"
            :src="activity.imagenActividadUrl"
          />
        </template>
        <template #title>{{ activity.tituloActividad }}</template>
        <template #content>
          <p class="m-0">{{ activity.descripcionActividad }}</p>
        </template>

        <template #footer>
          <a
            v-if="activity.linkAuxiliar"
            :href="activity.linkAuxiliar"
            target="_blank"
            class="link-label"
            for="linkButton"
            >Ver Más</a
          >

          <Button
            v-if="activity.linkAuxiliar"
            outlined
            rounded
            severity="info"
            id="linkButton"
            class="mr-2"
            @click="goToLink(activity.linkAuxiliar)"
          >
            <div class="icon-wrapper">
              <span class="material-symbols-outlined icon">arrow_outward</span>
            </div>
          </Button>
        </template>
      </Card>
    </div>
  </main>
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
const activities = ref(); //Guardar los mensajes de la DB

//========================================================//
//Mounted
//========================================================//
onMounted(async () => {
  const { data: dataActivity, error: dataVacancyError } = await supabase
    .from("actividadesactivas")
    .select("*");

  activities.value = dataActivity;
  
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

<style lang="scss" scoped>
/* Cards de Noticias Recientes */

p {
  padding: 5px 0;
}

strong {
  padding: 0 3px;
}
.conteinerCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  /*  width: 100%;
      height: auto; */
}
.Divider {
  padding: 10px;
  margin: 0 20px;
  width: 97%;
}

.title {
  margin: 0 25px;
}

.fullLine {
  flex: 1 1 100%;
}

.imageCard {
  width: 400px;
  height: 220px;
}

::v-deep(#linkButton.p-button) {
  padding: 10px;
  margin: 0 3px;
  width: 30px;
  height: 30px;
}

::v-deep(.p-card) {
  .p-card-footer {
    display: flex;
    justify-content: flex-end; /* Alinear a la derecha en el footer */
    align-items: center; /* Alinear verticalmente al centro en el footer */
    padding: 5px;
  }
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
