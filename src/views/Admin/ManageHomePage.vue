<template>
  <main>
    <Toast />
    <h1>Administrar Informaciones de la Pagina</h1>

    <!--Carousel-->
    <div class="fullLine">
      <h3>Gestionar Carousel Inicial</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Imagen al Carousel"
      @click="
        (visibleCarouselDialog = true),
          (imageCarousel = {}),
          (direction = 'Carousel')
      "
    />

    <div class="fullLine">
      <DataTable :value="getCarousel">
        <Column
          style="min-width: 12rem"
          field="nombreImagen"
          header="Nombre de la Imagen"
        ></Column>
        <Column header="Imagenes" style="min-width: 2rem">
          <template #body="slotProps">
            <img
              :src="slotProps.data.imagenUrl"
              :alt="slotProps.data.imagenUrl"
              class="border-round"
              :style="{ width: '50px', height: '50px' }"
            />
          </template>
        </Column>
        <Column
          style="min-width: 8rem"
          field="estaActiva"
          header="Estado Imagen"
        >
          <template #body="slotProps">
            <div class="fullLine">
              <Checkbox
                v-model="slotProps.data.estaActiva"
                :binary="true"
                :readonly="true"
              />
              <span class="ml-2">{{
                getStatusImage(slotProps.data.estaActiva)
              }}</span>
            </div>
          </template>
        </Column>

        <Column style="min-width: 4rem">
          <template #body="slotProps">
            <Button
              outlined
              rounded
              id="tableButton"
              class="mr-2"
              @click="
                editImageCarousel(slotProps.data), (direction = 'Carousel')
              "
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">edit_square</span>
              </div>
            </Button>

            <Button
              outlined
              rounded
              severity="danger"
              id="tableButton"
              class="mr-2"
              @click="
                () => {
                  direction = 'Carousel';
                  deleteCarouselDialog(slotProps.data);
                }
              "
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">delete</span>
              </div>
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>

    <!--Gestionar Noticias Recientes-->

    <div class="fullLine">
      <h3>Gestionar Noticias Recientes</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Noticia Reciente"
      @click="
        (visibleNewsDialog = true), (recentNew = {}), (direction = 'RecentNew')
      "
    />

    <div class="fullLine">
      <DataTable :value="getRecentNews">
        <Column
          style="min-width: 12rem"
          field="tituloNoticia"
          header="Titulo Noticia"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="descripcionNoticia"
          header="Descripcion Noticia"
        ></Column>
        <Column header="Imagen Noticia" style="min-width: 2rem">
          <template #body="slotProps">
            <img
              :src="slotProps.data.imagenNoticiaReciente"
              :alt="slotProps.data.imagenNoticiaReciente"
              class="border-round"
              :style="{ width: '50px', height: '50px' }"
            />
          </template>
        </Column>
        <Column
          style="min-width: 8rem"
          field="estadoNoticiaReciente"
          header="Estado Noticia"
        >
          <template #body="slotProps">
            <div class="fullLine">
              <Checkbox
                v-model="slotProps.data.estadoNoticiaReciente"
                :binary="true"
                :readonly="true"
              />
              <span class="ml-2">{{
                getStatusImage(slotProps.data.estadoNoticiaReciente)
              }}</span>
            </div>
          </template>
        </Column>

        <Column
          style="min-width: 12rem"
          field="finNoticiaReciente"
          header="Fecha Fin Noticia"
        ></Column>

        <Column style="min-width: 8rem" header="Link Auxiliar">
          <template #body="slotProps">
            <Button
              v-if="slotProps.data.linkAuxiliar"
              outlined
              rounded
              severity="info"
              id="tableButton"
              class="mr-2"
              @click="goToLink(slotProps.data.linkAuxiliar)"
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon"
                  >arrow_outward</span
                >
              </div>
            </Button>
          </template>
        </Column>

        <Column style="min-width: 4rem">
          <template #body="slotProps">
            <Button
              outlined
              rounded
              id="tableButton"
              class="mr-2"
              @click="editRecentNew(slotProps.data), (direction = 'RecentNew')"
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">edit_square</span>
              </div>
            </Button>

            <Button
              outlined
              rounded
              severity="danger"
              id="tableButton"
              class="mr-2"
              @click="
                {
                  direction = 'RecentNew';
                  deleteCarouselDialog(slotProps.data);
                }
              "
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">delete</span>
              </div>
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>

    <!--Gestionar Mensajes Iniciales-->

    <div class="fullLine">
      <h3>Gestionar Mensajes Iniciales</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Mensaje Inicial"
      @click="(visibleMessageDialog = true), (initialMessage = {})"
    />

    <div class="fullLine">
      <DataTable :value="getMessages">
        <Column
          style="min-width: 12rem"
          field="tituloMensajeInicio"
          header="Titulo Mensaje Inicio"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="descripcionMensajeInicio"
          header="Descripcion Mensaje Inicio"
        ></Column>
        <Column
          style="min-width: 8rem"
          field="estadoMensajeInicio"
          header="Estado Mensaje Inicio"
        >
          <template #body="slotProps">
            <div class="fullLine">
              <Checkbox
                v-model="slotProps.data.estadoMensajeInicio"
                :binary="true"
                :readonly="true"
              />
              <span class="ml-2">{{
                getStatusImage(slotProps.data.estadoMensajeInicio)
              }}</span>
            </div>
          </template>
        </Column>

        <Column style="min-width: 4rem">
          <template #body="slotProps">
            <Button
              outlined
              rounded
              id="tableButton"
              class="mr-2"
              @click="editMessage(slotProps.data)"
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">edit_square</span>
              </div>
            </Button>

            <Button
              outlined
              rounded
              severity="danger"
              id="tableButton"
              class="mr-2"
              @click="
                {
                  direction = 'Message';
                  deleteCarouselDialog(slotProps.data);
                }
              "
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">delete</span>
              </div>
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>

    <!--Todos los Dialogs-->

    <!-- Dialog Carousel -->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleCarouselDialog"
        modal
        header="Imagenes del Carousel/Header Inicial"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="imageName"
              v-model="imageCarousel.nombreImagen"
              required="true"
              :class="{
                'p-invalid': submitted && !imageCarousel.nombreImagen,
              }"
            />
            <label
              for="imageName"
              :class="{
                'p-error': submitted && !imageCarousel.nombreImagen,
              }"
            >
              {{
                submitted && !imageCarousel.nombreImagen
                  ? "Nombre de la Imagen es Requerido"
                  : "Nombre de Imagen"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="blockUpload">
          <Toast />

          <label class="labelFile" for="fileInput">Subir foto</label>
          <input
            @change="onFileChange"
            type="file"
            id="fileInput"
            accept="image/*"
          />
        </div>

        <div class="pruebaImg">
          <img
            v-if="isEditing == true"
            :src="imageCarousel.imagenUrl"
            id="imageUpload"
          />
          <img v-else src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="block">
          <Checkbox v-model="imageCarousel.estaActiva" :binary="true" />
          <label for="ingredient1" class="ml-2"> Esta Activa? </label>
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(imageCarousel = {}), (visibleCarouselDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveImageCarousel"
          ></Button>
        </div>
      </Dialog>
    </div>

    <!--Agregar noticias recientes-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleNewsDialog"
        modal
        header="Noticias Recientes"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="titleNew"
              v-model="recentNew.tituloNoticia"
              required="true"
              :class="{
                'p-invalid': submitted && !recentNew.tituloNoticia,
              }"
            />
            <label
              for="titleNew"
              :class="{
                'p-error': submitted && !recentNew.tituloNoticia,
              }"
            >
              {{
                submitted && !recentNew.tituloNoticia
                  ? "Titulo de la Noticia es Requerido"
                  : "Titulo de la Noticia"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              maxlength="40"
              class="textLogin"
              id="descriptionNew"
              v-model="recentNew.descripcionNoticia"
              required="true"
              :class="{
                'p-invalid': submitted && !recentNew.descripcionNoticia,
              }"
            />
            <label
              for="descriptionNew"
              :class="{
                'p-error': submitted && !recentNew.descripcionNoticia,
              }"
            >
              {{
                submitted && !recentNew.descripcionNoticia
                  ? "Descripcion de la Noticia es Requerido"
                  : "Descripcion de la Noticia"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="recentNew.finNoticiaReciente"
              id="endNew"
              class="inputsLogin"
              required="true"
              :class="{
                'p-invalid': submitted && !recentNew.finNoticiaReciente,
              }"
            />
            <label
              for="endNew"
              :class="{
                'p-error': submitted && !recentNew.finNoticiaReciente,
              }"
            >
              {{
                submitted && !recentNew.finNoticiaReciente
                  ? "Fecha de Fin Noticia es requerida"
                  : "Fecha de Fin Noticia"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="linkMessage"
              v-model="recentNew.linkAuxiliar"
            />
            <label for="linkMessage">
              Link de Noticia Auxiliar (Opcional)
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox v-model="recentNew.estadoNoticiaReciente" :binary="true" />
          <label for="ingredient1" class="ml-2"> Esta Activa? </label>
        </div>

        <div class="blockUpload">
          <Toast />

          <label class="labelFile" for="fileInput">Subir foto</label>
          <input
            @change="onFileChange"
            type="file"
            id="fileInput"
            accept="image/*"
          />
        </div>

        <div class="pruebaImg">
          <img
            v-if="isEditing == true"
            :src="recentNew.imagenNoticiaReciente"
            id="imageUpload"
          />
          <img v-else src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(recentNew = {}), (visibleNewsDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveRecentNew"
          ></Button>
        </div>
      </Dialog>
    </div>

    <!--Agregar Mensajes Iniciales-->
    <div class="fullLine">
      <Dialog
        v-model:visible="visibleMessageDialog"
        modal
        header="Mensajes Iniciales"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="titleMessage"
              v-model="initialMessage.tituloMensajeInicio"
            />
            <label for="titleMessage"> Titulo del Mensaje Inicio </label>
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              maxlength="40"
              class="textLogin"
              id="descriptionMessage"
              v-model="initialMessage.descripcionMensajeInicio"
              required="true"
              :class="{
                'p-invalid':
                  submitted && !initialMessage.descripcionMensajeInicio,
              }"
            />
            <label
              for="descriptionMessage"
              :class="{
                'p-error':
                  submitted && !initialMessage.descripcionMensajeInicio,
              }"
            >
              {{
                submitted && !initialMessage.descripcionMensajeInicio
                  ? "Descripcion del Mensaje Inicial es Requerido"
                  : "Descripcion del Mensaje Inicial"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox
            v-model="initialMessage.estadoMensajeInicio"
            :binary="true"
          />
          <label for="ingredient1" class="ml-2"> Esta Activo? </label>
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(initialMessage = {}), (visibleMessageDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveMessage"
          ></Button>
        </div>
      </Dialog>
    </div>

    <!--Verificacion de Eliminacion-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleCarouselDeleteDialog"
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
            @click="visibleCarouselDeleteDialog = false"
          ></Button>
          <Button
            v-if="direction == 'Carousel'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteImageCarousel()"
          ></Button>
          <Button
            v-if="direction == 'RecentNew'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteRecentNew()"
          ></Button>
          <Button
            v-if="direction == 'Message'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteMessage()"
          ></Button>
        </div>
      </Dialog>
    </div>

  </main>
</template>

<script setup>
//========================================================
//Imports de Modulos
//========================================================
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { createClient } from "@supabase/supabase-js";
import { uid } from "uid";
import router from "@/router";

//========================================================
//Variables de Supabase
//========================================================

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseSecretKey = import.meta.env.VITE_SUPABASE_SECRET_KEY;
const supabase = createClient(supabaseUrl, supabaseSecretKey);

//========================================================
//Variables de Toast
//========================================================

const toast = useToast();

//========================================================
//Variables de estado
//========================================================

const submitted = ref(false);
const visibleCarouselDialog = ref(false);
const visibleNewsDialog = ref(false);
const visibleMessageDialog = ref(false);
const loading = ref(false);
const visibleCarouselDeleteDialog = ref(false);
const isEditing = ref(false);
const direction = ref();

//========================================================
//Variables de datos
//========================================================

//========================================================
//Objetos
//========================================================
const imageCarousel = ref({});

//========================================================
//Carousel
//========================================================
const getCarousel = ref();
const fileUpload = ref(null);

//========================================================
//Noticias Recientes
//========================================================
const getRecentNews = ref();
const recentNew = ref({});

//Mensaje Inicial
const getMessages = ref();
const initialMessage = ref({});

//========================================================
//Mounted
//========================================================
onMounted(async () => {
  const dataCarousel = await supabase.from("ImagenesCarousel").select();

  getCarousel.value = dataCarousel.data;

  const dataNews = await supabase.from("NoticiasRecientes").select();

  getRecentNews.value = dataNews.data;

  const dataMessage = await supabase.from("MensajesIniciales").select();

  getMessages.value = dataMessage.data;
});

//========================================================
//Methods
//========================================================

//Agregar Imagenes del Carousel

const saveImageCarousel = async () => {
  try {
    loading.value = true;
    submitted.value = true;

    if (fileUpload.value != null && isEditing.value == true) {
      const Upload = fileUpload.value;
      await deleteImage();

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("CA", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Imagen Carousel Actualizada Exitosamente",
        detail: "Imagen Actualizada",
        life: 3000,
      });
    } else if (fileUpload.value == null && isEditing.value == true) {
      const { data: insertData, error: insertDataError } = await supabase
        .from("ImagenesCarousel")
        .upsert(imageCarousel.value)
        .select();

      if (!insertDataError) {
        const dataCarousel = await supabase.from("ImagenesCarousel").select();

        getCarousel.value = dataCarousel.data;
      }
      toast.add({
        severity: "success",
        summary: "Imagen Carousel Actualizada Exitosamente",
        detail: "Imagen Actualizada",
        life: 3000,
      });
    } else {
      const Upload = fileUpload.value;

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("CA", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Imagen Carousel Agregada Exitosamente",
        detail: "Imagen Agregada",
        life: 3000,
      });
    }

    visibleCarouselDialog.value = false;
    submitted.value=false;
    loading.value = false;
    isEditing.value = false;
  } catch (error) {}
};

//Abrir dialog de advertencia para eliminar
const deleteCarouselDialog = (prod) => {
  visibleCarouselDeleteDialog.value = true;

  if (direction.value == "Carousel") {
    imageCarousel.value = { ...prod };
  }

  if (direction.value == "RecentNew") {
    recentNew.value = { ...prod };
  }

  if (direction.value == "Message") {
    initialMessage.value = { ...prod };
  }
};

const deleteImage = async () => {
  if (direction.value == "Carousel") {
    var imageOldName = getCarousel.value.find(
      (element) => element.idCarousel === imageCarousel.value.idCarousel
    );

    const deleteStorage = await supabase.storage
      .from("imagesOnPages")
      .remove(imageOldName.codigoImagen);
  }

  if (direction.value == "RecentNew")
    var imageOldName = getRecentNews.value.find(
      (element) =>
        element.idNoticiaReciente === recentNew.value.idNoticiaReciente
    );

  const deleteStorage = await supabase.storage
    .from("imagesOnPages")
    .remove(imageOldName.codigoImagen);
};

//Subir Imagen a Bucket, asi como obtener url y subir datos a la tabla
const uploadImage = async (name, image) => {
  const imageCode = name + "_" + getCurrentDate();

  const uploadStorage = await supabase.storage
    .from("imagesOnPages")
    .upload(imageCode, image);

  const urlDescargar = supabase.storage
    .from("imagesOnPages")
    .getPublicUrl(imageCode);

  if (direction.value == "Carousel") {
    imageCarousel.value.imagenUrl = urlDescargar.data.publicUrl;
    imageCarousel.value.codigoImagen = imageCode;

    const { data: insertData, error: insertDataError } = await supabase
      .from("ImagenesCarousel")
      .upsert(imageCarousel.value)
      .select();

    if (!insertDataError) {
      const dataCarousel = await supabase.from("ImagenesCarousel").select();

      getCarousel.value = dataCarousel.data;
    }
  }

  if (direction.value == "RecentNew") {
    recentNew.value.imagenNoticiaReciente = urlDescargar.data.publicUrl;
    recentNew.value.codigoImagen = imageCode;

    const { data: insertData, error: insertDataError } = await supabase
      .from("NoticiasRecientes")
      .upsert(recentNew.value)
      .select();

    if (!insertDataError) {
      const dataGet = await supabase.from("NoticiasRecientes").select();

      getRecentNews.value = dataGet.data;
    }
  }
};

//Permite editar las imagenes u otros datos en la tabla
const editImageCarousel = (prod) => {
  imageCarousel.value = { ...prod };
  isEditing.value = true;
  visibleCarouselDialog.value = true;
};

//Eliminar Imagenes del carousel
const deleteImageCarousel = async () => {
  loading.value = true;

  await deleteImage();
  const { data: deleteCarousel, error: deleteCarouselError } = await supabase
    .from("ImagenesCarousel")
    .delete()
    .eq("idCarousel", imageCarousel.value.idCarousel);

  if (!deleteCarouselError) {
    const dataCarousel = await supabase.from("ImagenesCarousel").select();

    getCarousel.value = dataCarousel.data;
  }

  toast.add({
    severity: "error",
    summary: "Imagen Carousel Eliminada Exitosamente",
    detail: "Imagen Eliminada",
    life: 3000,
  });

  loading.value = false;
  visibleCarouselDeleteDialog.value = false;
};

//Obtener fecha y hora para añadirlo a la nomenclatura de la imagen
const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const hours = String(today.getHours()).padStart(2, "0"); // Obtiene la hora
  const minutes = String(today.getMinutes()).padStart(2, "0"); // Obtiene los minutos
  const seconds = String(today.getSeconds()).padStart(2, "0"); // Obtiene los segundos

  const formattedToday =
    dd + "-" + mm + "-" + yyyy + "_" + hours + ":" + minutes + ":" + seconds;
  return formattedToday;
};

//Obtener label de status de la imagen
const getStatusImage = (data) => {
  if (data == true) {
    return "Activo";
  } else {
    return "Inactivo";
  }
};

//Agregar Noticias Recientes
const saveRecentNew = async () => {
  try {
    loading.value = true;
    submitted.value = true;

    if (fileUpload.value != null && isEditing.value == true) {
      const Upload = fileUpload.value;
      await deleteImage();

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("NOT", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Noticia Actualizada Exitosamente",
        detail: "Noticia Actualizada",
        life: 3000,
      });
    } else if (fileUpload.value == null && isEditing.value == true) {
      const { data: insertData, error: insertDataError } = await supabase
        .from("NoticiasRecientes")
        .upsert(recentNew.value)
        .select();

      if (!insertDataError) {
        const dataGet = await supabase.from("NoticiasRecientes").select();

        getRecentNews.value = dataGet.data;
      }
      toast.add({
        severity: "success",
        summary: "Noticia Actualizada Exitosamente",
        detail: "Noticia Actualizada",
        life: 3000,
      });
    } else {
      const Upload = fileUpload.value;

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("NOT", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Noticia Agregada Exitosamente",
        detail: "Noticia Agregada",
        life: 3000,
      });
    }

    visibleNewsDialog.value = false;
    submitted.value=false;
    loading.value = false;
    isEditing.value = false;
  } catch (error) {}
};

