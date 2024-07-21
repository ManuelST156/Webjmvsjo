<template>
  <Toast />
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h2 id="Tittle">
        😁¡¡¡Forma Parte del Consejo y Aplica a una Vocalía!!! 😁
      </h2>

      <!--========================================================-->
        <!--Selección de Foto y Vacantes-->
      <!--========================================================-->


      <div class="firstGroup">
        <div class="pruebaImg">
          <img src="@/assets/Avatar1.png" id="imageUpload" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="vacancyRequest.idVocalia"
              id="vacancy"
              :options="vacancyList"
              optionLabel="nombreVocalia"
              optionValue="idVocalia"
              class="w-full md:w-32rem"
              required="true"
              :class="{ 'p-invalid': submitted && !vacancyRequest.idVocalia }"
            />
            <label
              for="vacancy"
              :class="{ 'p-error': submitted && !vacancyRequest.idVocalia }"
            >
              {{
                submitted && !vacancyRequest.idVocalia
                  ? "Vocalia es Requerido"
                  : "Seleccionar Vocalia"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Toast />

          <label class="labelFile" for="fileInput">Subir una foto</label>
          <input
            @change="onFileChange"
            type="file"
            id="fileInput"
            accept="image/*"
          />
        </div>

        <!--========================================================-->


        <!--========================================================-->
        <!--Datos Generales-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Datos Generales</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="names"
              v-model="vacancyRequest.nombresSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.nombresSolicitante,
              }"
            />
            <label
              for="names"
              :class="{
                'p-error': submitted && !vacancyRequest.nombresSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.nombresSolicitante
                  ? "Nombres son requeridos"
                  : "Nombres"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="lastNames"
              v-model="vacancyRequest.apellidosSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.apellidosSolicitante,
              }"
            />
            <label
              for="lastNames"
              :class="{
                'p-error': submitted && !vacancyRequest.apellidosSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.apellidosSolicitante
                  ? "Apellidos son requeridos"
                  : "Apellidos"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="date"
              id="birthDate"
              class="inputsLogin"
              required="true"
              :class="{
                'p-invalid':
                  submitted && !vacancyRequest.fechaNacimientoSolicitante,
              }"
            />
            <label
              for="birthDate"
              :class="{
                'p-error':
                  submitted && !vacancyRequest.fechaNacimientoSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.fechaNacimientoSolicitante
                  ? "Fecha de Nac. es requerida"
                  : "Fecha de Nacimiento"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              type="number"
              class="inputsLogin"
              id="age"
              v-model="vacancyRequest.edadSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.edadSolicitante,
              }"
            />
            <label
              for="age"
              :class="{
                'p-error': submitted && !vacancyRequest.edadSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.edadSolicitante
                  ? "Edad es requerido"
                  : "Edad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="phone"
              v-model="vacancyRequest.celularSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.celularSolicitante,
              }"
            />
            <label
              for="phone"
              :class="{
                'p-error': submitted && !vacancyRequest.celularSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.celularSolicitante
                  ? "Numero Celular es requerido"
                  : "Numero de Celular"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              type="email"
              id="email"
              v-model="vacancyRequest.correoSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.correoSolicitante,
              }"
            />
            <label
              for="email"
              :class="{
                'p-error': submitted && !vacancyRequest.correoSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.correoSolicitante
                  ? "Correo Electronico es requerido"
                  : "Correo Electronico"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Dropdown
            v-model="vacancyRequest.estadoCivilSolicitante"
            :options="civilStatus"
            optionLabel="status"
            placeholder="Estado Civil"
            class="w-full md:w-32rem"
          />
        </div>

        <div class="block">
          <Dropdown
            id="dropLogin"
            v-model="vacancyRequest.sexoSolicitante"
            :options="genders"
            optionLabel="gender"
            placeholder="Sexo"
            class="w-full md:w-32rem"
          />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="address"
              v-model="vacancyRequest.direccionSolicitante"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.direccionSolicitante,
              }"
            />
            <label
              for="address"
              :class="{
                'p-error': submitted && !vacancyRequest.direccionSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.direccionSolicitante
                  ? "Direccion es requerida"
                  : "Direccion"
              }}
            </label>
          </FloatLabel>
        </div>

         <!--========================================================-->

        <!--========================================================-->
        <!--Formacion Academica-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Formacion Academicos</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLine">
          <DataTable :value="allAcademic">
            <Column
              style="min-width: 12rem"
              field="titulo"
              header="Titulo"
            ></Column>
            <Column
              style="min-width: 12rem"
              field="institucion"
              header="Institución"
            ></Column>
            <Column
              style="min-width: 4rem"
              field="añoFinalizacion"
              header="Año Finalizacion"
            ></Column>
            <Column style="min-width: 4rem">
              <template #body="slotProps">
                <Button
                  outlined
                  rounded
                  id="tableButton"
                  class="mr-2"
                  @click="editAcademic(slotProps.data)"
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
                  id="tableButton"
                  class="mr-2"
                  @click="deleteAcademic(slotProps.data)"
                >
                  <div class="icon-wrapper">
                    <span class="material-symbols-outlined icon">delete</span>
                  </div>
                </Button>
              </template>
            </Column>
          </DataTable>
        </div>

        <!--Dialog de Formación Academica -->

        <div class="fullLine">
          <Button
            class="buttonSend"
            label="Agregar Formacion Academica"
            @click="visibleAcademicDialog = true"
          />
          <Dialog
            v-model:visible="visibleAcademicDialog"
            modal
            header="Formación Académica"
            :style="{ width: '50vw', height: '25vw' }"
          >
            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="collegeDegree"
                  v-model="academicBackground.titulo"
                  required="true"
                  :class="{
                    'p-invalid': submitted && !academicBackground.titulo,
                  }"
                />
                <label
                  for="collegeDegree"
                  :class="{
                    'p-error': submitted && !academicBackground.titulo,
                  }"
                >
                  {{
                    submitted && !academicBackground.titulo
                      ? "Titulo es Requerido"
                      : "Titulo"
                  }}
                </label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="academicInstitution"
                  v-model="academicBackground.institucion"
                />
                <label for="academicInstitution">Institucion Academica</label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="3"
                  class="inputsLogin"
                  id="endYear"
                  v-model="academicBackground.añoFinalizacion"
                  required="true"
                  :class="{
                    'p-invalid':
                      submitted && !academicBackground.añoFinalizacion,
                  }"
                />

                <label
                  for="endYear"
                  :class="{
                    'p-error': submitted && !academicBackground.añoFinalizacion,
                  }"
                >
                  {{
                    submitted && !academicBackground.añoFinalizacion
                      ? "Año de Finalizacion es Requerido"
                      : "Año de Finalizacion"
                  }}
                </label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button
                class="buttonSend"
                type="button"
                label="Cancelar"
                @click="
                  (academicBackground = {}), (visibleAcademicDialog = false)
                "
              ></Button>
              <Button
                class="buttonSend"
                type="submit"
                label="Agregar"
                @click="saveAcademicBackground"
              ></Button>
            </div>
          </Dialog>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Vida comunitaria-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Vida Comunitaria</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="vacancyRequest.idComunidad"
              @change="loadComunityData"
              id="comunity"
              :options="comunityList"
              optionLabel="nombreComunidad"
              optionValue="idComunidad"
              class="w-full md:w-32rem"
              required="true"
              :class="{ 'p-invalid': submitted && !vacancyRequest.idComunidad }"
            />
            <label
              for="comunity"
              :class="{ 'p-error': submitted && !vacancyRequest.idComunidad }"
            >
              {{
                submitted && !vacancyRequest.idComunidad
                  ? "Comunidad es Requerido"
                  : "Comunidad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="formationStage"
              v-model="formationStage"
              :readonly="true"
            />
            <label for="formationStage">Etapa de Formacion</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="catechistName"
              v-model="catechistName"
              :readonly="true"
            />
            <label for="catechistName">Nombre del Catequista</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              id="comunityDay"
              v-model="vacancyRequest.diaComunidad"
              :options="comunityDays"
              optionLabel="day"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.diaComunidad,
              }"
            />
            <label
              for="comunityDay"
              :class="{ 'p-error': submitted && !vacancyRequest.diaComunidad }"
            >
              {{
                submitted && !vacancyRequest.idComunidad
                  ? "Dia de Formacion es Requerido"
                  : "Dia de Formacion"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Calendar
              v-model="date"
              id="dateStart"
              class="inputsLogin"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.fechaIniciacion,
              }"
            />
            <label
              for="dateStart"
              :class="{
                'p-error': submitted && !vacancyRequest.fechaIniciacion,
              }"
            >
              {{
                submitted && !vacancyRequest.fechaIniciacion
                  ? "Fecha de Iniciacion es Requerido"
                  : "Fecha de Iniciacion"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              type="number"
              class="inputsLogin"
              id="durationComunity"
              v-model="vacancyRequest.duracionComunidad"
              required="true"
              :class="{
                'p-invalid': submitted && !vacancyRequest.duracionComunidad,
              }"
            />
            <label
              for="durationComunity"
              :class="{
                'p-error': submitted && !vacancyRequest.duracionComunidad,
              }"
            >
              {{
                submitted && !vacancyRequest.duracionComunidad
                  ? "Duracion en la Comunidad es requerido"
                  : "Duracion en la Comunidad"
              }}
            </label>
          </FloatLabel>
        </div>
        <!--========================================================-->

        <!--========================================================-->
        <!--Sacramentos-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Sacramentos</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <MultiSelect
              id="sacraments"
              v-model="vacancyRequest.sacramentosSolicitante"
              :options="sacraments"
              optionLabel="sacraments"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid':
                  submitted && !vacancyRequest.sacramentosSolicitante,
              }"
              :maxSelectedLabels="3"
            />
            <label
              for="sacraments"
              :class="{
                'p-error': submitted && !vacancyRequest.sacramentosSolicitante,
              }"
            >
              {{
                submitted && !vacancyRequest.sacramentosSolicitante
                  ? "Sacramentos son Requeridos"
                  : "Sacramentos Realizados"
              }}
            </label>
          </FloatLabel>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Servicios Pastorales-->
        <!--========================================================-->
        <div class="fullLine">
          <h3>Servicios Pastorales</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLine">
          <DataTable :value="allServices">
            <Column
              style="min-width: 12rem"
              field="nombreServicio"
              header="Servicio Realizado"
            ></Column>
            <Column
              style="min-width: 12rem"
              field="lugarServicio"
              header="Lugar"
            ></Column>
            <Column
              style="min-width: 4rem"
              field="duracionServicio"
              header="Duracion"
            ></Column>
            <Column style="min-width: 4rem">
              <template #body="slotProps">
                <Button
                  outlined
                  rounded
                  id="tableButton"
                  class="mr-2"
                  @click="editService(slotProps.data)"
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
                  id="tableButton"
                  class="mr-2"
                  @click="deleteService(slotProps.data)"
                >
                  <div class="icon-wrapper">
                    <span class="material-symbols-outlined icon">delete</span>
                  </div>
                </Button>
              </template>
            </Column>
          </DataTable>
        </div>

         <!--Dialog de Servicios Pastorales-->
        <div class="fullLine">
          <Button
            class="buttonSend"
            label="Agregar Servicios Pastorales"
            @click="visibleServiceDialog = true"
          />
          <Dialog
            v-model:visible="visibleServiceDialog"
            modal
            header="Servicios Pastorales"
            :style="{ width: '50vw', height: '25vw' }"
          >
            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="serviceName"
                  v-model="pastoralService.nombreServicio"
                />
                <label for="serviceName">Nombre del Servicio</label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="40"
                  class="inputsLogin"
                  id="servicePlace"
                  v-model="pastoralService.lugarServicio"
                />
                <label for="servicePlace">Lugar del Servicio</label>
              </FloatLabel>
            </div>

            <div class="block">
              <FloatLabel class="FloatLabel">
                <InputText
                  maxlength="3"
                  class="inputsLogin"
                  id="serviceTime"
                  v-model="pastoralService.duracionServicio"
                />
                <label for="serviceTime">Duracion del Servicio</label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button
                class="buttonSend"
                type="button"
                label="Cancelar"
                @click="(visibleServiceDialog = false), (pastoralService = {})"
              ></Button>
              <Button
                class="buttonSend"
                type="button"
                label="Agregar"
                @click="savePastoralServices"
              ></Button>
            </div>
          </Dialog>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Cuentanos de ti-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Cuentanos de ti!!!</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              id="trayectory"
              v-model="vacancyRequest.trayectoriaSolicitante"
              class="textLogin"
            />
            <label for="trayectory"
              >DESCRIBA BREVEMENTE CÓMO HA SIDO SU TRAYECTORIA EN JMV</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel class="FloatLabel">
            <Textarea
              id="expectations"
              v-model="vacancyRequest.expectativaSolicitante"
              class="textLogin"
            />
            <label for="expectations"
              >DESCRIBA SUS EXPECTATIVAS AL ASUMIR LA VOCALÍA A LA QUE SE
              POSTULA Y SU PLAN DE TRABAJO</label
            >
          </FloatLabel>
        </div>
        <!--========================================================-->


        <!--========================================================-->
        <!-- final del div principal -->
        <!--========================================================-->
      </div>

       <!--========================================================-->
       <!--Boton para crear el registro-->
       <!--========================================================-->

      <div class="card flex justify-content-center">
        <Button
          class="buttonSend"
          label="Registrar"
          @click="saveVacancy"
          type="submit"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.buttonSend {
  margin: 5px 0;
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
  width: 70%;
  height: 230px;
  background-color: lightgray;
  margin-bottom: 30px;
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

#Tittle {
  /* align-self: center; */
  margin-bottom: 20px;
  margin-top: 0;
}

