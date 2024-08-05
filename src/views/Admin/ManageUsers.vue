<template>
  <main>
    <Toast />
    <h1>Administrar Usuarios</h1>

    <Button
      class="buttonSend"
      label="Agregar Usuario"
      @click="(visibleUserDialog = true), (user = {})"
    />
    <div class="fullLine">
      <DataTable :value="userList">
        <Column
          :style="{ minWidth: '4rem', fontSize: '14px' }"
          field="nombresUsuario"
          header="Nombres de Usuario"
        ></Column>
        <Column
          :style="{ minWidth: '4rem', fontSize: '14px' }"
          field="apellidosUsuario"
          header="Apellidos de Usuario"
        ></Column>
        <Column
          :style="{ minWidth: '4rem', fontSize: '14px' }"
          field="correoUsuario"
          header="Correo Electronico"
        ></Column>
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
        <Column
          :style="{ minWidth: '4rem', fontSize: '14px' }"
          field="telefonoUsuario"
          header="Telefono del Usuario"
        ></Column>

        <Column
          :style="{ minWidth: '1rem', fontSize: '14px' }"
          field="esCatequista"
          header="Es Catequista?"
        >
          <template #body="slotProps">
            <div class="fullLine">
              <Checkbox
                v-model="slotProps.data.esCatequista"
                :binary="true"
                :readonly="true"
              />
              <span class="ml-2">{{
                getStatusCatechist(slotProps.data.esCatequista)
              }}</span>
            </div>
          </template>
        </Column>

        <Column
          :style="{ minWidth: '4rem', fontSize: '14px' }"
          header="Rol Usuario"
        >
          <template #body="slotProps">
            <span class="ml-2">{{
              getUserRol(slotProps.data.idRolUsuario)
            }}</span>
          </template>
        </Column>

        <Column style="min-width: 4rem">
          <template #body="slotProps">
            <Button
              outlined
              rounded
              id="tableButton"
              class="mr-2"
              @click="editUser(slotProps.data)"
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
              @click="deleteUserDialog(slotProps.data)"
            >
              <div class="icon-wrapper">
                <span class="material-symbols-outlined icon">delete</span>
              </div>
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>

    <!--Dialog de Usuarios -->

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleUserDialog"
        modal
        header="Usuario"
        class="w-6"
      >
        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="collegeDegree"
              v-model="user.nombresUsuario"
              required="true"
              :class="{
                'p-invalid': submitted && !user.nombresUsuario,
              }"
            />
            <label
              for="collegeDegree"
              :class="{
                'p-error': submitted && !user.nombresUsuario,
              }"
            >
              {{
                submitted && !user.nombresUsuario
                  ? "Nombres de Usuario son Requerido"
                  : "Nombres de Usuario"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="collegeDegree"
              v-model="user.apellidosUsuario"
              required="true"
              :class="{
                'p-invalid': submitted && !user.apellidosUsuario,
              }"
            />
            <label
              for="collegeDegree"
              :class="{
                'p-error': submitted && !user.apellidosUsuario,
              }"
            >
              {{
                submitted && !user.apellidosUsuario
                  ? "Apellidos de Usuario son Requerido"
                  : "Apellidos de Usuario"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="collegeDegree"
              v-model="user.correoUsuario"
              required="true"
              :class="{
                'p-invalid': submitted && !user.correoUsuario,
              }"
            />
            <label
              for="collegeDegree"
              :class="{
                'p-error': submitted && !user.correoUsuario,
              }"
            >
              {{
                submitted && !user.correoUsuario
                  ? "Correo Electronico del Usuario son Requerido"
                  : "Correo Electronico del Usuario"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="user.idComunidad"
              id="community"
              editable
              :options="communities"
              optionLabel="nombreComunidad"
              optionValue="idComunidad"
              class="w-full md:w-32rem"
              required="true"
            />
            <label for="community">Comunidad</label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <InputText
              maxlength="40"
              class="inputsLogin"
              id="collegeDegree"
              v-model="user.telefonoUsuario"
              required="true"
              :class="{
                'p-invalid': submitted && !user.telefonoUsuario,
              }"
            />
            <label
              for="collegeDegree"
              :class="{
                'p-error': submitted && !user.telefonoUsuario,
              }"
            >
              {{
                submitted && !user.telefonoUsuario
                  ? "Telefono de Usuario son Requerido"
                  : "Telefono de Usuario"
              }}
            </label>
          </FloatLabel>
        </div>

        <div class="block">
          <FloatLabel class="FloatLabel">
            <Dropdown
              v-model="user.idRolUsuario"
              id="community"
              editable
              :options="roles"
              optionLabel="nombreRol"
              optionValue="idRol"
              class="w-full md:w-32rem"
              required="true"
            />
            <label for="community">Roles</label>
          </FloatLabel>
        </div>

        <div class="block">
          <Checkbox v-model="user.esCatequista" :binary="true" />
          <label for="ingredient1" class="ml-2"> Es Catequista </label>
        </div>

        <div class="flex justify-content-end gap-2">
          <Button
            class="buttonSend"
            type="button"
            label="Cancelar"
            @click="(user = {}), (visibleUserDialog = false)"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Guardar"
            :loading="loading"
            @click="saveNewUser"
          ></Button>
        </div>
      </Dialog>
    </div>

    <div class="fullLine">
      <Dialog
        v-model:visible="visibleUserDeleteDialog"
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
            @click="visibleUserDeleteDialog = false"
          ></Button>
          <Button
            class="buttonSend"
            type="submit"
            label="Eliminar"
            :loading="loading"
            @click="deleteUser()"
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
const visibleUserDialog = ref(false);
const loading = ref(false);
const visibleUserDeleteDialog = ref(false);