//Editar Noticia
const editRecentNew = (prod) => {
  recentNew.value = { ...prod };
  isEditing.value = true;
  visibleNewsDialog.value = true;
};

//Eliminar Noticia
const deleteRecentNew = async () => {
  loading.value = true;

  await deleteImage();
  const { data: deleteData, error: deleteDataError } = await supabase
    .from("NoticiasRecientes")
    .delete()
    .eq("idNoticiaReciente", recentNew.value.idNoticiaReciente);

  if (!deleteDataError) {
    const dataGet = await supabase.from("NoticiasRecientes").select();

    getRecentNews.value = dataGet.data;
  }

  toast.add({
    severity: "success",
    summary: "Noticia Eliminada Exitosamente",
    detail: "Noticia Eliminada",
    life: 3000,
  });

  loading.value = false;
  visibleCarouselDeleteDialog.value = false;
};

//Agregar Mensaje Inicial
const saveMessage = async () => {
  try {
    loading.value = true;
    submitted.value = true;
    const { data: insertMessage, error: messageError } = await supabase
      .from("MensajesIniciales")
      .upsert(initialMessage.value)
      .select();

    if (!messageError) {
      const dataGet = await supabase.from("MensajesIniciales").select();

      getMessages.value = dataGet.data;
    }

    if (isEditing.value == true) {
      toast.add({
        severity: "success",
        summary: "Mensaje Inicial Actualizado Exitosamente",
        detail: "Mensaje Inicial Actualizado",
        life: 3000,
      });
    } else {
      toast.add({
        severity: "success",
        summary: "Mensaje Añadido Exitosamente",
        detail: "Mensaje Inicial Añadido",
        life: 3000,
      });
    }

    visibleMessageDialog.value = false;
    loading.value = false;
    isEditing.value = false;
    submitted.value=false;
  } catch (error) {}
};

