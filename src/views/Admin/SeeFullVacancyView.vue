<template>
  <Toast
    severity="custom"
    position="top-right"
    group="headless"
    @close="visible = false"
  >
    <template #container="{ message, closeCallback }">
      <section
        class="flex p-2 gap-3 w-full bg-black-alpha-90"
        style="border-radius: 10px"
      >
        <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
        <div class="flex flex-column gap-3 w-full">
          <p class="m-0 font-semibold text-base text-white">
            {{ message.summary }}
          </p>
          <p class="m-0 text-base text-700">{{ message.detail }}</p>
          <div class="flex flex-column gap-2">
            <ProgressBar
              :value="progress"
              :showValue="false"
              :style="{ height: '4px' }"
            ></ProgressBar>
            <label class="text-right text-xs text-white"
              >{{ progress }}% Subido...</label
            >
          </div>
        </div>
        <button
          @click="closeCallback()"
          class="p-button p-button-text p-button-secondary ml-auto"
          style="
            font-size: 1.5rem;
            color: white;
            background: transparent;
            border: none;
          "
        >
          &times;
          <!-- símbolo de multiplicación como 'X' -->
        </button>
      </section>
    </template>
  </Toast>
  <main class="LoginRegister">
    <div
      id="containerRegister"
      class="card flex justify-content-center"
      ref="contentRef"
    >
      <h2 id="Tittle">
        ¡¡¡Forma Parte del Consejo y Aplica a una Vocalía!!! 😁
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
            <InputText
              v-model="vacancyNames"
              id="vacancy"
              class="w-full md:w-32rem"
              :readonly="true"
            />
            <label for="vacancy">Vocalia/s Aplicadas</label>
          </FloatLabel>
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
              :readonly="true"
            />

            <label for="names">Nombres</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="lastNames"
              v-model="vacancyRequest.apellidosSolicitante"
              :readonly="true"
            />
            <label for="lastNames">Apellidos</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              v-model="vacancyRequest.fechaNacimientoSolicitante"
              id="birthDate"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="birthDate">Fecha de Nacimiento</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="age"
              v-model="vacancyRequest.edadSolicitante"
              :readonly="true"
            />
            <label for="age">Edad</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="phone"
              v-model="vacancyRequest.celularSolicitante"
              :readonly="true"
            />
            <label for="phone">Numero de Celular</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="email"
              v-model="vacancyRequest.correoSolicitante"
              :readonly="true"
            />
            <label for="email">Correo Electronico</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="civilStatus"
              v-model="vacancyRequest.estadoCivilSolicitante"
              :readonly="true"
            />
            <label for="civilStatus">Estado Civil</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="w-full md:w-32rem"
              id="gender"
              v-model="vacancyRequest.sexoSolicitante"
              :readonly="true"
            />
            <label for="gender">Sexo</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="address"
              v-model="vacancyRequest.direccionSolicitante"
              :readonly="true"
            />
            <label for="address">Direccion de Residencia</label>
          </FloatLabel>
        </div>

        <!--========================================================-->

        <!--========================================================-->
        <!--Sobre Mi-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Sobre Mi</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="quality"
              v-model="vacancyRequest.cualidades"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="quality"
              >MENCIONE TRES (3) CUALIDADES QUE LO IDENTIFIQUEN</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="havedSkill"
              v-model="vacancyRequest.habilidadesPoseidas"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="havedSkill"
              >MENCIONE TRES (3) HABILIDADES QUE POSEE</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="weaknesses"
              v-model="vacancyRequest.debilidades"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="weaknesses"
              >MENCIONE TRES (3) DEBILIDADES QUE LO IDENTIFIQUEN</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="desiredSkill"
              v-model="vacancyRequest.habilidadesDeseadas"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="desiredSkill"
              >MENCIONE TRES (3) HABILIDADES QUE LE GUSTARÍA ADQUIRIR</label
            >
          </FloatLabel>
        </div>

        <!--========================================================-->
        <!--Formacion Academica-->
        <!--========================================================-->

        <div class="fullLine">
          <h3>Formacion Academicos</h3>
          <Divider class="Divider" type="solid" />
        </div>

        <div class="fullLine" id="Table">
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
          </DataTable>
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
            <InputText
              v-model="comunityName"
              id="comunity"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="comunity">Comunidad</label>
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
            <InputText
              id="comunityDay"
              v-model="vacancyRequest.diaComunidad"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="comunityDay">Día de Formación</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              v-model="vacancyRequest.fechaIniciacion"
              id="dateStart"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="dateStart">Fecha de Iniciación</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="durationComunity"
              v-model="vacancyRequest.duracionComunidad"
              :readonly="true"
            />
            <label for="durationComunity">Duración en la Comunidad</label>
          </FloatLabel>
        </div>


        <div class="block">
          <Checkbox
            id="promise"
            v-model="vacancyRequest.hizoPromesa"
            :binary="true"
            :readonly="true"
          />
          <label for="promise" class="ml-2"> Hizo Promesa?</label>
        </div>

        <div class="block">
          <Checkbox
            id="consecration"
            v-model="vacancyRequest.hizoConsagracion"
            :binary="true"
            :readonly="true"
          />
          <label for="consecration" class="ml-2"> Hizo Consagracion?</label>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              v-model="vacancyRequest.fechaPromesa"
              id="promiseDate"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="promiseDate">Fecha de Promesa Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              v-model="vacancyRequest.fechaConsagracion"
              id="consecrationDate"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="consecrationDate">Fecha de Consagracion Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="promisePlace"
              v-model="vacancyRequest.lugarPromesa"
              :readonly="true"
            />
            <label for="promisePlace">Lugar Promesa Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              class="inputsLogin"
              id="consecrationPlace"
              v-model="vacancyRequest.lugarConsagracion"
              :readonly="true"
            />
            <label for="consecrationPlace">Lugar Consagracion Mariana</label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox
            id="accompaniment"
            v-model="vacancyRequest.recibeAcompañamiento"
            :binary="true"
            :readonly="true"
          />
          <label for="accompaniment" class="ml-2">
            Recibe Acompañamiento Espiritual?</label
          >
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
            <InputText
              id="sacraments"
              v-model="vacancyRequest.sacramentosSolicitante"
              class="inputsLogin"
              :readonly="true"
            />
            <label for="sacraments">Sacramentos Realizados</label>
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

        <div class="fullLine" id="Table">
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
          </DataTable>
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
          <FloatLabel>
            <Textarea
              id="trayectory"
              autoResize rows="5"
              v-model="vacancyRequest.trayectoriaSolicitante"
              class="textLogin"
              :readonly="true"
            />
            <label for="trayectory"
              >DESCRIBA BREVEMENTE CÓMO HA SIDO SU TRAYECTORIA EN JMV</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="expectations"
              v-model="vacancyRequest.expectativasSolicitante"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="expectations"
              >DESCRIBA SUS EXPECTATIVAS AL ASUMIR LA VOCALÍA A LA QUE SE
              POSTULA Y SU PLAN DE TRABAJO</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="reasonVacancy"
              v-model="vacancyRequest.razonPostulacion"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="reasonVacancy"
              >¿POR QUÉ ELEGISTE POSTULARTE PARA ESTE SERVICIO DENTRO DE LA
              ASOCIACIÓN?</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="futureVision"
              v-model="vacancyRequest.visualizacionFutura"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="futureVision"
              >¿CÓMO TE VISUALIZAS EN LOS PRÓXIMOS TRES AÑOS?</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="projects"
              v-model="vacancyRequest.proyectosDeseariaImpulsar"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="projects"
              >TRES (3) PROYECTOS QUE DESEARÍA IMPULSAR DESDE ESTA VOCALÍA
              (CÓMO)</label
            >
          </FloatLabel>
        </div>

        <div class="fullLineText">
          <FloatLabel>
            <Textarea
              id="vacancyAlternative"
              v-model="vacancyRequest.VocaliaDeseadaAlternativa"
              class="textLogin"
              autoResize rows="5"
              :readonly="true"
            />
            <label for="vacancyAlternative"
              >EN CASO DE NO SER ELECTO EN LA VOCALÍA DESEADA, ¿OPTARÍA POR OTRA
              VOCALIA EN EL CONSEJO DE CENTRO?, ¿CUÁL? Y ¿POR QUÉ?)</label
            >
          </FloatLabel>
        </div>


        <!--========================================================-->

        <!--========================================================-->
        <!-- final del div principal -->
        <!--========================================================-->
      </div>

      <!--========================================================-->
      <!--Boton para Descargar PDF-->
      <!--========================================================-->

      <div class="card flex justify-content-center">
        <Button
          class="buttonSend"
          label="Descargar Copia"
          @click="downloadPDF"
          type="submit"
          :loading="loading"
        />

      </div>

      <div class="card flex justify-content-center">
        <Button
          class="buttonSend"
          label="Descargar Copia con Formato"
          @click="downloadPDFFormat"
          type="submit"
          :loading="loading"
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
  padding: 10px 20px; // Añadido para mejorar el diseño en pantallas pequeñas
  box-sizing: border-box; // Incluye padding y border en el ancho total
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

  .p-datatable-thead > tr > th,
  .p-datatable-tbody > tr > td {
    border-color: var(--darkblue);
    border-width: 1px;
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
  width: 100%; // Cambiado a 100% para responsividad
  max-width: 230px; // Ancho máximo para evitar que se agrande demasiado en pantallas grandes
  height: 240px; // Ajustado para mantener la proporción
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
  box-sizing: border-box;
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
  width: 80%; // Ajustado para adaptarse a diferentes tamaños de pantalla
  max-width: 800px; // Ancho máximo para pantallas grandes
  height: auto;
  box-sizing: border-box; // Incluye padding y border en el ancho total
  overflow: hidden; // Evita el desbordamiento del contenedor
  margin-left: 0; // Asegura que el contenedor se alinee con el contenido principal
}

