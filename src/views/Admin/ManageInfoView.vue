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
      @click="(visibleCommunityDialog = true), (imageCommunity = {}), (direction='Community')"
    />

      <div class="fullLine">
      <DataTable :value="getImgCommunity">
        <Column
            :style="{ minWidth: '4rem', fontSize: '14px' }"
            header="Comunidad"
          >
          <template #body="slotProps">
              <span class="ml-2">{{ GetComunityName(slotProps.data.idComunidad) }}</span>
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
              @click="editImageCommunity(slotProps.data),(direction='Community'),console.log(direction)"
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
              @click="() => { direction = 'Community'; deleteCommunityDialog(slotProps.data) }"
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
      @click="(visibleActivityDialog = true), (activityInfo = {}),(direction='Activity')"
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
      <Column style="min-width: 8rem" field="estaActivo" header="Estado Actividad">
              <template #body="slotProps">
                  <div class="fullLine">
                  <Checkbox v-model="slotProps.data.estaActivo" :binary="true" :readonly="true" /> 
                  <span class="ml-2">{{ getStatusImage(slotProps.data.estaActivo) }}</span>
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
              @click="editActivity(slotProps.data),(direction='Activity')"
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
              @click="{ direction = 'Activity'; deleteCommunityDialog(slotProps.data) }"
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
        :style="{ width: '40vw', height: '31vw' }"
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
            :class="{ 'p-error': submitted && !imageCommunity.idComunidad}"
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

        <label class="labelFile" for="fileInput">Subir una foto</label>
        <input
          @change="onFileChange"
          type="file"
          id="fileInput"
          accept="image/*"
        />
      </div>

      
      <div class="pruebaImg">
          <img v-if="isEditing==true" :src="imageCommunity.imagenComunidadUrl" id="imageUpload" />
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


    <!--Agregar noticias recientes-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleActivityDialog"
        modal
        header="Noticias Recientes"
        :style="{ width: '40vw', height: '31vw' }"
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
              <Checkbox v-model="activityInfo.estaActivo" :binary="true" />
              <label for="ingredient1" class="ml-2"> Esta Activa? </label>            
        </div>
      

        <div class="blockUpload">
        <Toast />

        <label class="labelFile" for="fileInput">Subir una foto</label>
        <input
          @change="onFileChange"
          type="file"
          id="fileInput"
          accept="image/*"
        />
      </div>

      
      

      <div class="pruebaImg">
          <img v-if="isEditing==true" :src="activityInfo.imagenActividadUrl" id="imageUpload" />
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




    <!--Verificacion de Eliminacion-->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleCarouselDeleteDialog"
        modal
        header="Eliminar Campo"
        :style="{ width: '20vw', height: '13vw' }"
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
            v-if="direction=='Community'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteImageCommunity()"
          ></Button>
          <Button
            v-if="direction=='Activity'"
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteActivity()"
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

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseSecretKey = import.meta.env.VITE_SUPABASE_SECRET_KEY;
const supabase = createClient(supabaseUrl, supabaseSecretKey);

//========================================================

//========================================================
//Variables de Toast

const toast = useToast();
//========================================================

//========================================================
//Variables de estado

const submitted = ref(false);
const visibleCommunityDialog = ref(false);
const visibleActivityDialog = ref(false);
const loading = ref(false);
const visibleCarouselDeleteDialog = ref(false);
const isEditing=ref(false);
const direction=ref();

//========================================================

//========================================================
//Variables de datos

//Objetos
const imageCommunity= ref({});
//Primarias
const getImgCommunity=ref();
const fileUpload = ref(null); 
const communitiesList=ref();


//Actividad
const getActivity=ref();
const activityInfo=ref({});



//========================================================

//========================================================
//Mounted

onMounted(async ()=>{


  const {data:dataCommunities}= await supabase.from("Comunidad").select();
  communitiesList.value=dataCommunities;

 const dataImagesComunities= await supabase.from("ImagenComunidad").select();
 getImgCommunity.value=dataImagesComunities.data;


 const dataActivity= await supabase.from("InfoPaginaActividades").select();
 getActivity.value=dataActivity.data;

 console.log(getImgCommunity.value);

 console.log(communitiesList.value);
});



//Function

//Agregar Imagenes Carousel