//Editar Mensaje
const editMessage = async (prod) => {
  initialMessage.value = { ...prod };
  isEditing.value = true;
  visibleMessageDialog.value = true;
};

//Eliminar Mensaje
const deleteMessage = async () => {
  submitted.value=true;
  loading.value=true;
  const { data: deleteData, error: deleteDataError } = await supabase
    .from("MensajesIniciales")
    .delete()
    .eq("idMensajeInicial", initialMessage.value.idMensajeInicial);

  if (!deleteDataError) {
    const dataGet = await supabase.from("MensajesIniciales").select();

    getMessages.value = dataGet.data;
  }

  toast.add({
    severity: "success",
    summary: "Mensaje Inicial Eliminado Exitosamente",
    detail: "Mensaje Inicial Eliminado",
    life: 3000,
  });

  loading.value = false;
  visibleCarouselDeleteDialog.value = false;
};

//Metodo para mostrar la imagen, desde que es cargada
const onFileChange = (event) => {
  fileUpload.value = event.target;
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = document.getElementById("imageUpload");
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
  toast.add({
    severity: "info",
    summary: "Foto Cargada",
    detail: "Mostrando Previsualizacion de su Foto",
    life: 3000,
  });
};

//Metodo para dirigirnos a pestaña especifica
const goToLink = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