#Tittle {
  margin-bottom: 20px;
  margin-top: 0;
}

.block {
  width: 100%;
  height: 60px;
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
  box-sizing: border-box;
}

.blockUpload {
  width: 100%; // Cambiado a 100% para responsividad
  max-width: 300px; // Ancho máximo para pantallas grandes
  height: 60px;
  margin: 10px 0;
  min-width: 20px;
  box-sizing: border-box;
}

.pruebaImg {
  width: 100%;
  height: auto; // Ajustado para mantener la proporción
  margin: 10px 0;
  flex: 1 1 calc(50% - 20px);
  min-width: 200px;
  box-sizing: border-box;
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
  box-sizing: border-box;
}

.textLogin {
  width: 100%;
  min-height: 5em; /* Altura mínima para el textarea */
  resize: none; /* Desactiva el redimensionamiento manual */
  box-sizing: border-box; /* Incluye padding en el tamaño */
  overflow: hidden; /* Evita barras de scroll */
}


.fullLineText {
  display: flex;
  flex-direction: column;
  width: 100%; /* Asegura que ocupe todo el ancho */
  padding: 10px;
  transition: height 0.2s ease; 
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
  width: 100%; // Cambiado a 100% para responsividad
  max-width: 300px; // Ancho máximo para pantallas grandes
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
  box-sizing: border-box;
}

