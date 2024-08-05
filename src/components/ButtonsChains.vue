<template>
    <div class="buttonChains">
      <router-link to="/actividadesInfo" class="circleContainer">
        <img
          class="circleButton"
          :src="actividades"
          alt=""
        />
        <span id="circleSpanButton" class="text">Actividades</span>
      </router-link>

      <router-link to="/comunidadesInfo" class="circleContainer">
        <img
          class="circleButton"
          :src="comunidades"
          alt=""
        />
      
        
        <span id="circleSpanButton" class="text">Comunidades</span>
      </router-link>

      <router-link to="/vocaliasInfo" class="circleContainer">
        <img
          class="circleButton"
          :src="vocalias"
          alt=""
        />
        <span id="circleSpanButton" class="text">Vocalias</span>
      </router-link>
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
const images = ref(); //Guardar los mensajes de la DB
const actividades=ref();
const comunidades=ref();
const vocalias=ref();

//========================================================//
//Mounted
//========================================================//
onMounted(async () => {
  const { data: dataImage} = await supabase
    .from("imagenbotonorden")
    .select("*");

  images.value = dataImage;

  actividades.value=images.value[0].linkImagen;
  comunidades.value=images.value[1].linkImagen;
  vocalias.value=images.value[2].linkImagen;
  
});
</script>

<style>
.buttonChains {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 150px;
  text-decoration: none;
  color: inherit;
  margin: 30px;
  /* cursor: pointer; */
}

.circleButton {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  transition: transform 0.3s;
}

.circleButton:hover {
  transform: scale(1.1); 

}

#circleSpanButton {
  padding: 10px;
}
</style>