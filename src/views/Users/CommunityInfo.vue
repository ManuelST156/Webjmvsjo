<template>
    <main>
      <div class="fullLine">
        <h1 class="title">Comunidades del Centro</h1>
        <Divider class="Divider" type="solid" />
      </div>
      <div class="conteinerCards">
        <Card
        id="card"
          style="width: 20rem; overflow: hidden"
          v-for="community in communities"
          :key="community.idComunidad"
          class="m-1"
        >
          <template #header>
            <img
              class="imageCard"
              alt="user header"
              :src="community.imagenComunidadUrl"
            />
          </template>
          <template #title>{{ community.nombreComunidad}}</template>
          <template #content>
            <p class="m-0"><strong> Etapa de Formacion:</strong> {{ community.nombreEtapa}}</p>
            
            <p class="m-0"><strong>Catequista/s:</strong>  {{ community.nombrecatequista}}</p>
            
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
  const communities = ref(); //Guardar los mensajes de la DB
  
  
  //========================================================//
  //Mounted
  //========================================================//
  onMounted(async () => {
    const { data: dataCommunity, error: dataVacancyError } = await supabase
      .from("datoscompletocomunidad")
      .select("*");
  
    communities.value = dataCommunity;
    console.log(communities.value);
  
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
  
  p{
    padding: 5px 0;
  }

  strong{
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
    width: 320px;
    height: 160px;
  }
  
  ::v-deep(#linkButton.p-button) {
    padding: 10px;
    margin: 0 3px;
    width: 30px;
    height: 30px;
  }
  
  ::v-deep(.p-card) {
  
      .p-card-footer{
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
  