//========================================================
//Variables de datos
//========================================================

//========================================================
//Variables de Objetos
//========================================================
const user = ref({});

//========================================================
//Variables Primarias
//========================================================
const isEditUser = ref(false);
const communities = ref();
const userList = ref();
const roles = ref();

//========================================================
//Mounted
//========================================================

onMounted(async () => {
  const dataComunity = await supabase.from("Comunidad").select("*");

  communities.value = dataComunity.data;
  const { data: users, error: errorUsers } = await supabase
    .from("Usuarios")
    .select("*");

  userList.value = users;

  const { data: rolesData, error: rolesError } = await supabase
    .from("Roles")
    .select();
  roles.value = rolesData;
});

//========================================================
//Methods
//========================================================

//Funcion para Guardar Usuarios
const saveNewUser = async () => {
  submitted.value = true;

  if (!user.value.idUsuario) {
    if (
      !user.value.nombresUsuario ||
      !user.value.apellidosUsuario ||
      !user.value.correoUsuario ||
      !user.value.telefonoUsuario
    ) {
      toast.add({
        severity: "error",
        summary: "Debe Completar todos los campos",
        detail: "Registro No Completado",
        life: 3000,
      });
    } else {
      if (validateEmail(user.value.correoUsuario)) {
        const checkUser = await supabase
          .from("Usuarios")
          .select("correoUsuario")
          .eq("correoUsuario", user.value.correoUsuario);

        if (checkUser.data.length == 0) {
          try {
            loading.value = true;

            const { data: userNew, error } =
              await supabase.auth.admin.createUser({
                email: user.value.correoUsuario,
                password: createPassword(),
                email_confirm: true,
              });

            if (userNew.user.id) {
              user.value.idAuth = userNew.user.id;

              addUser();

              toast.add({
                severity: "success",
                summary: "Registrado Correctamente",
                detail: "Registro Completado",
                life: 3000,
              });
            }
          } catch (error) {
            toast.add({
              severity: "error",
              summary: "Error Base de Datos",
              detail: error,
              life: 3000,
            });
          }
        } else {
          toast.add({
            severity: "error",
            summary: "Este correo electronico ya existe",
            detail: "Registro no completado",
            life: 3000,
          });
        }
      } else {
        toast.add({
          severity: "error",
          summary: "Escriba una direccion de correo valida",
          detail: "Registro no completado",
          life: 3000,
        });
      }
    }
  } else {
    const dataUsers = await supabase
      .from("usuarioscredenciales")
      .select("*")
      .eq("idUsuario", user.value.idUsuario);

    if (user.value.correoUsuario != dataUsers.email) {
      const { data, error } = await supabase.auth.admin.updateUserById(
        dataUsers.data[0].id,
        {
          email: user.value.correoUsuario,
        }
      );
    }

    addUser();

    toast.add({
      severity: "success",
      summary: "Actualizado Correctamente",
      detail: "Registro Actualizado",
      life: 3000,
    });
  }

  visibleUserDialog.value = false;
  loading.value = false;
  submitted.value = false;

  const { data: users, error: errorUsers } = await supabase
    .from("Usuarios")
    .select("*");
  users.forEach((element) => {
    const index = userList.value.findIndex(
      (user) => user.idUsuario === element.idUsuario
    );
    if (index !== -1) {
      userList.value.splice(index, 1, element);
    } else {
      userList.value.push(element);
    }
  });
};

//Funcion para validar email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

//Funcion para agregar usuario a la tabla de forma manuel
const addUser = async () => {
  const upsertData = await supabase
    .from("Usuarios")
    .upsert([user.value])
    .select();

  const { data: users, error: errorUsers } = await supabase
    .from("Usuarios")
    .select("*");

  userList.value = users;
};

//Utilizada para extraer el status del catequista
const getStatusCatechist = (data) => {
  if (data == true) {
    return "Si";
  } else {
    return "No";
  }
};

//Sirve para extraer un listado de roles del usuario nuevo
const getUserRol = (data) => {
  if (data == 1) {
    return "Admin";
  } else if (data == 2) {
    return "Miembro";
  } else {
    return "Invitado";
  }
};

//Sirve para extraer el nombre de las comunidades
const GetComunityName = (data) => {
  const finded = communities.value.find(
    (community) => community.idComunidad === data
  );
  return data == null ? "" : finded.nombreComunidad;
};

//Funcion para Editar Datos de Usuario
const editUser = (prod) => {
  user.value = { ...prod };
  isEditUser.value = true;
  visibleUserDialog.value = true;
};

//Sirve para mostrar dialog de advertencia
const deleteUserDialog = (prod) => {
  visibleUserDeleteDialog.value = true;
  user.value = { ...prod };
};

//Funcion para Borrar Datos de Usuarios
const deleteUser = async () => {
  const dataUsers = await supabase
    .from("usuarioscredenciales")
    .select("*")
    .eq("idUsuario", user.value.idUsuario);

  const { error: userTable } = await supabase
    .from("Usuarios")
    .delete()
    .eq("idUsuario", user.value.idUsuario);

  const { error } = await supabase.auth.admin.deleteUser(dataUsers.data[0].id);

  visibleUserDeleteDialog.value = false;
  toast.add({
    severity: "success",
    summary: "Registro Eliminado",
    detail: "Formacion academica Eliminada",
    life: 3000,
  });

  const { data: users, error: errorUsers } = await supabase
    .from("Usuarios")
    .select("*");

  userList.value = [];

  users.forEach((element) => {
    userList.value.push(element);
  });
};

//Funcion para Crear Password de forma temporal para el usuario
const createPassword = () => {
  const newPass = user.value.nombresUsuario + import.meta.env.VITE_PASSWORDKEY;
  return newPass;
};
</script>

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