const saveImageCommunity=async ()=>{
 
 try {
     loading.value=true;
     submitted.value = true;

     if(fileUpload.value!=null&&isEditing.value==true)
     {

     const Upload = fileUpload.value;
     await deleteImage();

     if (Upload.files.length > 0) {
             const imagen = Upload.files[0];
             console.log("editando");
             
             
                 await uploadImage('COM',imagen);
     }

     toast.add({
             severity: "success",
             summary: "Imagen Comunidad Actualizada Exitosamente",
             detail: "Imagen Actualizada",
             life: 3000,
         });


     }
     else if(fileUpload.value==null&&isEditing.value==true)
     {
       console.log("Editando sin imagenes");
         const {data:insertData, error:insertDataError}=await supabase
                 .from("ImagenComunidad")
                 .upsert(imageCommunity.value)
                 .select();

                 if(!insertDataError)
             {
                 const dataCommunity=await supabase.from("ImagenComunidad").select();

                 getImgCommunity.value=dataCommunity.data;
             }
         toast.add({
             severity: "success",
             summary: "Imagen Comunidad Actualizada Exitosamente",
             detail: "Imagen Actualizada",
             life: 3000,
         });
         
     }
     else
     {
       console.log("guardando nuevo")
         console.log(imageCommunity.value)
         const Upload = fileUpload.value;
         console.log(Upload.files,"aqui");
         if (Upload.files.length > 0) {
             const imagen = Upload.files[0];
             
             await uploadImage('COM',imagen);
         }

         toast.add({
             severity: "success",
             summary: "Imagen Comunidad Agregada Exitosamente",
             detail: "Imagen Agregada",
             life: 3000,
         });


         

     }

     visibleCommunityDialog.value=false;
     loading.value=false;
     isEditing.value=false;

 } catch (error) {
     
 }



}

const deleteCommunityDialog = (prod) => {
 console.log(direction.value);
 visibleCarouselDeleteDialog.value = true;
 
if(direction.value=='Community')
{
  imageCommunity.value = { ...prod };
}

if(direction.value=='Activity')
{
 activityInfo.value={...prod};
}


};

const deleteImage=async ()=>{
 if(direction.value=='Community')
{
 var imageOldName = getImgCommunity.value.find(element => element.idPaginaComunidad === imageCommunity.value.idPaginaComunidad);
 console.log(imageOldName);
     const deleteStorage= await supabase.storage
         .from("imagesOnPages")
         .remove(imageOldName.codigoImagen);
}

if(direction.value=='Activity')
var imageOldName = getActivity.value.find(element => element.idInfoPaginaActividad === activityInfo.value.idInfoPaginaActividad);
 console.log(imageOldName);
     const deleteStorage= await supabase.storage
         .from("imagesOnPages")
         .remove(imageOldName.codigoImagen);
}

const uploadImage=async(name,image)=>{
  console.log(direction.value,"esto");

 const imageCode=name+"_"+getCurrentDate();

 const uploadStorage = await supabase.storage
             .from("imagesOnPages")
             .upload(imageCode, image);

             const urlDescargar = supabase.storage
             .from("imagesOnPages")
             .getPublicUrl(imageCode);
             console.log(direction.value);
             if(direction.value=='Community')
             {
               console.log(imageCode);
               imageCommunity.value.imagenComunidadUrl=urlDescargar.data.publicUrl;
               imageCommunity.value.codigoImagen=imageCode;

               console.log(imageCommunity.value);
               const {data:insertData, error:insertDataError}=await supabase
                   .from("ImagenComunidad")
                   .upsert(imageCommunity.value)
                   .select();
                   console.log(insertData);

               if(!insertDataError)
               {
                   const dataCommunity=await supabase.from("ImagenComunidad").select();

                   getImgCommunity.value=dataCommunity.data;
               }
             }


             if(direction.value=='Activity')
             {
               activityInfo.value.imagenActividadUrl=urlDescargar.data.publicUrl;
               activityInfo.value.codigoImagen=imageCode;

               
               const {data:insertData, error:insertDataError}=await supabase
                   .from("InfoPaginaActividades")
                   .upsert(activityInfo.value)
                   .select();
                   console.log(insertData);
                   console.log(insertDataError);

               if(!insertDataError)
               {
                   const dataGet=await supabase.from("InfoPaginaActividades").select();
                 
                   getActivity.value=dataGet.data;
               }
             }

             
}

const editImageCommunity=(prod)=>{
 imageCommunity.value={...prod};
 isEditing.value=true;
 visibleCommunityDialog.value=true;
}

