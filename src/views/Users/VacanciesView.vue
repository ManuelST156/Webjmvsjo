<template>
  <Toast />
  <main>
    <div>
      <h1>Vocalias</h1>

      <div class="ButtonLine">
        <router-link to="/aplicarVacante">
          <Button class="buttonSend" label="Aplicar Vocalia" />
        </router-link>

        <router-link to="/vocaliasInfo">
          <Button class="buttonSend" label="Conocer Vocalias" />
        </router-link>

        <router-link to="/verVacantes" v-if="userStatus == 'Admin'">
          <Button class="buttonSend" label="Ver Solicitudes de Vocalia" />
        </router-link>
      </div>

      <Divider class="Divider" type="solid" />

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
//Imports de Recursos
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
//Variables de datos
//========================================================

const listRequest = ref(null);
const router = useRouter();
const visibleDeleteDialog = ref(false);
const toDelete = ref();
const toDeleteVacancy = ref();
const toDeleteImage = ref();
const loading = ref(false);

//========================================================
//Variable de Estado
//========================================================

const userStatus = ref(localStorage.getItem("userRol"));

//========================================================
//onMounted - Funciones al cargar pagina
//========================================================

onMounted(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: listAuthUsers } = await supabase
    .from("Usuarios")
    .select("idUsuario")
    .eq("idAuth", user.id);

  const { data, error } = await supabase
    .from("vistapreviasolicitud")
    .select("*")
    .eq("idUsuario", listAuthUsers[0].idUsuario);

  listRequest.value = data;
  console.log(listRequest.value);
});

//========================================================
//Methods
//========================================================

//Abrir dialog de advertencia
const deleteDialog = async (id, codigo, vocalia) => {
  visibleDeleteDialog.value = true;
  toDelete.value = id;
  toDeleteImage.value = codigo;
  toDeleteVacancy.value = vocalia;
  console.log("hola", toDeleteVacancy.value);
};

//Metodo para decodificar token
const decodeToken = () => {
  try {
    const token = localStorage.getItem("tokenJMV");
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const decodedToken = jwtDecode(token);
    const userID = decodedToken.sub;

    return userID;
  } catch (error) {
    return null;
  }
};

//Permite editar ficha
const editRequest = async (id) => {
  const objectSend = {};

  const { data: servicesGet, error: serviceError } = await supabase
    .from("vistaservicios")
    .select("idServicio")
    .eq("idSolicitud", id);

  const { data: academicGet, error: academicError } = await supabase
    .from("vistaformacion")
    .select("idFormacionAcademica")
    .eq("idSolicitud", id);

  localStorage.setItem("isEditing", id);
  router.push({ name: "applyVacancy" });
};

const deleteRequest = async (id, codigo, vocalia) => {
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

  const { data: listAuthUsers } = await supabase
    .from("Usuarios")
    .select("idUsuario")
    .eq("idAuth", decodeToken());

  const { data, error } = await supabase
    .from("vistapreviasolicitud")
    .select("*")
    .eq("idUsuario", listAuthUsers[0].idUsuario);

  listRequest.value = data;
  loading.value = false;
  visibleDeleteDialog.value = false;

  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Solicitud Eliminada",
    life: 3000,
  });
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
