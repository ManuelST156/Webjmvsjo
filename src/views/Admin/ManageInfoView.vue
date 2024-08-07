<template>
  <main>
    <Toast />
    <h1>Administrar Informaciones de Vistas</h1>

    <!--Imagen comunidad-->
    <div class="fullLine">
      <h3>Gestionar Imagen Comunidad</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Imagen Comunidad"
      @click="
        (visibleCommunityDialog = true),
          (imageCommunity = {}),
          (direction = 'Community')
      "
    />

    <div class="fullLine">
      <DataTable :value="getImgCommunity">
        <Column
          :style="{ minWidth: '4rem', fontSize: '14px' }"
          header="Comunidad"
        >
          <template #body="slotProps">
            <span class="ml-2">{{
              GetComunityName(slotProps.data.idComunidad)
            }}</span>
          </template>
        </Column>
        <Column header="Imagen" style="min-width: 2rem">
          <template #body="slotProps">
            <img
              :src="slotProps.data.imagenComunidadUrl"
              :alt="slotProps.data.imagenComunidadUrl"
              class="border-round"
              :style="{ width: '50px', height: '50px' }"
            />
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
                editImageCommunity(slotProps.data), (direction = 'Community')
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
                  direction = 'Community';
                  deleteCommunityDialog(slotProps.data);
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


    <!--Gestionar PopUp-->

    <div class="fullLine">
      <h3>Gestionar PopUp Novedades</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Novedad"
      @click="
        (visibleNewPopupDialog = true), (newPopUp = {}), (direction = 'PopUp')
      "
    />

    <div class="fullLine">
      <DataTable :value="getNewPopUp">
        <Column
          style="min-width: 12rem"
          field="tituloNovedad"
          header="Titulo Novedad"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="descripcionNovedad"
          header="Descripcion Novedad"
        ></Column>
        <Column
          style="min-width: 8rem"
          field="estaActivo"
          header="Estado Actividad"
        >
        
          <template #body="slotProps">
            <div class="fullLine">
              <Checkbox
                v-model="slotProps.data.estaActivo"
                :binary="true"
                :readonly="true"
              />
              <span class="ml-2">{{
                getStatusImage(slotProps.data.estaActivo)
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
              @click="editNewPopup(slotProps.data)"
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
                  direction = 'PopUp';
                  deleteCommunityDialog(slotProps.data);
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



    <!--Gestionar Actividades-->

    <div class="fullLine">
      <h3>Gestionar Actividades Info</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Actividad"
      @click="
        (visibleActivityDialog = true),
          (activityInfo = {}),
          (direction = 'Activity')
      "
    />

    <div class="fullLine">
      <DataTable :value="getActivity">
        <Column
          style="min-width: 12rem"
          field="tituloActividad"
          header="Titulo Actividad"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="descripcionActividad"
          header="Descripcion Actividad"
        ></Column>
        <Column header="Imagen Actividad" style="min-width: 2rem">
          <template #body="slotProps">
            <img
              :src="slotProps.data.imagenActividadUrl"
              :alt="slotProps.data.imagenActividadUrl"
              class="border-round"
              :style="{ width: '50px', height: '50px' }"
            />
          </template>
        </Column>


        <Column
          style="min-width: 8rem"
          field="estaActivo"
          header="Estado Actividad"
        >
        
          <template #body="slotProps">
            <div class="fullLine">
              <Checkbox
                v-model="slotProps.data.estaActivo"
                :binary="true"
                :readonly="true"
              />
              <span class="ml-2">{{
                getStatusImage(slotProps.data.estaActivo)
              }}</span>
            </div>
          </template>
        </Column>

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
              @click="editActivity(slotProps.data), (direction = 'Activity')"
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
                  direction = 'Activity';
                  deleteCommunityDialog(slotProps.data);
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

    <!--Gestionar Vocalias-->

    <div class="fullLine">
      <h3>Gestionar Vocalias</h3>
      <Divider class="Divider" type="solid" />
    </div>

    <Button
      class="buttonSend"
      label="Agregar Vocalia"
      @click="
        (visibleVacancyDialog = true), (vacancy = {}), (direction = 'Vacancy')
      "
    />

    <div class="fullLine">
      <DataTable :value="getVacancy">
        <Column
          style="min-width: 12rem"
          field="nombreVocalia"
          header="Nombre Vocalia"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="descripcionVocalia"
          header="Descripcion Vocalia"
        ></Column>
        <Column header="Imagen Vocalia" style="min-width: 2rem">
          <template #body="slotProps">
            <img
              :src="slotProps.data.imagenVocaliaUrl"
              :alt="slotProps.data.imagenVocaliaUrl"
              class="border-round"
              :style="{ width: '50px', height: '50px' }"
            />
          </template>
        </Column>

        <Column style="min-width: 4rem">
          <template #body="slotProps">
            <Button
              outlined
              rounded
              id="tableButton"
              class="mr-2"
              @click="editVacancy(slotProps.data), (direction = 'Vacancy')"
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
                  direction = 'Vacancy';
                  deleteCommunityDialog(slotProps.data);
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

    <!-- Dialog Community -->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleCommunityDialog"
        modal
        header="Imagenes de Comunidad"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              id="comunityDay"
              v-model="imageCommunity.idComunidad"
              :options="communitiesList"
              optionLabel="nombreComunidad"
              optionValue="idComunidad"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !imageCommunity.idComunidad,
              }"
            />
            <label
              for="comunityDay"
              :class="{ 'p-error': submitted && !imageCommunity.idComunidad }"
            >
              {{
                submitted && !imageCommunity.idComunidad
                  ? "Comunidad Es requerido"
                  : "Comunidad"
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
            :src="imageCommunity.imagenComunidadUrl"
            id="imageUpload"
          />
          <img v-else src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(imageCommunity = {}), (visibleCommunityDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveImageCommunity"
          ></Button>
        </div>
      </Dialog>
    </div>

    <!--Agregar Actividades-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleActivityDialog"
        modal
        header="Noticias Recientes"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="titleActivity"
              v-model="activityInfo.tituloActividad"
              required="true"
              :class="{
                'p-invalid': submitted && !activityInfo.tituloActividad,
              }"
            />
            <label
              for="titleActivity"
              :class="{
                'p-error': submitted && !activityInfo.tituloActividad,
              }"
            >
              {{
                submitted && !activityInfo.tituloActividad
                  ? "Titulo de la Actividad es Requerido"
                  : "Titulo de la Actividad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              maxlength="40"
              class="textLogin"
              id="descriptionActivity"
              v-model="activityInfo.descripcionActividad"
              required="true"
              :class="{
                'p-invalid': submitted && !activityInfo.descripcionActividad,
              }"
            />
            <label
              for="descriptionActivity"
              :class="{
                'p-error': submitted && !activityInfo.descripcionActividad,
              }"
            >
              {{
                submitted && !activityInfo.descripcionActividad
                  ? "Descripcion de la Actividad es Requerido"
                  : "Descripcion de la Actividad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="linkActivity"
              v-model="activityInfo.linkAuxiliar"
            />
            <label for="linkActivity">
              Link de Actividad (Opcional)
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox v-model="activityInfo.estaActivo" :binary="true" />
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
            :src="activityInfo.imagenActividadUrl"
            id="imageUpload"
          />
          <img v-else src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(activityInfo = {}), (visibleActivityDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveActivity"
          ></Button>
        </div>
      </Dialog>
    </div>

    <!--Agregar Vocalias-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleVacancyDialog"
        modal
        header="Vocalias"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="titleVacancy"
              v-model="vacancy.nombreVocalia"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancy.nombreVocalia,
              }"
            />
            <label
              for="titleVacancy"
              :class="{
                'p-error': submitted && !vacancy.nombreVocalia,
              }"
            >
              {{
                submitted && !vacancy.nombreVocalia
                  ? "Nombre de la Vocalia es Requerido"
                  : "Nombre de la Vocalia"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              maxlength="40"
              class="textLogin"
              id="descriptionVocalia"
              v-model="vacancy.descripcionVocalia"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancy.descripcionVocalia,
              }"
            />
            <label
              for="descriptionActivity"
              :class="{
                'p-error': submitted && !vacancy.descripcionVocalia,
              }"
            >
              {{
                submitted && !vacancy.descripcionVocalia
                  ? "Descripcion de la Vocalia es Requerido"
                  : "Descripcion de la Vocalia"
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
            :src="vacancy.imagenVocaliaUrl"
            id="imageUpload"
          />
          <img v-else src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(vacancy = {}), (visibleVacancyDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveVacancy"
          ></Button>
        </div>
      </Dialog>
    </div>

    <!--Agregar Novedades-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleNewPopupDialog"
        modal
        header="Novedades"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="titleNewPopup"
              v-model="newPopUp.tituloNovedad"
              required="true"
              :class="{
                'p-invalid': submitted && !newPopUp.tituloNovedad,
              }"
            />
            <label
              for="titleNewPopup"
              :class="{
                'p-error': submitted && !newPopUp.tituloNovedad,
              }"
            >
              {{
                submitted && !activityInfo.tituloActividad
                  ? "Titulo de la Novedad es Requerido"
                  : "Titulo de la Novedad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              maxlength="40"
              class="textLogin"
              id="descriptionNewPopup"
              v-model="newPopUp.descripcionNovedad"
              required="true"
              :class="{
                'p-invalid': submitted && !newPopUp.descripcionNovedad,
              }"
            />
            <label
              for="descriptionNewPopup"
              :class="{
                'p-error': submitted && !newPopUp.descripcionNovedad,
              }"
            >
              {{
                submitted && !newPopUp.descripcionNovedad
                  ? "Descripcion de la Novedad es Requerido"
                  : "Descripcion de la Novedad"
              }}
            </label>
          </FloatLabel>
        </div>


        <div class="block">
          <Checkbox v-model="newPopUp.estaActivo" :binary="true" />
          <label for="ingredient1" class="ml-2"> Esta Activa? </label>
        </div>


        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(newPopUp = {}), (visibleNewPopupDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveNewPopup"
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
            v-if="direction == 'Community'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteImageCommunity()"
          ></Button>
          <Button
            v-if="direction == 'Activity'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteActivity()"
          ></Button>
          <Button
            v-if="direction == 'Vacancy'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteVacancy()"
          ></Button>
          <Button
            v-if="direction == 'PopUp'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteNewPopup()"
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
const visibleCommunityDialog = ref(false);
const visibleActivityDialog = ref(false);
const visibleNewPopupDialog= ref(false);
const visibleVacancyDialog = ref(false);
const loading = ref(false);
const visibleCarouselDeleteDialog = ref(false);
const isEditing = ref(false);
const direction = ref();

//========================================================
//Variables de datos
//========================================================

//========================================================
//Variables de Objetos
//========================================================
const imageCommunity = ref({});

//========================================================
//Variables Primarias
//========================================================
const getImgCommunity = ref();
const fileUpload = ref(null);
const communitiesList = ref();

//========================================================
//Variables de Actividad
//========================================================
const getActivity = ref();
const activityInfo = ref({});

//========================================================
//Variables de Actividad
//========================================================
const getVacancy = ref();
const vacancy = ref({});


//========================================================
//Variables de Novedades
//========================================================
const getNewPopUp = ref();
const newPopUp = ref({});


//========================================================
//Mounted
//========================================================

onMounted(async () => {
  const { data: dataCommunities } = await supabase.from("Comunidad").select();
  communitiesList.value = dataCommunities;

  const dataImagesComunities = await supabase.from("ImagenComunidad").select();
  getImgCommunity.value = dataImagesComunities.data;

  const dataActivity = await supabase.from("InfoPaginaActividades").select();
  getActivity.value = dataActivity.data;

  const dataVacancy = await supabase.from("Vocalias").select();
  getVacancy.value = dataVacancy.data;

  const dataNewPopUp= await supabase.from("Novedades").select();
  getNewPopUp.value=dataNewPopUp.data;
});

//========================================================
//Methods
//========================================================

//Agregar Imagenes Carousel

const saveImageCommunity = async () => {
  try {
    loading.value = true;
    submitted.value = true;

    if (fileUpload.value != null && isEditing.value == true) {
      const Upload = fileUpload.value;
      await deleteImage();

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("COM", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Imagen Comunidad Actualizada Exitosamente",
        detail: "Imagen Actualizada",
        life: 3000,
      });
    } else if (fileUpload.value == null && isEditing.value == true) {
      const { data: insertData, error: insertDataError } = await supabase
        .from("ImagenComunidad")
        .upsert(imageCommunity.value)
        .select();

      if (!insertDataError) {
        const dataCommunity = await supabase.from("ImagenComunidad").select();

        getImgCommunity.value = dataCommunity.data;
      }
      toast.add({
        severity: "success",
        summary: "Imagen Comunidad Actualizada Exitosamente",
        detail: "Imagen Actualizada",
        life: 3000,
      });
    } else {
      const Upload = fileUpload.value;

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("COM", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Imagen Comunidad Agregada Exitosamente",
        detail: "Imagen Agregada",
        life: 3000,
      });
    }

    visibleCommunityDialog.value = false;
    loading.value = false;
    isEditing.value = false;
  } catch (error) {}
};

//Abrir dialog de advertencia
const deleteCommunityDialog = (prod) => {
  visibleCarouselDeleteDialog.value = true;

  if (direction.value == "Community") {
    imageCommunity.value = { ...prod };
  }

  if (direction.value == "Activity") {
    activityInfo.value = { ...prod };
  }

  if (direction.value == "Vacancy") {
    vacancy.value = { ...prod };
  }

  if (direction.value == "PopUp") {
    newPopUp.value = { ...prod };
  }
};

//Permite eliminar imagen del bucket
const deleteImage = async () => {
  if (direction.value == "Community") {
    var imageOldName = getImgCommunity.value.find(
      (element) =>
        element.idPaginaComunidad === imageCommunity.value.idPaginaComunidad
    );

    const deleteStorage = await supabase.storage
      .from("imagesOnPages")
      .remove(imageOldName.codigoImagen);
  }

  if (direction.value == "Activity") {
    var imageOldName = getActivity.value.find(
      (element) =>
        element.idInfoPaginaActividad ===
        activityInfo.value.idInfoPaginaActividad
    );

    const deleteStorage = await supabase.storage
      .from("imagesOnPages")
      .remove(imageOldName.codigoImagen);
  }

  if (direction.value == "Vacancy") {
    var imageOldName = getVacancy.value.find(
      (element) => element.idVocalia === vacancy.value.idVocalia
    );

    const deleteStorage = await supabase.storage
      .from("imagesOnPages")
      .remove(imageOldName.codigoImagen);
  }
};

//Permite subir imagenes al bucket y a la tabla
const uploadImage = async (name, image) => {
  const imageCode = name + "_" + getCurrentDate();

  const uploadStorage = await supabase.storage
    .from("imagesOnPages")
    .upload(imageCode, image);

  const urlDescargar = supabase.storage
    .from("imagesOnPages")
    .getPublicUrl(imageCode);

  if (direction.value == "Community") {
    imageCommunity.value.imagenComunidadUrl = urlDescargar.data.publicUrl;
    imageCommunity.value.codigoImagen = imageCode;

    const { data: insertData, error: insertDataError } = await supabase
      .from("ImagenComunidad")
      .upsert(imageCommunity.value)
      .select();

    if (!insertDataError) {
      const dataCommunity = await supabase.from("ImagenComunidad").select();

      getImgCommunity.value = dataCommunity.data;
    }
  }

  if (direction.value == "Vacancy") {
    vacancy.value.imagenVocaliaUrl = urlDescargar.data.publicUrl;
    vacancy.value.codigoImagen = imageCode;

    const { data: insertData, error: insertDataError } = await supabase
      .from("Vocalias")
      .upsert(vacancy.value)
      .select();

    if (!insertDataError) {
      const dataGet = await supabase.from("Vocalias").select();

      getVacancy.value = dataGet.data;
    }
  }

  if (direction.value == "Activity") {
    activityInfo.value.imagenActividadUrl = urlDescargar.data.publicUrl;
    activityInfo.value.codigoImagen = imageCode;

    const { data: insertData, error: insertDataError } = await supabase
      .from("InfoPaginaActividades")
      .upsert(activityInfo.value)
      .select();

    if (!insertDataError) {
      const dataGet = await supabase.from("InfoPaginaActividades").select();

      getActivity.value = dataGet.data;
    }
  }
};
//Permite editar Imagenes de Comunidad
const editImageCommunity = (prod) => {
  imageCommunity.value = { ...prod };
  isEditing.value = true;
  visibleCommunityDialog.value = true;
};

//Permite eliminar imagenes de comunidad
const deleteImageCommunity = async () => {
  loading.value = true;

  await deleteImage();
  const { data: deleteCommunity, error: deleteCommunityError } = await supabase
    .from("ImagenComunidad")
    .delete()
    .eq("idPaginaComunidad", imageCommunity.value.idPaginaComunidad);

  if (!deleteCommunityError) {
    const dataCommunity = await supabase.from("ImagenComunidad").select();

    getImgCommunity.value = dataCommunity.data;
  }

  toast.add({
    severity: "success",
    summary: "Imagen Comunidad Eliminada Exitosamente",
    detail: "Imagen Eliminada",
    life: 3000,
  });

  loading.value = false;
  visibleCarouselDeleteDialog.value = false;
};

//Sirve para obtener fecha y hora actual
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

//Sirve para extraer en label el estado de la imagen
const getStatusImage = (data) => {
  if (data == true) {
    return "Activo";
  } else {
    return "Inactivo";
  }
};

//Sirve para obtener el nombre de la comunidad
const GetComunityName = (data) => {
  const finded = communitiesList.value.find(
    (community) => community.idComunidad === data
  );

  return data == null ? "" : finded.nombreComunidad;
};

//Sirve para guardar actividad

const saveActivity = async () => {
  try {
    loading.value = true;
    submitted.value = true;

    if (fileUpload.value != null && isEditing.value == true) {
      const Upload = fileUpload.value;
      await deleteImage();

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("ACT", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Info Actividad Actualizada Exitosamente",
        detail: "Info Actividad Actualizada",
        life: 3000,
      });
    } else if (fileUpload.value == null && isEditing.value == true) {
      const { data: insertData, error: insertDataError } = await supabase
        .from("InfoPaginaActividades")
        .upsert(activityInfo.value)
        .select();

      if (!insertDataError) {
        const dataGet = await supabase.from("InfoPaginaActividades").select();

        getActivity.value = dataGet.data;
      }
      toast.add({
        severity: "success",
        summary: "Info Actividad Actualizada Exitosamente",
        detail: "Info Actividad Actualizada",
        life: 3000,
      });
    } else {
      const Upload = fileUpload.value;

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("ACT", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Info Actividad Agregada Exitosamente",
        detail: "Info Actividad Agregada",
        life: 3000,
      });
    }

    visibleActivityDialog.value = false;
    loading.value = false;
    isEditing.value = false;
  } catch (error) {}
};

//Sirve para editar la actividad
const editActivity = (prod) => {
  activityInfo.value = { ...prod };
  isEditing.value = true;
  visibleActivityDialog.value = true;
};

//Sirve para eliminar la actividad
const deleteActivity = async () => {
  loading.value = true;

  await deleteImage();
  const { data: deleteData, error: deleteDataError } = await supabase
    .from("InfoPaginaActividades")
    .delete()
    .eq("idInfoPaginaActividad", activityInfo.value.idInfoPaginaActividad);

  if (!deleteDataError) {
    const dataGet = await supabase.from("InfoPaginaActividades").select();

    getActivity.value = dataGet.data;
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

//Sirve para guardar vocalia

const saveVacancy = async () => {
  try {
    loading.value = true;
    submitted.value = true;

    if (fileUpload.value != null && isEditing.value == true) {
      const Upload = fileUpload.value;
      await deleteImage();

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("VOC", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Vocalia Actualizada Exitosamente",
        detail: "Vocalia Actualizada",
        life: 3000,
      });
    } else if (fileUpload.value == null && isEditing.value == true) {
      const { data: insertData, error: insertDataError } = await supabase
        .from("Vocalias")
        .upsert(vacancy.value)
        .select();

      if (!insertDataError) {
        const dataGet = await supabase.from("Vocalias").select();

        getVacancy.value = dataGet.data;
      }
      toast.add({
        severity: "success",
        summary: "Vocalia Actualizada Exitosamente",
        detail: "Vocalia Actualizada",
        life: 3000,
      });
    } else {
      const Upload = fileUpload.value;

      if (Upload.files.length > 0) {
        const imagen = Upload.files[0];

        await uploadImage("VOC", imagen);
      }

      toast.add({
        severity: "success",
        summary: "Vocalia Agregada Exitosamente",
        detail: "Vocalia Agregada",
        life: 3000,
      });
    }

    visibleVacancyDialog.value = false;
    loading.value = false;
    isEditing.value = false;
  } catch (error) {}
};

//Sirve para editar la vocalia
const editVacancy = (prod) => {
  vacancy.value = { ...prod };
  isEditing.value = true;
  visibleVacancyDialog.value = true;
};

//Sirve para eliminar la vocalia
const deleteVacancy = async () => {
  loading.value = true;

  await deleteImage();
  const { data: deleteData, error: deleteDataError } = await supabase
    .from("Vocalias")
    .delete()
    .eq("idVocalia", vacancy.value.idVocalia);

  if (!deleteDataError) {
    const dataGet = await supabase.from("Vocalias").select();

    getVacancy.value = dataGet.data;
  }

  toast.add({
    severity: "success",
    summary: "Vocalia Eliminada Exitosamente",
    detail: "Vocalia Eliminada",
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

//Para redirigir
const goToLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

//Agregar Mensaje Inicial
const saveNewPopup = async () => {
  try {
    loading.value = true;
    submitted.value = true;
    const { data: insertMessage, error: messageError } = await supabase
      .from("Novedades")
      .upsert(newPopUp.value)
      .select();

    if (!messageError) {
      const dataGet = await supabase.from("Novedades").select();

      getNewPopUp.value = dataGet.data;
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

    visibleNewPopupDialog.value = false;
    submitted.value=false;
    loading.value = false;
    isEditing.value = false;
  } catch (error) {}
};

//Editar Mensaje
const editNewPopup = async (prod) => {
  newPopUp.value = { ...prod };
  isEditing.value = true;
  visibleNewPopupDialog.value = true;
};

//Eliminar Mensaje
const deleteNewPopup = async () => {
  submitted.value=true;
  loading.value=true;
  const { data: deleteData, error: deleteDataError } = await supabase
    .from("Novedades")
    .delete()
    .eq("idNovedad", newPopUp.value.idNovedad);

  if (!deleteDataError) {
    const dataGet = await supabase.from("Novedades").select();

    getNewPopUp.value = dataGet.data;
  }

  toast.add({
    severity: "success",
    summary: "Novedad Eliminada Exitosamente",
    detail: "Novedad Eliminada",
    life: 3000,
  });

  loading.value = false;
  visibleCarouselDeleteDialog.value = false;
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