const deleteImageCommunity=async ()=>{

 loading.value=true;
 
 await deleteImage();
 const {data:deleteCommunity, error:deleteCommunityError}= await supabase.from("ImagenComunidad")
   .delete()
   .eq('idPaginaComunidad', imageCommunity.value.idPaginaComunidad);

   if(!deleteCommunityError)
             {
                 const dataCommunity=await supabase.from("ImagenComunidad").select();

                 getImgCommunity.value=dataCommunity.data;
             }

             toast.add({
             severity: "success",
             summary: "Imagen Comunidad Eliminada Exitosamente",
             detail: "Imagen Eliminada",
             life: 3000,
         });

         loading.value=false;
         visibleCarouselDeleteDialog.value=false;
}


const getCurrentDate=()=>{
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const hours = String(today.getHours()).padStart(2, '0'); // Obtiene la hora
  const minutes = String(today.getMinutes()).padStart(2, '0'); // Obtiene los minutos
  const seconds = String(today.getSeconds()).padStart(2, '0'); // Obtiene los segundos

  const formattedToday = dd + '-' + mm + '-' + yyyy+'_'+hours+':'+minutes+':'+seconds;
  return formattedToday;
}

const getStatusImage=(data)=>{

 if(data==true)
 {
 return "Activo"; 
 }
 else
 {
     return "Inactivo";
 }
 }


const GetComunityName=(data)=>{

 const finded = communitiesList.value.find(
  community => community.idComunidad === data
);

 return data==null ? '': finded.nombreComunidad;
 
}


//Agregar Actividad

const saveActivity=async ()=>{
    try {
        loading.value=true;
        submitted.value = true;

        if(fileUpload.value!=null&&isEditing.value==true)
        {

        const Upload = fileUpload.value;
        await deleteImage();

        if (Upload.files.length > 0) {
                const imagen = Upload.files[0];
                console.log("editando");
                
                
                  await uploadImage('ACT',imagen);
        }

        console.log(28);

        toast.add({
                severity: "success",
                summary: "Info Actividad Actualizada Exitosamente",
                detail: "Info Actividad Actualizada",
                life: 3000,
            });


        }
        else if(fileUpload.value==null&&isEditing.value==true)
        {
          console.log("Editando sin imagenes");
            const {data:insertData, error:insertDataError}=await supabase
                    .from("InfoPaginaActividades")
                    .upsert(activityInfo.value)
                    .select();

                    if(!insertDataError)
                {
                    const dataGet=await supabase.from("InfoPaginaActividades").select();

                    getActivity.value=dataGet.data;
                }
            toast.add({
                severity: "success",
                summary: "Info Actividad Actualizada Exitosamente",
                detail: "Info Actividad Actualizada",
                life: 3000,
            });
            
        }
        else
        {
          console.log("guardando nuevo")
            const Upload = fileUpload.value;

            if (Upload.files.length > 0) {
                const imagen = Upload.files[0];
                
                
                await uploadImage('ACT',imagen);
            }

            toast.add({
                severity: "success",
                summary: "Info Actividad Agregada Exitosamente",
                detail: "Info Actividad Agregada",
                life: 3000,
            });


            

        }

        visibleActivityDialog.value=false;
        loading.value=false;
        isEditing.value=false;

    } catch (error) {
        
    }
  }

  const editActivity=(prod)=>{
    console.log(direction.value);
    activityInfo.value={...prod};
    isEditing.value=true;
    visibleActivityDialog.value=true;
  }

  const deleteActivity=async ()=>{
    loading.value=true;
    
    await deleteImage();
    const {data:deleteData, error:deleteDataError}= await supabase.from("InfoPaginaActividades")
      .delete()
      .eq('idInfoPaginaActividad', activityInfo.value.idInfoPaginaActividad);

      if(!deleteDataError)
                {
                    const dataGet=await supabase.from("InfoPaginaActividades").select();

                    getActivity.value=dataGet.data;
                }

                toast.add({
                severity: "success",
                summary: "Noticia Eliminada Exitosamente",
                detail: "Noticia Eliminada",
                life: 3000,
            });

            loading.value=false;
            visibleCarouselDeleteDialog.value=false;
  }

//Metodo para mostrar la imagen, desde que es cargada
const onFileChange = (event) => {
console.log("hola llege");
fileUpload.value = event.target;
const file= event.target.files[0];
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
  height:80px;
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

h3{
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

.labelFile:hover {
  background-color: var(--lightcyan);
}

.labelFile:active {
  background-color: var(--darkblue);
}
</style>
