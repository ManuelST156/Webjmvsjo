<template>
    <main>
      <Toast />
      <div>
        <h1>Vocalias Aplicadas</h1>
        <div class="containerCard">
          <Card
            class="Card"
            v-for="request in listRequest"
            :key="request.idUsuario"
          >
            <template #content>
              <div class="card-inner">
                <div class="profile-picture">
                  <img :src="request.imagenURL" alt="Foto de Perfil" />
                </div>
                <div class="card-details">
                  <h2>Detalles del Solicitante</h2>
                  <p>
                    <strong>Nombre:</strong> {{ request.nombresSolicitante }}
                    {{ request.apellidosSolicitante }}
                  </p>
                  <p><strong>Comunidad:</strong> {{ request.nombreComunidad }}</p>
                  <p><strong>Edad:</strong> {{ request.edadSolicitante }} años</p>
                  <p><strong>Vocalía:</strong> {{ request.nombreVocalia }}</p>
                  <p>
                    <router-link to="/verPostulacion">
                      <Button
                        outlined
                        rounded
                        severity="info"
                        id="crudButton"
                        class="mr-1"
                        @click="
                          seeRequest(request.idSolicitud, request.codigoImagen)
                        "
                      >
                        <div class="icon-wrapper">
                          <span class="material-symbols-outlined icon"
                            >visibility</span
                          >
                        </div>
                      </Button>
                    </router-link>
                  </p>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  //========================================================
  //Import de Recursos
  //========================================================
  import { ref, onMounted } from "vue";
  import { createClient } from "@supabase/supabase-js";
  import { jwtDecode } from "jwt-decode";
  import { useRouter } from "vue-router";
  import { useToast } from "primevue/usetoast";
  
  //========================================================
  //Variables de Supabase
  //========================================================
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  //========================================================
  //Variables de Toast
  //========================================================
  
  const toast = useToast();
  
  //========================================================
  //Variables de Datos
  //========================================================
  
  const listRequest = ref(null);
  const router = useRouter();
  const visibleDeleteDialog = ref(false);
  const toDelete = ref();
  const toDeleteImage = ref();
  const toDeleteVacancy = ref();
  const loading = ref(false);
  //========================================================
  //onMounted
  //========================================================
  
  onMounted(async () => {
    const { data, error } = await supabase
      .from("vistapreviasolicitud")
      .select("*");
  
    listRequest.value = data;
  });
  
  //========================================================
  //Methods
  //========================================================
  
  
  //Permite visualizar alguna ficha de un usuario
  const seeRequest = (id) => {
    localStorage.setItem("isSeeing", id);
  };
  </script>
  
  <style lang="scss" scoped>
  .buttonSend {
    margin: 15px 10px;
    background-color: var(--darkblue);
    border: none;
  }
  
  .buttonSend:hover {
    background-color: var(--lightcyan);
  }
  
  .buttonSend:active {
    background-color: var(--darkblue);
  }
  
  ::v-deep(#crudButton.p-button) {
    padding: 10px;
    margin: 0 3px;
    width: 30px;
    height: 30px;
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
  }
  
  .containerCard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    gap: 10px;
  }
  
  .Card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .card-inner {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .profile-picture {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    overflow: hidden;
  }
  
  .profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5%;
  }
  
  .card-details {
    padding: 10px 20px;
    flex-grow: 1;
  }
  
  .card-details h2 {
    margin: 0 0 10px;
    font-size: 18px;
    color: #333;
  }
  
  .card-details p {
    margin: 5px 0;
    font-size: 14px;
  }
  
  .card-details p strong {
    color: #333;
  }
  
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
  
  /* Media Queries */
  
  @media (min-width: 1025px) {
    .card-inner {
      flex-direction: row;
      text-align: left;
    }
  
    .card-details {
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .containerCard {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  
  @media (max-width: 767px) {
    .containerCard {
      grid-template-columns: 1fr;
    }
  
    ::v-deep(#crudButton.p-button) {
      padding: 10px;
      margin: 0 3px;
      width: 20px;
      height: 20px;
      font-size: 15px;
    }
  }
  </style>
  