<template>
  <main>
    <Toast />
    <h1>Administrar Comunidades</h1>

    <Button
      class="buttonSend"
      label="Agregar Comunidad"
      @click="
        (visibleComunityDialog = true), (comunity = {}), (catechistID = [])
      "
    />

    <div class="fullLine">
      <DataTable :value="communities">
        <Column
          style="min-width: 12rem"
          field="nombreComunidad"
          header="Nombre de Comunidad"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="nombreEtapa"
          header="Etapa de Formacion"
        ></Column>
        <Column
          style="min-width: 12rem"
          field="nombrecatequista"
          header="Catequista"
        ></Column>
        <Column style="min-width: 4rem">
          <template #body="slotProps">
            <Button
              outlined
              rounded
              id="tableButton"
              class="mr-2"
              @click="editComunity(slotProps.data)"
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
              @click="deleteComunityDialog(slotProps.data)"
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">delete</span>
              </div>
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>

    <!--Dialog de Comunidad -->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleComunityDialog"
        modal
        header="Comunidad"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="comunityName"
              v-model="comunity.nombreComunidad"
              required="true"
              :class="{
                'p-invalid': submitted && !comunity.nombreComunidad,
              }"
            />
            <label
              for="comunityName"
              :class="{
                'p-error': submitted && !comunity.nombreComunidad,
              }"
            >
              {{
                submitted && !comunity.nombreComunidad
                  ? "Nombre de Comunidad son Requerido"
                  : "Nombre de Comunidad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              id="formatioStage"
              v-model="comunity.idEtapaFormacion"
              :options="formationStage"
              optionLabel="nombreEtapa"
              optionValue="idEtapaFormacion"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !comunity.idEtapaFormacion,
              }"
            />
            <label
              for="formationStage"
              :class="{ 'p-error': submitted && !comunity.idEtapaFormacion }"
            >
              {{
                submitted && !comunity.idEtapaFormacion
                  ? "Etapa de Formacion es Requerido"
                  : "Etapa de Formacion"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <MultiSelect
              id="catechist"
              v-model="catechistID"
              :options="catechists"
              optionLabel="nombrecatequista"
              optionValue="idUsuario"
              class="w-full md:w-32rem"
              required="true"
              :class="{
                'p-invalid': submitted && !catechistID,
              }"
            />
            <label
              for="catechist"
              :class="{ 'p-error': submitted && !catechistID }"
            >
              {{
                submitted && !catechistID
                  ? "Catequista de Comunidad es Requerido"
                  : "Catequista de Comunidad"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(comunity = {}), (visibleComunityDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveNewComunity"
          ></Button>
        </div>
      </Dialog>
    </div>

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleComunityDeleteDialog"
        modal
        header="Usuario"
        class="w-3"
      >
        <p>Desea eliminar este usuario?</p>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="visibleComunityDeleteDialog = false"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteComunity()"
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
const visibleComunityDialog = ref(false);
const loading = ref(false);
const visibleComunityDeleteDialog = ref(false);

//========================================================
//Variables de datos
//========================================================

//========================================================
//Variables de Objetos
//========================================================
const comunity = ref({});

//========================================================
//Variables Primarias
//========================================================
const isEditComunity = ref(false);
const communities = ref();
const formationStage = ref();
const catechists = ref();
const catechistID = ref([]);
const forSearchCatechist = ref();

//========================================================
//Mounted
//========================================================

onMounted(async () => {
  await updateTable();

  const dataFormationStage = await supabase.from("EtapaFormacion").select("*");
  formationStage.value = dataFormationStage.data;

  const dataCatechist = await supabase.from("datoscatequistas").select("*");
  catechists.value = dataCatechist.data;

  const dataComunityCatechist = await supabase
    .from("ComunidadCatequista")
    .select();
  forSearchCatechist.value = dataComunityCatechist.data;
});

//========================================================
//Methods
//========================================================

//Funcion para Guardar Formacion Academica de Forma Temporal
const saveNewComunity = async () => {
  submitted.value = true;

  try {
    let finded;
    catechistID.value.forEach(async (element) => {
      finded = forSearchCatechist.value.find(
        (elementSearch) => elementSearch.idCatequista == element
      );
    });

    if (finded != undefined && isEditComunity.value == false) {
      toast.add({
        severity: "error",
        summary: "Este Catequista tiene ya una comunidad asignada",
        detail: "Registro no completado",
        life: 3000,
      });
    } else {
      const { nombreEtapa, nombrecatequista, ...newObject } = comunity.value;

      const { data: createComunity, error: createErrorComunity } =
        await supabase.from("Comunidad").upsert(newObject).select();

      catechistID.value.forEach(async (element) => {
        const sendData = {
          idComunidad: createComunity[0].idComunidad,
          idCatequista: element,
        };
        const dataDelete = await supabase
          .from("ComunidadCatequista")
          .delete()
          .eq("idComunidad", sendData.idComunidad);

        const { data: createComunitycatechist, error: createErrorCC } =
          await supabase.from("ComunidadCatequista").upsert(sendData).select();

        if (!createErrorCC) {
          await updateTable();
        }
      });

      if (isEditComunity.value == true) {
        toast.add({
          severity: "success",
          summary: "Comunidad Actualizada",
          detail: "Registro Actualizado",
          life: 3000,
        });
      } else {
        toast.add({
          severity: "success",
          summary: "Comunidad Agregada",
          detail: "Registro Completado",
          life: 3000,
        });
      }
    }

    isEditComunity.value = false;
    submitted.value=false;
    visibleComunityDialog.value = false;
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error con la Operacion",
      detail: "Registro no completado",
      life: 3000,
    });
  }
};

//Funcion para cargar los datos actualizados
const updateTable = async () => {
  const { data: dataComunity, error: fetchError } = await supabase
    .from("datoscompletocomunidad")
    .select("*");
  communities.value = dataComunity;
};
//Funcion para Editar Datos de Formacion Academica
const editComunity = (prod) => {
  comunity.value = { ...prod };
  catechistID.value = [];

  const finded = forSearchCatechist.value.filter(
    (element) => element.idComunidad == comunity.value.idComunidad
  );
  finded.forEach((element) => {
    catechistID.value.push(element.idCatequista);
  });

  isEditComunity.value = true;
  visibleComunityDialog.value = true;
};

//Funcion para abrir el Dialog de advertenccia de eliminacion
const deleteComunityDialog = (prod) => {
  visibleComunityDeleteDialog.value = true;
  comunity.value = { ...prod };
};

//Funcion para Borrar Datos de Comunidades
const deleteComunity = async () => {
  const dataDelete = await supabase
    .from("ComunidadCatequista")
    .delete()
    .eq("idComunidad", comunity.value.idComunidad);

  const { data: deleteComunity, error: errorComunity } = await supabase
    .from("Comunidad")
    .delete()
    .eq("idComunidad", comunity.value.idComunidad);

  visibleComunityDeleteDialog.value = false;
  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Comunidad Eliminada",
    life: 3000,
  });

  if (!errorComunity) {
    await updateTable();
  }
};
</script>

<style lang="scss" scoped>
.buttonSend {
  margin: 5px 5px;
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
  height: 60px;
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