.block {
  width: 100%;
  height: 60px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
}

.pruebaImg {
  width: 100%;
  height: 200px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
}

.firstGroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.inputsLogin {
  height: 40px;
  margin-bottom: 4rem;
  width: 100%;
}

.textLogin {
  height: 100px;
  margin-bottom: 4rem;
  width: 100%;
  resize: none;
}

.fullLineText {
  flex: 1 1 100%;
  height: 80px;
  margin: 30px 0;
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
  width: 35%;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.labelFile:hover {
  background-color: var(--lightcyan);
}

.labelFile:active {
  background-color: var(--darkblue);
}
</style>

<script setup>

//========================================================
//Imports de Modulos
//========================================================
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { ProductService } from "@/services/ProductService";
import { createClient } from "@supabase/supabase-js";


//========================================================
//Variables de Supabase

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);


//========================================================


//========================================================
//Variables de Toast

const toast = useToast();
//========================================================

//========================================================
//Variables de estado

const submitted = ref(false);
const visibleAcademicDialog = ref(false);
const visibleServiceDialog = ref(false);

//========================================================

//========================================================
//Variables de datos


//Objetos
const vacancyRequest = ref({});
const academicBackground = ref({});
const pastoralService = ref({});

//Array
const allAcademic = ref([]);
const allServices = ref([]);
const vacancyList = ref([]);
const comunityList = ref([]);
const usersList = ref([]);
const formationStageList = ref([]);