//========================================================
</script>

<style lang="scss" scoped>
.buttonSend {
  margin: 5px 0px;
  background-color: var(--darkblue);
  border: none;
}

.buttonSend:hover {
  background-color: var(--lightcyan);
}

.buttonSend:active {
  background-color: var(--darkblue);
}

::v-deep(.p-datatable) {
  .p-datatable-table {
    border-collapse: collapse;
    margin: 10px 0;
  }

  .p-datatable-thead > tr > th {
    border-color: var(--darkblue);
    border-width: 1px 1px 1px 1px;
  }
  .p-datatable-tbody > tr > td {
    border-color: var(--darkblue);
    border-width: 1px 1px 1px 1px;
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
}

::v-deep(#tableButton.p-button) {
  padding: 10px;
  margin: 0 3px;
  width: 30px;
  height: 30px;
}

#imageUpload {
  width: 80px;
  height: 80px;
  background-color: lightgray;
  margin-bottom: 10px;
  border-radius: 10px;
}

.LoginRegister {
  background: linear-gradient(200deg, var(--rblight), var(--rblightblue));
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.fullLine {
  flex: 1 1 100%;
}

#containerRegister {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: auto;
}

h3 {
  padding: 5px 0;
}

p {
  padding: 10px;
}

#Tittle {
  /* align-self: center; */
  margin-bottom: 20px;
  margin-top: 0;
}