.labelFile:hover {
  background-color: var(--lightcyan);
}

.labelFile:active {
  background-color: var(--darkblue);
}

// Media Queries
@media (max-width: 768px) {
  #containerRegister {
    width: 95%;
    padding: 1rem;
    margin-left: 0; // Asegura que el formulario no quede oculto bajo el sidebar
  }

  .buttonSend {
    padding: 8px 16px;
  }

  .labelFile {
    font-size: 18px;
  }

  .icon {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  #containerRegister {
    padding: 0.5rem;
    margin-left: 0rem; // Asegura que el formulario no quede oculto bajo el sidebar
    width: 70%; // Ajustado para adaptarse a diferentes tamaños de pantalla
    align-items: normal;
    height: auto;
  }

  .buttonSend {
    padding: 6px 12px;
  }

  .labelFile {
    font-size: 16px;
  }

  .icon {
    font-size: 16px;
  }

  .pruebaImg {
    height: auto; // Ajustado para mantener la proporción en pantallas pequeñas
  }

  ::v-deep(.p-datatable) {
    .p-datatable-table {
      font-size: 12px; /* Ajusta el tamaño de la fuente de toda la tabla */
    }

    .p-datatable-thead > tr > th,
    .p-datatable-tbody > tr > td {
      padding: 6px; /* Ajusta el relleno de las celdas */
    }

    .p-datatable-thead > tr > th {
      font-size: 14px; /* Ajusta el tamaño de la fuente de los encabezados */
    }

    /* Ajusta el ancho de las columnas */
    .p-datatable-table colgroup col:nth-child(1) {
      width: 30%; /* Ancho de la primera columna */
    }

    .p-datatable-table colgroup col:nth-child(2) {
      width: 30%; /* Ancho de la segunda columna */
    }

    .p-datatable-table colgroup col:nth-child(3) {
      width: 40%; /* Ancho de la tercera columna */
    }
  }

  #Table {
    overflow: auto; /* Permite el desplazamiento horizontal si es necesario */
  }
}
</style>