//Variables Primitivas
const catechistName = ref();
const formationStage = ref();
const fileUpload = ref(null); //Variable para la imagen
const isEditAcademic = ref(false);
const isEditService = ref(false);


//Variable Array con Datos Predefinidos
const civilStatus = ref([
  { status: "Soltero/a", value: "Soltero/a" },
  { status: "Casado/a", value: "Casado/a" },
  { status: "Viudo/a", value: "Viudo/a" },
]);

const genders = ref([
  { gender: "Masculino", value: "Masculino" },
  { gender: "Femenino", value: "Femenino" },
]);

const comunityDays = ref([
  { day: "Sabado en la tarde", value: "Sabado en la tarde" },
  { day: "Sabado en la noche", value: "Sabado en la noche" },
  { day: "Domingo en la mañana", value: "Domingo en la mañana" },
  { day: "Domingo en la tarde", value: "Domingo en la tarde" },
  { day: "Domingo en la noche", value: "Domingo en la noche" },
  { day: "Lunes en la tarde", value: "Lunes en la tarde-noche" },
  { day: "Martes en la tarde", value: "Martes en la tarde-noche" },
  { day: "Miercoles en la tarde", value: "Miercoles en la tarde-noche" },
  { day: "Jueves en la tarde", value: "Jueves en la tarde-noche" },
  { day: "Viernes en la tarde", value: "Viernes en la tarde-noche" },
]);

