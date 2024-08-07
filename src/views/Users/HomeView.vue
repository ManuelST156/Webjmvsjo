<template>
  <main>
    <Banner />
    <ButtonsChains />
    <Card />

    <!--Agregar noticias recientes-->

    <div class="fullLine">
      <Dialog
        v-if="getNewPopUp && getNewPopUp.estaActivo"
        v-model:visible="visibleNewPopUpDialog"
        modal
        header="Novedades"
        class="w-6"
      >
      <div class="block">

        <h2>{{ getNewPopUp.tituloNovedad }}</h2>

        <p>{{ getNewPopUp.descripcionNovedad }}</p>

      </div>
      </Dialog>
    </div>

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
import { createClient } from "@supabase/supabase-js";

//========================================================
//Variables de Supabase
//========================================================

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseSecretKey = import.meta.env.VITE_SUPABASE_SECRET_KEY;
const supabase = createClient(supabaseUrl, supabaseSecretKey);

//========================================================
//Variables de estado
//========================================================

const visibleNewPopUpDialog= ref(false);

//========================================================
//Variables de Datos
//========================================================

const getNewPopUp= ref(false);


//========================================================
//Mounted
//========================================================

onMounted(async () => {
  const dataNewPopUp= await supabase.from("novedadesactivas").select();
  getNewPopUp.value=dataNewPopUp.data[0];


  if(localStorage.getItem('Activo')!=getNewPopUp.value?.tituloNovedad)
  {
    
    if(getNewPopUp.value)
    {
      visibleNewPopUpDialog.value=true;
      localStorage.setItem('Activo',getNewPopUp.value.tituloNovedad);
    }
    
  }
  
});

</script>

<style lang="scss" scoped>
.fullLine {
  flex: 1 1 100%;
}

.block {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
}
</style>