<script setup>
//========================================================
//Imports de Modulos
//========================================================
import { ref, onMounted, h } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { createClient } from "@supabase/supabase-js";
import { uid } from "uid";
import { jwtDecode } from "jwt-decode";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
/* import { Tooltip } from 'primevue/tooltip'; */

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
const visible = ref(false);
const progress = ref(0);
const interval = ref();

//========================================================
//Variable de JWT para manejo de tokens
/* const jwt_decode = require('jwt-decode'); */
//========================================================

//========================================================
//Variables de estado
//========================================================

const submitted = ref(false);
const visibleAcademicDialog = ref(false);
const visibleServiceDialog = ref(false);
const loading = ref(false);
const isEditing = ref(false);
const router = useRouter();
const promiseState = ref(false);
const consecrationState = ref(false);
const texts= [''];

//========================================================
//Variables de datos
//========================================================

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
const academicDeleted = ref([]);
const servicesDeleted = ref([]);

//Variables Primitivas
const catechistName = ref();
const formationStage = ref();
const fileUpload = ref(null); //Variable para la imagen
const isEditAcademic = ref(false);
const isEditService = ref(false);
const getRequestID = ref();
const vacancySacrament = ref();
const vacancy = ref();
const vacancyNames=ref("");

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
//Mounted
//========================================================

onMounted(async () => {
  if (interval.value) {
    clearInterval(interval.value);
  }

  let vacancyGet = await supabase.from("Vocalias").select("*");

  let comunityGet = await supabase.from("datoscompletocomunidad").select("*");

  let formationStageGet = await supabase.from("EtapaFormacion").select("*");

  vacancyList.value = vacancyGet.data;
  comunityList.value = comunityGet.data;
  formationStageList.value = formationStageGet.data;
  console.log(formationStageList.value);

  if (localStorage.getItem("isSeeing")) {
    getRequestID.value = localStorage.getItem("isSeeing");

    const requestGet = await supabase
      .from("solicitudvocaliaconsulta")
      .select("*")
      .eq("idSolicitud", getRequestID.value);

    const requestServicesGet = await supabase
      .from("obtenerservicios")
      .select("*")
      .eq("idSolicitud", getRequestID.value);

    const requestAcademicGet = await supabase
      .from("obtenerformacionacademica")
      .select("*")
      .eq("idSolicitud", getRequestID.value);

    console.log(requestGet.data);
    const VacancyValues = requestGet.data.map((record) => record.idVocalia);
    console.log(requestGet.data);

    vacancyRequest.value = requestGet.data[0];
    console.log(vacancyRequest.value);
    vacancySacrament.value =
      vacancyRequest.value.sacramentosSolicitante.split(",");

    vacancy.value = VacancyValues;
    console.log(vacancy.value);

    requestAcademicGet.data.forEach((element) => {
      const { idSolicitud, ...newObject } = element;

      allAcademic.value.push(newObject);
    });

    requestServicesGet.data.forEach((element) => {
      const { idSolicitud, ...newObject } = element;
      allServices.value.push(newObject);
    });

    const comunityUser = comunityList.value.find(
      (Comunidad) => Comunidad.idComunidad == vacancyRequest.value.idComunidad
    );
    catechistName.value = comunityUser.nombrecatequista;

    document.getElementById("imageUpload").src = vacancyRequest.value.imagenURL;
    isEditing.value = !!localStorage.getItem("isSeeing");
    localStorage.removeItem("isSeeing");

    vacancy.value.forEach(element => {
      console.log(element);
      const Select = vacancyList.value.find(el => el.idVocalia === element);

      console.log(Select);
      if (Select) {
        vacancyNames.value += Select.nombreVocalia + ' , ';  
      }
    });

   
      vacancyNames.value = vacancyNames.value.slice(0, -2);  
    
    console.log(vacancyNames.value);
  }
});