const sacraments = ref([
  { sacraments: "Bautismo", value: "Bautismo" },
  { sacraments: "Confirmación", value: "Confirmación" },
  { sacraments: "Eucaristía", value: "Eucaristía" },
]);



//========================================================

//========================================================
//Mounted

onMounted(async () => {

  /* let datos = await supabase
  .from('Solicitudes')
  .select('*') */

  let vacancyGet = await supabase.from("Vocalias").select("*");

  let comunityGet = await supabase.from("Comunidad").select("*");

  let usersGet = await supabase.from("Usuarios").select("*");

  let formationStageGet = await supabase.from("EtapaFormacion").select("*");

  vacancyList.value = vacancyGet.data;
  comunityList.value = comunityGet.data;
  usersList.value = usersGet.data;
  formationStageList.value = formationStageGet.data;

  console.log(vacancyList.value);
  console.log(comunityList.value);
});

//========================================================


//========================================================
//Methods


//Metodo para Guardar Solicitudes
const saveVacancy = () => {
  const upload = fileUpload.value;

  console.log(upload.files[0]);
  console.log("bien");
  console.log(vacancyRequest.value.idVocalia);
  submitted.value = true;
};

//Metodo para cargar datos Comunidades en el Dropdown al ser seleccionada
const loadComunityData = () => {
  const getDataComunity = comunityList.value.find(
    (c) => c.idComunidad === vacancyRequest.value.idComunidad
  );

  if (getDataComunity) {
    const catechistID = getDataComunity.idCatequista;
    const formationStageID = getDataComunity.idEtapaFormacion;

    const getUser = usersList.value.find((c) => c.idUsuario === catechistID);
    const getFormationStage = formationStageList.value.find(
      (c) => c.idEtapaFormacion === formationStageID
    );

    catechistName.value =
      getUser.nombresUsuario + " " + getUser.apellidosUsuario;
    formationStage.value = getFormationStage.nombreEtapa;
  }
};

