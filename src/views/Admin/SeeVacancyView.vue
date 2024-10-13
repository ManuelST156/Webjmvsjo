<template>
  <main>
    <Toast />
    <div>
      <h1>¡¡Vocalias Aplicadas!!</h1>

      <div class="filterButton">
        <button @click="filterOn" class="button-item">
            Vista Por Postulantes
          </button>
          <button @click="filterOff" class="button-item">
            Vista por Vocalías
          </button>
      </div>

      <div class="containerCard">
        <Card
          class="Card"
          v-for="(request,index) in listRequest"
          :key="request.idUsuario"
        >
          <template #content>
            <div class="card-inner">
              <div class="profile-picture">
                <img :src="request.imagenURL" alt="Foto de Perfil" />
              </div>
              <div class="card-details">
                <h2>Detalles del Solicitante{{ index }}</h2>
                <p>
                  <strong>Nombre:</strong> {{ request.nombresSolicitante }}
                  {{ request.apellidosSolicitante }}
                </p>
                <p><strong>Comunidad:</strong> {{ request.nombreComunidad }}</p>
                <p><strong>Edad:</strong> {{ request.edadSolicitante }} años</p>
                <p><strong>Vocalía:</strong> {{ request.nombreVocalia }}</p>
                <p>
                  <Button
                    outlined
                    rounded
                    id="crudButton"
                    class="mr-2"
                    @click="editRequest(request.idSolicitud)"
                  >
                    <div class="icon-wrapper">
                      <span class="material-symbols-outlined icon"
                        >edit_square</span
                      >
                    </div>
                  </Button>

                  <Button
                    outlined
                    rounded
                    severity="danger"
                    id="crudButton"
                    class="mr-1"
                    @click="
                      deleteDialog(
                        request.idSolicitud,
                        request.codigoImagen,
                        request.idVocalia
                      )
                    "
                  >
                    <div class="icon-wrapper">
                      <span class="material-symbols-outlined icon">delete</span>
                    </div>
                  </Button>

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

                  <Button
                        outlined
                        rounded
                        severity="warning"
                        id="crudButton"
                        class="mr-1"
                        @click="
                          downloadPDF(request.nombresSolicitante, request.apellidosSolicitante)
                        "
                      >
                        <div class="icon-wrapper">
                          <span class="material-symbols-outlined icon"
                            >sim_card_download</span
                          >
                        </div>
                  </Button>
                </p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!--Verificacion de Eliminacion-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleDeleteDialog"
        modal
        header="Eliminar Campo"
        class="w-3"
      >
        <p>Desea eliminar este Campo?</p>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="visibleDeleteDialog = false"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteRequest(toDelete, toDeleteImage, toDeleteVacancy)"
          ></Button>
        </div>
      </Dialog>
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
  console.log("Hola");
});

//========================================================
//Methods
//========================================================

//Permite edditar alguna ficha de un usuario
const editRequest = async (id) => {
  const objectSend = {};

  localStorage.setItem("isEditing", id);
  router.push({ name: "applyVacancy" });
};

//Abrir dialog de advertencia
const deleteDialog = async (id, codigo, vocalia) => {
  visibleDeleteDialog.value = true;
  toDelete.value = id;
  toDeleteImage.value = codigo;
  toDeleteVacancy.value = vocalia;
};

//Permite eliminar alguna ficha de un usuario
const deleteRequest = async (id, codigo, vocalia) => {
  try {
    loading.value = true;

    //Delete vocalia
    const vacancyDelete = await supabase
      .from("SolicitudesVocalia")
      .delete()
      .eq("idSolicitud", id)
      .eq("idVocalia", vocalia);

    const { data: requestExisting } = await supabase
      .from("SolicitudesVocalia")
      .select("*")
      .eq("idSolicitud", id);

    if (requestExisting.length == 0) {
      //Select
      const { data: selectServices } = await supabase
        .from("ServiciosSolicitud")
        .select("idServicio")
        .eq("idSolicitud", id);

      const { data: selectAcademic } = await supabase
        .from("FormacionAcademicaSolicitud")
        .select("idFormacionAcademica")
        .eq("idSolicitud", id);

      //delete

      const servicesRequestDelete = await supabase
        .from("ServiciosSolicitud")
        .delete()
        .eq("idSolicitud", id);

      const academicRequestDelete = await supabase
        .from("UsuarioSolicitud")
        .delete()
        .eq("idSolicitud", id);

      const userRequestDelete = await supabase
        .from("FormacionAcademicaSolicitud")
        .delete()
        .eq("idSolicitud", id);

      selectServices.forEach(async (element) => {
        const servicesDelete = await supabase
          .from("Servicios")
          .delete()
          .eq("idServicio", element.idServicio);
      });

      selectAcademic.forEach(async (element) => {
        const academicDelete = await supabase
          .from("FormacionAcademica")
          .delete()
          .eq("idFormacionAcademica", element.idFormacionAcademica);
      });

      const requestDelete = await supabase
        .from("Solicitudes")
        .delete()
        .eq("idSolicitud", id);

      const deleteStorage = await supabase.storage
        .from("imageVacancy")
        .remove(codigo);
    }

    const { data, error } = await supabase
      .from("vistapreviasolicitud")
      .select("*");

    listRequest.value = data;

    loading.value = false;
    visibleDeleteDialog.value = false;

    toast.add({
      severity: "success",
      summary: "Registro Eliminado",
      detail: "Solicitud Eliminada",
      life: 3000,
    });
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error Registro Eliminado",
      detail: "Solicitud No Eliminada",
      life: 3000,
    });
  }
};

//Permite visualizar alguna ficha de un usuario
const seeRequest = (id) => {
  localStorage.setItem("isSeeing", id);
};

const downloadPDF= async(name,lastName)=>{
    
    var namePDF=`Solicitud de ${name} ${lastName}.pdf`;

    console.log(namePDF);

    const { data, error } = await supabase
    .storage
    .from('filePDF')
    .download(namePDF);

    console.log(data,error);

    // Crear un objeto URL a partir del blob
    const url = window.URL.createObjectURL(data);

    // Crear un enlace para la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = namePDF; // Establecer el nombre del archivo que se descargará
    document.body.appendChild(a);
    a.click(); // Simular un clic en el enlace
    a.remove(); // Eliminar el enlace del DOM
    window.URL.revokeObjectURL(url); // Liberar la URL del objeto

  }

const filterOn=async ()=>{

  listRequest.value=[];
  const { data, error } = await supabase
    .from("vistapreviasolicitudfiltro")
    .select("*");

  listRequest.value = data;
  console.log(listRequest.value);
}

const filterOff=async ()=>{
  listRequest.value=[];
  const { data, error } = await supabase
    .from("vistapreviasolicitud")
    .select("*");

  listRequest.value = data;
  console.log(listRequest.value);
}


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
  box-shadow: 0 7px 11px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 2px solid black;
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
  border: 2px solid var(--darkblue);
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

.filterButton {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.button-item {
  background: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  text-align: center;
  font-weight: bold;
  color: rgb(0, 0, 35);
}

.button-item:hover {
  background: var(--darkblue);
  color: white;
}

.button-item:active {
  background: white;
  color: rgb(0, 0, 35);
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
