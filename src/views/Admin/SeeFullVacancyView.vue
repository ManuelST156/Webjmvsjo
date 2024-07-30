<template>
    <Toast />
    <main class="LoginRegister">
      <div id="containerRegister" class="card flex justify-content-center">
        <h2 id="Tittle">
          ¡¡¡Ficha de Postulación de Vocalías!!!
        </h2>
  
        <!--========================================================-->
          <!--Selección de Foto y Vacantes-->
        <!--========================================================-->
  
  
        <div class="firstGroup">

            
          <div class="pruebaImg">
            <img src="@/assets/Avatar1.png" id="imageUpload" />
          </div>
          <div class="block"></div>
          <!-- <div class="block"></div> -->
  
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
            <FloatLabel class="FloatLabel">
              <Textarea
                id="trayectory"
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
            <FloatLabel class="FloatLabel">
              <Textarea
                id="expectations"
                v-model="vacancyRequest.expectativasSolicitante"
                class="textLogin"
                :readonly="true"
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
    width: 230px;
    height: 200px;
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
    height: 210px;
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
  import { createClient } from "@supabase/supabase-js";

  
  //========================================================
  //Variables de Supabase
  
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  
  //========================================================
  
  
  
  //========================================================
  //Variables de estado
  const isSeeing=ref(false);
  
  //========================================================
  
  //========================================================
  //Variables de datos
  
  
  //Objetos
  const vacancyRequest = ref({});

  
  //Array
  const allAcademic = ref([]);
  const allServices = ref([]);
  
  
  //Variables Primitivas
  const catechistName = ref();
  const formationStage = ref();
  const comunityName=ref();
  const getRequestID=ref();
  

  

  onMounted(async () => {


if(localStorage.getItem('isSeeing'))
{
  getRequestID.value= localStorage.getItem("isSeeing");


  const requestGet= await supabase
    .from("Solicitudes")
    .select("*")
    .eq('idSolicitud', getRequestID.value);

  
  const requestServicesGet= await supabase
    .from("obtenerservicios")
    .select("*")
    .eq('idSolicitud',getRequestID.value);


  const requestAcademicGet= await supabase
  .from("obtenerformacionacademica")
  .select("*")
  .eq('idSolicitud',getRequestID.value);


  vacancyRequest.value=requestGet.data[0];
  /* vacancyRequest.value.sacramentosSolicitante=vacancyRequest.value.sacramentosSolicitante.split(','); */

  console.log(vacancyRequest.value.idComunidad);

    const GetComunity= await supabase
    .from("datoscompletocomunidad")
    .select("*")
    .eq('idComunidad',vacancyRequest.value.idComunidad);

    comunityName.value=GetComunity.data[0].nombreComunidad;
    formationStage.value=GetComunity.data[0].nombreEtapa;
    catechistName.value=GetComunity.data[0].nombrecatequista;
    

  
  requestAcademicGet.data.forEach(element => {
    const {idSolicitud, ...newObject} =element;
    allAcademic.value.push(newObject);
  });


  requestServicesGet.data.forEach(element => {

    const {idSolicitud, ...newObject} =element;
    allServices.value.push(newObject);
  });

  document.getElementById("imageUpload").src=vacancyRequest.value.imagenURL;
  isSeeing.value=!!localStorage.getItem("isSeeing");


  localStorage.removeItem("isSeeing");
}

});
  </script>
  