//========================================================
//Methods
//========================================================

//Metodo para cargar datos Comunidades en el Dropdown al ser seleccionada
const loadComunityData = () => {
  const getDataComunity = comunityList.value.find(
    (c) => c.idComunidad === vacancyRequest.value.idComunidad
  );

  formationStage.value = getDataComunity.nombreEtapa;
  catechistName.value = getDataComunity.nombrecatequista;
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



// Función para capturar el contenido y generar el PDF
const exportPDF = async () => {
  const doc = new jsPDF();

  // Título principal
  const titulo = "Ficha de Postulacion " + vacancyRequest.value.nombresSolicitante + " " + vacancyRequest.value.apellidosSolicitante;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(titulo, 14, 10);

  // Subtítulo
  const vacancyMessage = "Vocalias a la que se Postula: " + vacancyNames.value;
  doc.setFontSize(12);
  doc.text(vacancyMessage, 14, 20);

  // Imagen
  const { data, error } = await supabase
    .storage
    .from('imageVacancy') // Nombre del bucket
    .download(vacancyRequest.value.codigoImagen);
  
  const imgData = await convertBlobToBase64(data);
  doc.setDrawColor(0); // Color de borde negro
  doc.setLineWidth(1);
  doc.rect(14, 30, 50, 50); // Dibujar un borde alrededor de la imagen
  doc.addImage(imgData, 'JPEG', 14, 30, 50, 50);

  let startY = 90;

  // Datos personales
  const tablePersonalData = [
    ["Datos Personales", ""],
    ["Nombres Solicitante", vacancyRequest.value.nombresSolicitante],
    ["Apellidos Solicitante", vacancyRequest.value.apellidosSolicitante],
    ["Edad", vacancyRequest.value.edadSolicitante],
    ["Numero de Celular", vacancyRequest.value.celularSolicitante],
    ["Correo Electronico", vacancyRequest.value.correoSolicitante],
    ["Estado Civil", vacancyRequest.value.estadoCivilSolicitante],
    ["Sexo Postulante", vacancyRequest.value.sexoSolicitante],
    ["Direccion de Residencia", vacancyRequest.value.direccionSolicitante],
    ["MENCIONE TRES (3) CUALIDADES QUE LO IDENTIFIQUEN", vacancyRequest.value.cualidades],
    ["MENCIONE TRES (3) HABILIDADES QUE POSEE", vacancyRequest.value.habilidadesPoseidas],
    ["MENCIONE TRES (3) DEBILIDADES QUE LO IDENTIFIQUEN", vacancyRequest.value.debilidades],
    ["MENCIONE TRES (3) HABILIDADES QUE LE GUSTARÍA ADQUIRIR", vacancyRequest.value.habilidadesDeseadas],
  ];

  // Formato de tabla personalizado
  doc.autoTable({
    head: [tablePersonalData[0]],
    body: tablePersonalData.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 }, // Color de fondo y tamaño de fuente
    headStyles: { fillColor: [41, 128, 185], textColor: 255 }, // Estilo de la cabecera
    alternateRowStyles: { fillColor: [245, 245, 245] }, // Estilo de filas alternas
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10; // Espacio entre tablas

  // Antecedentes académicos
  const tableAcademicBackground = [
    ["Titulo o Grado", "Institucion", "Año"],
  ];

  allAcademic.value.forEach((element) => {
    tableAcademicBackground.push([element.titulo, element.institucion, element.añoFinalizacion]);
  });

  doc.autoTable({
    head: [tableAcademicBackground[0]],
    body: tableAcademicBackground.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10;

  // Comunidad
  const communityNameSelect = comunityList.value.find(comunity => comunity.idComunidad == vacancyRequest.value.idComunidad).nombreComunidad;
  const formationStageSelect = formationStageList.value.find(stage => stage.idEtapaFormacion == vacancyRequest.value.idEtapaFormacion).nombreEtapa;
  const promiseSelect = vacancyRequest.value.hizoPromesa ? "SI" : "NO";
  const consecrationSelect = vacancyRequest.value.hizoConsagracion ? "SI" : "NO";

  const tableCommunity = [
    ["Datos de la Vida Comunitaria o de Formacion", ""],
    ["Comunidad", communityNameSelect],
    ["Etapa de Formacion", formationStageSelect],
    ["Nombre Catequista", catechistName.value],
    ["Dia de Formacion", vacancyRequest.value.diaComunidad],
    ["Fecha de Iniciacion", vacancyRequest.value.fechaIniciacion],
    ["Tiempo en la Comunidad", vacancyRequest.value.duracionComunidad],
    ["Tiene Acompañamiento Espiritual?", vacancyRequest.value.recibeAcompañamiento],
    ["Hizo la Promesa Mariana?", promiseSelect],
    ["Hizo la Consagracion Mariana?", consecrationSelect],
  ];

  doc.autoTable({
    head: [tableCommunity[0]],
    body: tableCommunity.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10;

  // Servicios realizados
  const tableServices = [
    ["Servicio Realizado", "Lugar", "Duracion"],
  ];

  allServices.value.forEach((element) => {
    tableServices.push([element.nombreServicio, element.lugarServicio, element.duracionServicio]);
  });

  doc.autoTable({
    head: [tableServices[0]],
    body: tableServices.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  startY = doc.autoTable.previous.finalY + 10;

  // Acerca de la Postulacion
  const tableAboutVacancy = [
    ["Acerca de la Postulacion", ""],
    ["DESCRIBA BREVEMENTE CÓMO HA SIDO SU TRAYECTORIA EN JMV", vacancyRequest.value.trayectoriaSolicitante],
    ["DESCRIBA SUS EXPECTATIVAS AL ASUMIR LA VOCALÍA A LA QUE SE POSTULA Y SU PLAN DE TRABAJO", vacancyRequest.value.expectativasSolicitante],
    ["¿POR QUÉ ELEGISTE POSTULARTE PARA ESTE SERVICIO DENTRO DE LA ASOCIACIÓN?", vacancyRequest.value.razonPostulacion],
    ["¿CÓMO TE VISUALIZAS EN LOS PRÓXIMOS TRES AÑOS?", vacancyRequest.value.visualizacionFutura],
    ["TRES (3) PROYECTOS QUE DESEARÍA IMPULSAR DESDE ESTA VOCALÍA", vacancyRequest.value.proyectosDeseariaImpulsar],
    ["EN CASO DE NO SER ELECTO EN LA VOCALÍA DESEADA, ¿OPTARÍA POR OTRA VOCALIA EN EL CONSEJO DECENTRO?, ¿CUÁL? Y ¿POR QUÉ?", vacancyRequest.value.VocaliaDeseadaAlternativa],
  ];

  doc.autoTable({
    head: [tableAboutVacancy[0]],
    body: tableAboutVacancy.slice(1),
    startY: startY,
    styles: { fillColor: [240, 240, 240], fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    tableLineWidth: 0.1,
    tableLineColor: [0, 0, 0] // Líneas de la tabla
  });

  return doc;
};


const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);  // Convertido a Base64
    reader.onerror = reject;
    reader.readAsDataURL(blob);  // Inicia la conversión del Blob
  });
};


const downloadPDF=async ()=>{
  var namePDF=`Solicitud de ${vacancyRequest.value.nombresSolicitante} ${vacancyRequest.value.apellidosSolicitante}.pdf`;
  console.log(namePDF);
  const pdf= await exportPDF();
  pdf.save(namePDF);
}

const downloadPDFFormat=async ()=>{
  window.print();
}


</script>
