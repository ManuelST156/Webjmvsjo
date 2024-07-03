<template>
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      
      <h1 id="Tittle">Aplica a una Vocalia!!! 😁</h1>

      <div class="firstGroup">
        
        <div class="pruebaImg">
          <div id="imageUpload"></div>

        </div>
        
        <div class="prueba">
        <Dropdown
          v-model="selectedCity"
          editable
          :options="cities"
          optionLabel="name"
          placeholder="Vocalia a Aplicar"
          class="w-full md:w-32rem"
          
        />
        </div>
        
        <div class="prueba">
          
          <Toast />
          <FileUpload id="dropLogin" class="custom-file-upload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
        
        </div>
        


        


        <div class="fullLine">
          <h3>Datos Generales</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="username" v-model="username" />
            <label for="username">Nombres</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="username" v-model="username" />
            <label for="username">Apellidos</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
              <Calendar v-model="date" id="date" class="inputsLogin" />
              <label for="date">Fecha de Nacimiento</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText type="number"  class="inputsLogin" id="username" v-model="username" />
            <label for="username">Edad</label>
          </FloatLabel>

        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="username" v-model="username" />
            <label for="username">Numero de Telefono</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="username" v-model="username" />
            <label for="username">Correo Electronico</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <Dropdown
            v-model="selectedCity"
            editable
            :options="cities"
            optionLabel="name"
            placeholder="Estado Civil"
            class="w-full md:w-32rem"
          />
        </div>
        

        <div class="prueba">
          <Dropdown id="dropLogin"
            v-model="selectedCity"
            editable
            :options="cities"
            optionLabel="name"
            placeholder="Sexo"
            class="w-full md:w-32rem"
          />
        </div>


        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText class="inputsLogin" id="username" v-model="username" />
            <label for="username">Direccion</label>
          </FloatLabel>
        </div>
        

        <div class="fullLine">
          <h3>Formacion Academicos</h3>
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
          <Button label="Show" @click="visible = true" />
          <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw', height:'25vw' }" 
          >
            <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Direccion</label>
              </FloatLabel>
            </div>

            <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Direccion</label>
              </FloatLabel>
            </div>

            <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Direccion</label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
              <Button type="button" label="Save" @click="visible = false"></Button>
          </div>
          </Dialog>
        </div>

        
        <div class="fullLine">
          <h3>Vida Comunitaria</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="prueba">
          <Dropdown id="dropLogin"
            v-model="selectedCity"
            editable
            :options="cities"
            optionLabel="name"
            placeholder="Comunidad"
            class="w-full md:w-32rem"
          />
        </div>

        <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Horario de Formacion</label>
              </FloatLabel>
        </div>

        <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Nombre del Catequista</label>
              </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <Dropdown id="dropLogin"
              v-model="selectedCity"
              editable
              :options="cities"
              optionLabel="name"
              class="w-full md:w-32rem"
            />
            <label for="username">Etapa de Comunidad</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
              <Calendar v-model="date" id="date" class="inputsLogin" />
              <label for="date">Fecha de Nacimiento</label>
          </FloatLabel>
        </div>

        <div class="prueba">
          <FloatLabel class="FloatLabel">
            <InputText type="number"  class="inputsLogin" id="username" v-model="username" />
            <label for="username">Edad</label>
          </FloatLabel>

        </div>

        <div class="fullLine">
          <h3>Sacramentos</h3>
          <Divider class="Divider" type="solid" />

        </div>

        <div class="prueba">
          <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
              :maxSelectedLabels="3" class="w-full md:w-32rem" />
        </div>

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
          <Button label="Show" @click="visible = true" />
          <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw', height:'25vw' }" 
          >
            <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Direccion</label>
              </FloatLabel>
            </div>

            <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Direccion</label>
              </FloatLabel>
            </div>

            <div class="prueba">
                <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="username" />
                <label for="username">Direccion</label>
              </FloatLabel>
            </div>

            <div class="flex justify-content-end gap-2">
              <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
              <Button type="button" label="Save" @click="visible = false"></Button>
          </div>
          </Dialog>
        </div>

        <div class="fullLine">
          <h3>Cuentanos de ti!!!</h3>
          <Divider class="Divider" type="solid" />

        </div>


        <div class="fullLineText"> 
          <FloatLabel class="FloatLabel">
            <Textarea id="username" v-model="value" class="textLogin" />
            <label for="username">Direccion</label>
          </FloatLabel>
        </div>

        <div class="fullLineText"> 
          <FloatLabel class="FloatLabel">
            <Textarea id="username" v-model="value" class="textLogin" />
            <label for="username">Direccion</label>
          </FloatLabel>
        </div>

        <!-- final del div god -->
      </div>

      
      
    

      <div class="card flex justify-content-center">
        <Button label="Registrar" />
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>

::v-deep(.p-fileupload)
{
   
  .p-button{
    /* background-color: blue; */
    height: 40px;
    margin-bottom: 4rem;
    width: 35%;
  }
    

}

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

.prueba {
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

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);


const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};




const username = ref(null);
const password = ref(null);
const phone = ref(null);
const email = ref(null);
const visible = ref(false);

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const selectedCities = ref();

onMounted(async () => {
    ProductService.getProductsMini().then((data) => (products.value = data));

    let datos = await supabase
  .from('Solicitudes')
  .select('*')

  console.log(datos);

});
const products = ref();
</script>