//Metodo para mostrar la imagen, desde que es cargada
const onFileChange = (event) => {
  console.log("hola llege");
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

//Funcion para Guardar Formacion Academica de Forma Temporal
const saveAcademicBackground = () => {
  console.log(academicBackground.value);
  if (
    academicBackground.value &&
    Object.keys(academicBackground.value).length > 0
  ) {
    console.log("entro");
    if (academicBackground.value.id) {
      console.log("editando");
      allAcademic.value[findIndexById(academicBackground.value.id)] =
        academicBackground.value;
      toast.add({
        severity: "success",
        summary: "Registro Actualizado",
        detail: "Formacion Academica Acatualizada",
        life: 3000,
      });
    } else {
      console.log("que problema");

      academicBackground.value.id = createId();
      allAcademic.value.push(academicBackground.value);

      toast.add({
        severity: "success",
        summary: "Registro Agregado",
        detail: "Formacion Academica Agregada",
        life: 3000,
      });
      console.log(allAcademic.value);
    }
    visibleAcademicDialog.value = false;
    academicBackground.value = {};
  } else {
    toast.add({
      severity: "success",
      summary: "Registro Vacio",
      detail: "No se Agrega a la tabla",
      life: 3000,
    });
  }
};

//Funcion para Guarda los Servicios Pastorales de Forma Temporal
const savePastoralServices = () => {
  console.log(pastoralService.value);
  if (pastoralService.value && Object.keys(pastoralService.value).length > 0) {
    console.log(pastoralService.value);
    if (pastoralService.value.id) {
      allServices.value[findIndexById(pastoralService.value.id)] =
        pastoralService.value;
      toast.add({
        severity: "success",
        summary: "Registro Actualizado",
        detail: "Servicio Pastoral Acatualizada",
        life: 3000,
      });
    } else {
      pastoralService.value.id = createId();
      allServices.value.push(pastoralService.value);

      toast.add({
        severity: "success",
        summary: "Registro Agregado",
        detail: "Servicio Pastoral Agregada",
        life: 3000,
      });
    }
    visibleServiceDialog.value = false;
    pastoralService.value = {};
  } else {
    toast.add({
      severity: "success",
      summary: "Registro Vacio",
      detail: "No se Agrega a la tabla",
      life: 3000,
    });
  }
};

//Funcion para Editar Datos de Formacion Academica
const editAcademic = (prod) => {
  academicBackground.value = { ...prod };
  isEditAcademic.value = true;
  visibleAcademicDialog.value = true;
};

//Funcion para Borrar Datos de Formacion Academica
const deleteAcademic = (prod) => {
  academicBackground.value = prod;
  allAcademic.value = allAcademic.value.filter(
    (val) => val.id !== academicBackground.value.id
  );
  academicBackground.value = {};
  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Formacion academica Eliminada",
    life: 3000,
  });
};

//Funcion para Editar Datos de Servicios Pastorales
const editService = (prod) => {
  pastoralService.value = { ...prod };
  isEditService.value = true;
  visibleServiceDialog.value = true;
};

//Funcion para Borrar Datos de Servicios Pastorales
const deleteService = (prod) => {
  pastoralService.value = prod;
  allServices.value = allServices.value.filter(
    (val) => val.id !== pastoralService.value.id
  );
  pastoralService.value = {};
  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Formacion academica Eliminada",
    life: 3000,
  });
};


//Funcion para Encontrar el ID para Editar
const findIndexById = (id) => {
  if (isEditAcademic.value) {
    let index = -1;
    for (let i = 0; i < allAcademic.value.length; i++) {
      if (allAcademic.value[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  } else {
    let index = -1;
    for (let i = 0; i < allServices.value.length; i++) {
      if (allServices.value[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
};


//Funcion para Crear ID para los Objetos de las Tablas
const createId = () => {
  let id = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};
//========================================================
</script>