.block {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
}

.blockUpload {
  width: 75%;
  height: 60px;
  margin: 10px 0;
  /* flex: 1 1 calc(20% - 20px); */
  min-width: 20px;
}

.pruebaImg {
  width: 80px;
  height: 80px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 20px;
}

.firstGroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.inputsLogin {
  height: 40px;
  /* margin-bottom: 4rem; */
  width: 100%;
}

.textLogin {
  height: 100px;
  //margin-bottom: 4rem;
  width: 100%;
  resize: none;
}

.fullLineText {
  flex: 1 1 100%;
  height: 100px;
  margin: 20px 0;
}

.linksLogin {
  margin: 10px;
}

.linkTo {
  color: var(--darkblue);
}

.FloatLabel {
  height: 25px;
}

input[type="file"] {
  display: none;
}

.labelFile {
  background-color: var(--darkblue);
  height: 40px;
  margin-bottom: 4rem;
  width: 40%;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 7px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
}

/* Para tablets */
@media (max-width: 768px) {
  .labelFile {
    height: 35px;
    width: 60%;
    padding: 8px 16px;
    font-size: 14px;
  }
}

/* Para móviles */
@media (max-width: 480px) {
  .labelFile {
    height: 30px;
    width: 50%;
    padding: 6px 12px;
    font-size: 14px;
  }
}

.labelFile:hover {
  background-color: var(--lightcyan);
}

.labelFile:active {
  background-color: var(--darkblue);
}
</style>
