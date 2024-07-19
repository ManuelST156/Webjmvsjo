<template>
  <Toast />
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      
      <h1 id="Tittle">Aplica a una Vocalia!!! 😁</h1>

      <div class="firstGroup">
        
        <div class="pruebaImg">
          <img src="https://i.blogs.es/8eaa43/goku-day-dragon-ball/1366_2000.jpeg" id="imageUpload">

        </div>
        
        <div class="block">
        <FloatLabel class="FloatLabel">
          <Dropdown
            v-model="vacancyRequest.idVocalia"
            id="vacancy"
            editable
            :options="cities"
            optionLabel="name"
            class="w-full md:w-32rem"
            required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.idVocalia }"
          />
          <label for="vacancy" :class="{ 'p-error': submitted && !vacancyRequest.idVocalia }">
            {{
              submitted && !vacancyRequest.idVocalia ? "Vocalia es Requerido" : "Seleccionar Vocalia"
            }}
          </label>
        </FloatLabel>
      </div>

        
        <div class="block">
          
          <Toast />
          <FileUpload id="dropLogin" class="custom-file-upload" mode="basic"   accept="image/*"  
          @upload="onUpload" chooseLabel="Sube una Imagen" />
        
        </div>
        
        


        <div class="fullLine">
          <h3>Datos Generales</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="names" v-model="vacancyRequest.nombresSolicitante" required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.nombresSolicitante }"
             />
            <label for="names" :class="{ 'p-error': submitted && !vacancyRequest.nombresSolicitante }">
            {{
              submitted && !vacancyRequest.nombresSolicitante ? "Nombres son requeridos" : "Nombres"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="lastNames" v-model="vacancyRequest.apellidosSolicitante" required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.apellidosSolicitante }"
             />
            <label for="lastNames" :class="{ 'p-error': submitted && !vacancyRequest.apellidosSolicitante }">
            {{
              submitted && !vacancyRequest.apellidosSolicitante ? "Apellidos son requeridos" : "Apellidos"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
              <Calendar v-model="date" id="birthDate" class="inputsLogin" required="true" 
              :class="{ 'p-invalid': submitted && !vacancyRequest.fechaNacimientoSolicitante }"
               />
              <label for="birthDate" :class="{ 'p-error': submitted && !vacancyRequest.fechaNacimientoSolicitante }">
            {{
              submitted && !vacancyRequest.fechaNacimientoSolicitante ? "Fecha de Nac. es requerida" : "Fecha de Nacimiento"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText type="number"  class="inputsLogin" id="age" v-model="vacancyRequest.edadSolicitante" required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.edadSolicitante }"
             />
            <label for="age" :class="{ 'p-error': submitted && !vacancyRequest.edadSolicitante }">
            {{
              submitted && !vacancyRequest.edadSolicitante ? "Edad es requerido" : "Edad"
            }}
          </label>
          </FloatLabel>

        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="phone" v-model="vacancyRequest.celularSolicitante" required="true" 
            :class="{ 'p-invalid': submitted && !vacancyRequest.celularSolicitante }"
            />
            <label for="phone" :class="{ 'p-error': submitted && !vacancyRequest.celularSolicitante }">
            {{
              submitted && !vacancyRequest.celularSolicitante ? "Numero Celular es requerido" : "Numero de Celular"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" type="email" id="email" v-model="vacancyRequest.correoSolicitante" required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.correoSolicitante }"
             />
            <label for="email" :class="{ 'p-error': submitted && !vacancyRequest.correoSolicitante }">
            {{
              submitted && !vacancyRequest.correoSolicitante ? "Correo Electronico es requerido" : "Correo Electronico"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <Dropdown
            v-model="vacancyRequest.estadoCivilSolicitante"
            editable
            :options="civilStatus"
            optionLabel="status"
            placeholder="Estado Civil"
            class="w-full md:w-32rem"
          />
        </div>
        

        <div class="block">
          <Dropdown id="dropLogin"
            v-model="vacancyRequest.sexoSolicitante"
            editable
            :options="genders"
            optionLabel="gender"
            placeholder="Sexo"
            class="w-full md:w-32rem"
          />
        </div>


        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="address" v-model="vacancyRequest.direccionSolicitante" required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.direccionSolicitante }"
             />
            <label for="address" :class="{ 'p-error': submitted && !vacancyRequest.direccionSolicitante }">
            {{
              submitted && !vacancyRequest.direccionSolicitante ? "Direccion es requerida" : "Direccion"
            }}
          </label>
          </FloatLabel>
        </div>
        
        <!--Formacion Academica-->

        <div class="fullLine">
          <h3>Formacion Academicos</h3>
          <Divider class="Divider" type="solid" />

        </div>
        
        <div class="fullLine">
          
          <DataTable :value="allAcademic">
              <Column field="titulo" header="Titulo"></Column>
              <Column field="institucion" header="Institución"></Column>
              <Column field="añoFinalizacion" header="Año Finalizacion"></Column>
          </DataTable>
          

        </div>


        

        <div class="fullLine">
          <Button label="Agregar Formacion Academica" @click="visibleAcademicDialog = true" />
          <Dialog v-model:visible="visibleAcademicDialog" modal header="Formación Académica" :style="{ width: '50vw', height:'25vw' }" 
          >
          
            <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="tittle" v-model="titulo" required="true" 
                :class="{ 'p-invalid': submitted && !titulo }" />
                <label for="password" :class="{ 'p-error': submitted && !titulo }">
                {{
                  submitted && !titulo ? "Titulo es Requerido" : "Titulo"
                }}
          </label>
              </FloatLabel>
            </div>

            <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="academicInstitution" v-model="institucion" />
                <label for="username">Institucion Academica</label>
              </FloatLabel>
            </div>

            <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="endYear" v-model="añoFinalizacion" required="true" 
                :class="{ 'p-invalid': submitted && !añoFinalizacion }" />
                <label for="endYear" :class="{ 'p-error': submitted && !añoFinalizacion }">
                {{
                  submitted && !añoFinalizacion? "Año de Finalizacion es Requerido" : "Año de Finalizacion"
                }}
          </label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button type="button" label="Cancel" severity="secondary" @click="visibleAcademicDialog = false"></Button>
              <Button type="submit" label="Save"  @click="saveAcademicBackground"></Button>
          </div>
          </Dialog>
        </div>


        <!--Vida comunitaria-->
        
        <div class="fullLine">
          <h3>Vida Comunitaria</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="block">
        <FloatLabel class="FloatLabel">
          <Dropdown
            v-model="vacancyRequest.idComunidad"
            id="comunity"
            editable
            :options="cities"
            optionLabel="name"
            class="w-full md:w-32rem"
            required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.idComunidad }"
          />
          <label for="comunity" :class="{ 'p-error': submitted && !vacancyRequest.idComunidad }">
            {{
              submitted && !vacancyRequest.idComunidad ? "Comunidad es Requerido" : "Comunidad"
            }}
          </label>
        </FloatLabel>
      </div>

        <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="formationStage" v-model="username" :readonly="true" />
                <label for="formationStage">Etapa de Formacion</label>
              </FloatLabel>
        </div>

        <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="catechistName" v-model="username" :readonly="true" />
                <label for="catechistName">Nombre del Catequista</label>
              </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown 
            id="comunityDay"
              v-model="vacancyRequest.diaComunidad"
              editable
              :options="comunityDays"
              optionLabel="day"
              class="w-full md:w-32rem"
              required="true"
              :class="{ 'p-invalid': submitted && !vacancyRequest.diaComunidad }"
            />
            <label for="comunityDay" :class="{ 'p-error': submitted && !vacancyRequest.diaComunidad }">
            {{
              submitted && !vacancyRequest.idComunidad ? "Dia de Formacion es Requerido" : "Dia de Formacion"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
              <Calendar v-model="date" id="dateStart" class="inputsLogin" required="true" 
              :class="{ 'p-invalid': submitted && !vacancyRequest.fechaIniciacion }" />
              <label for="dateStart" :class="{ 'p-error': submitted && !vacancyRequest.fechaIniciacion }">
            {{
              submitted && !vacancyRequest.fechaIniciacion ? "Fecha de Iniciacion es Requerido" : "Fecha de Iniciacion"
            }}
          </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText type="number"  class="inputsLogin" id="durationComunity" v-model="vacancyRequest.duracionComunidad" required="true"
            :class="{ 'p-invalid': submitted && !vacancyRequest.duracionComunidad}"
             />
            <label for="durationComunity" :class="{ 'p-error': submitted && !vacancyRequest.duracionComunidad }">
            {{
              submitted && !vacancyRequest.duracionComunidad ? "Duracion en la Comunidad es requerido" : "Duracion en la Comunidad"
            }}
          </label>
          </FloatLabel>

        </div>

        <!--Sacramentos-->

        <div class="fullLine">
          <h3>Sacramentos</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <MultiSelect 
            id="sacraments"
              v-model="vacancyRequest.sacramentosSolicitante"
              editable
              :options="sacraments"
              optionLabel="sacraments"
              class="w-full md:w-32rem"
              required="true"
              :class="{ 'p-invalid': submitted && !vacancyRequest.sacramentosSolicitante }"
              :maxSelectedLabels="3"
            />
            <label for="sacraments" :class="{ 'p-error': submitted && !vacancyRequest.sacramentosSolicitante}">
            {{
              submitted && !vacancyRequest.sacramentosSolicitante ? "Sacramentos son Requeridos" : "Sacramentos Realizados"
            }}
          </label>
          </FloatLabel>
        </div>


        <!--Servicios Pastorales-->

        <div class="fullLine">
          <h3>Servicios Pastorales</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="fullLine">
          
          <DataTable :value="products">
              <Column field="code" header="Code"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Quantity"></Column>
          </DataTable>
          

        </div>

        

        

        <div class="fullLine">
          <Button label="Show" @click="visibleServiceDialog = true" />
          <Dialog v-model:visible="visibleServiceDialog" modal header="Servicios Pastorales" :style="{ width: '50vw', height:'25vw' }" 
          >
            <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="serviceName" v-model="pastoralServices.nombreServicio" />
                <label for="serviceName">Nombre del Servicio</label>
              </FloatLabel>
            </div>

            <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="servicePlace" v-model="pastoralServices.lugarServicio" />
                <label for="servicePlace">Lugar del Servicio</label>
              </FloatLabel>
            </div>

            <div class="block">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="serviceTime" v-model="pastoralServices.nombreServicio" />
                <label for="serviceTime">Duracion del Servicio</label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
              <Button type="button" label="Save" @click="visible = false"></Button>
          </div>
          </Dialog>
        </div>


        <!--Cuentanos de ti-->
        <div class="fullLine">
          <h3>Cuentanos de ti!!!</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="fullLineText"> 
          <FloatLabel class="FloatLabel">
            <Textarea id="trayectory" v-model="vacancyRequest.trayectoriaSolicitante" class="textLogin" />
            <label for="trayectory">DESCRIBA BREVEMENTE CÓMO HA SIDO SU TRAYECTORIA EN JMV</label>
          </FloatLabel>
        </div>

        <div class="fullLineText"> 
          <FloatLabel class="FloatLabel">
            <Textarea id="expectations" v-model="vacancyRequest.expectativaSolicitante" class="textLogin" />
            <label for="expectations">DESCRIBA SUS EXPECTATIVAS AL ASUMIR LA VOCALÍA A LA QUE SE POSTULA Y SU PLAN DE TRABAJO</label>
          </FloatLabel>
        </div>

        <!-- final del div god -->
      </div>

      

      <div class="card flex justify-content-center">
        <Button label="Registrar" @click="saveVacancy" type="submit"/>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>

::v-deep(.p-fileupload)
{
   
  .p-button{
    background-color: var(--darkblue);
    height: 40px;
    margin-bottom: 4rem;
    width: 35%;
    border: none;
  }

  .p-button-label{
    font-weight: bold;
  }

  .p-button:hover{
    background-color: var(--lightcyan);
  }

  .p-button:active{
    background-color: var(--darkblue);
  }
    

}

/* .buttonSend {
  margin: 3px 0;
  background-color: var(--darkblue);
}

.buttonSend:hover {
  background-color: var(--lightcyan);
}

.buttonSend:active {
  background-color: var(--darkblue);
} */

::v-deep(.p-datatable)
{
   
  .p-datatable-table{
    
    border-collapse: collapse;

  }

  .p-datatable-thead > tr > th{
    border-color:green ;
    border-width: 1px 1px 1px 1px;
  }
  .p-datatable-tbody > tr > td 
  {
    border-color:green ;
    border-width: 1px 1px 1px 1px;
  }
    

}


#imageUpload{
  width: 70%;
  height: 200px;
  background-color: lightgray;
  margin-bottom: 30px;
}



.LoginRegister {
  background: linear-gradient(200deg, var(--rblight), var(--rblightblue));
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  

}

.fullLine{

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

.firstGroup{
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

.fullLineText{

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
</style>

<script setup>
import { ref,onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { ProductService } from '@/services/ProductService';
import { createClient } from '@supabase/supabase-js'

//Variables de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);


//Variables de Toast
const toast = useToast();


//Variables de estado

const submitted=ref(false);
const visibleAcademicDialog = ref(false);
const visibleServiceDialog=ref(false);

//Variables de datos

const vacancyRequest=ref({});
const academicBackground=ref({});
const allAcademic=ref([]);
const pastoralServices=ref({});

const titulo=ref();
const institucion=ref();
const añoFinalizacion=ref();

const contador=0;

const username = ref(null);

const civilStatus=ref([
  {status:"Soltero/a", value:"Soltero/a"},
  {status:"Casado/a", value:"Casado/a"},
  {status:"Viudo/a", value:"Viudo/a"}
]);

const genders=ref([
{gender:"Masculino", value:"Masculino"},
{gender:"Femenino", value:"Femenino"},
]);

const comunityDays=ref([
  {day: "Sabado en la tarde", value: "Sabado en la tarde"},
  {day: "Sabado en la noche", value: "Sabado en la noche"},
  {day: "Domingo en la mañana", value: "Domingo en la mañana"},
  {day: "Domingo en la tarde", value: "Domingo en la tarde"},
  {day: "Domingo en la noche", value: "Domingo en la noche"},
  {day: "Lunes en la tarde", value: "Lunes en la tarde-noche"},
  {day: "Martes en la tarde", value: "Martes en la tarde-noche"},
  {day: "Miercoles en la tarde", value: "Miercoles en la tarde-noche"},
  {day: "Jueves en la tarde", value: "Jueves en la tarde-noche"},
  {day: "Viernes en la tarde", value: "Viernes en la tarde-noche"},
]);

const sacraments=ref([
  {sacraments:"Bautismo",value:"Bautismo"},
  {sacraments:"Confirmación",value:"Confirmación"},
  {sacraments:"Eucaristía",value:"Eucaristía"},
]);

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const selectedCities = ref();


//Mounted
onMounted(async () => {
    ProductService.getProductsMini().then((data) => (products.value = data));

    let datos = await supabase
  .from('Solicitudes')
  .select('*')

  console.log(datos);

});


//Funciones

const products = ref();

const saveVacancy=()=>{
  console.log("bien");
  submitted.value=true;
}

const saveAcademicBackground=()=>{

  console.log(titulo.value);

  

  allAcademic.value.push({
    titulo: titulo.value,
    institucion: institucion.value,
    añoFinalizacion:añoFinalizacion.value
  });

  titulo.value=null;
  institucion.value=null;
  añoFinalizacion.value=null;

  console.log(allAcademic.value);
  visibleAcademicDialog.value=false;
}
</script>
