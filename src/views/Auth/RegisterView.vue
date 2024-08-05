<template>
  <Toast />
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h1 id="Tittle">Registrarse</h1>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <InputText
            class="inputsLogin"
            id="name"
            v-model="registerUser.nombresUsuario"
            :class="{ 'p-invalid': submitted && !registerUser.nombresUsuario }"
            required="true"
          />
          <label for="name" :class="{ 'p-error': submitted && !registerUser.nombreUsuario }">
            {{ submitted && !registerUser.nombreUsuario ? "Nombres son requeridos" : "Nombres" }}
          </label>
        </FloatLabel>
      </div>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <InputText
            class="inputsLogin"
            id="lastname"
            v-model="registerUser.apellidosUsuario"
            required="true"
            :class="{
              'p-invalid': submitted && !registerUser.apellidosUsuario,
            }"
          />
          <label for="lastname" :class="{ 'p-error': submitted && !registerUser.apellidosUsuario}">
            {{
              submitted && !registerUser.apellidosUsuario ? "Apellidos son requerido" : "Apellidos"
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
            v-model="registerUser.correoUsuario"
            required="true"
            :class="{ 'p-invalid': submitted && !registerUser.correoUsuario }"
            icon="mail"
          />
          <label for="email" :class="{ 'p-error': submitted && !registerUser.correoUsuario}">
            {{
              submitted && !registerUser.correoUsuario
                ? "Correo Electronico es requerido"
                : "Correo Electronico"
            }}
          </label>
        </FloatLabel>
      </div>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <InputText
            class="inputsLogin"
            id="phone"
            v-model="registerUser.telefonoUsuario"
            required="true"
            :class="{ 'p-invalid': submitted && !registerUser.telefonoUsuario }"
          />
          <label for="phone" :class="{ 'p-error': submitted && !registerUser.telefonoUsuario  }">
            {{ submitted && !registerUser.telefonoUsuario  ? "Telefono es requerido" : "Telefono" }}
          </label>
        </FloatLabel>
      </div>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <Dropdown
            v-model="registerUser.idComunidad"
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
          <Password class="inputsLogin" v-model="password" toggleMask :feedback="false"
          id="password" required="true"
          :class="{ 'p-invalid': submitted && !password }" />
          <label for="password" :class="{ 'p-error': submitted && !password }">
            {{
              submitted && !password ? "Contraseña es requerido" : "Contraseña"
            }}
          </label>
        </FloatLabel>
      </div>


      <div class="card flex justify-content-center">
        <Button
          type="submit"
          class="buttonSend"
          label="Registrar"
          @click="SaveRegister"
          :loading="loading"
          
        />
      </div>

      <div class="linksLogin">
        <router-link to="/iniciarSesion">
          <span class="text">Iniciar Sesion</span>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>


::v-deep(.p-component)
{
  .p-password-input{
    height: 40px;
  width: 100%;
  }
  
  .p-icon.p-input-icon{
    color: var(--lightgrey);
  }

   .p-input-icon{
    top: 30%;
  }
}




.LoginRegister {
  background: linear-gradient(200deg, var(--rblight), var(--rblightblue));
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#containerRegister {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35%;
  height: 80%;
}

#Tittle {
  align-self: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.block {
  width: 100%;
  height: 60px;
  margin: 10px 0;
}

.inputsLogin {
  height: 40px;
  width: 100%;
}

#dropLogin {
  height: 40px;
  width: 100%;
}

.linksLogin {
  margin: 5px 0;
}

.FloatLabel {
  height: 25px;
}

.buttonSend {
  margin: 3px 0;
  background-color: var(--darkblue);
  border: none;
}

.buttonSend:hover {
  background-color: var(--lightcyan);
}

.buttonSend:active {
  background-color: var(--darkblue);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  #containerRegister {
    width: 80%;
    height: auto;
    padding: 1rem;
  }

  .block {
    height: 50px;
    margin: 8px 0;
  }

  .inputsLogin {
    height: 35px;
  }

  .linksLogin, .linksForget {
    margin: 10px;
  }

  .FloatLabel {
    height: 20px;
  }

  .buttonSend {
    margin: 2px 0;
  }
}

@media (max-width: 480px) {
  #containerRegister {
    width: 90%;
    padding: 0.5rem;
  }

  .block {
    height: 45px;
    margin: 6px 0;
  }

  .inputsLogin {
    height: 30px;
  }

  .linksLogin, .linksForget {
    margin: 8px;
  }

  .FloatLabel {
    height: 18px;
  }

  .buttonSend {
    margin: 1px 0;
  }
}
</style>

<script setup>
//========================================================
//Imports de Recursos
//========================================================
import { onMounted, ref } from "vue";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "primevue/usetoast";
import { useRouter } from 'vue-router';

//========================================================
//Variables de Supabase
//========================================================

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//========================================================
//Variables y funciones Toast
//========================================================

const toast = useToast();
const onUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

//========================================================
//Variables de Datos
//========================================================

const registerUser = ref({});
const password = ref();
const communities = ref();
const router=useRouter();

//========================================================
//Variables de Estados
//========================================================
const submitted = ref(false);
const loading=ref(false);

//========================================================
//OnMounted
//========================================================

onMounted(async () => {
  const data = await supabase.from("Comunidad").select("*");

  communities.value = data.data;
});

//========================================================
//Methods
//========================================================

//FUncion para guardar registro
const SaveRegister = async () => {
  submitted.value = true;
  

  if (!registerUser.value.nombresUsuario ||
    !registerUser.value.apellidosUsuario ||
    !registerUser.value.correoUsuario ||
    !registerUser.value.telefonoUsuario ||
    password.value == undefined) 
  {
    toast.add({
      severity: "error",
      summary: "Debe Completar todos los campos",
      detail: "Registro No Completado",
      life: 3000,
    });

  } else {
    if (validateEmail(registerUser.value.correoUsuario)) {
      const checkUser = await supabase
        .from("Usuarios")
        .select("correoUsuario")
        .eq("correoUsuario", registerUser.value.correoUsuario);

      if (checkUser.data.length == 0) {

        try {
          loading.value=true;
          const credentialData = await supabase.auth.signUp({
            email: registerUser.value.correoUsuario,
            password: password.value,
          });

          const dataUsers = await supabase
            .from("usuarioscredenciales")
            .select("*");

          const data = dataUsers.data;

          const usuarioRegistrado = data.find(
            (user) => user.email == registerUser.value.correoUsuario
          );

          if (usuarioRegistrado) {
            registerUser.value.idAuth = usuarioRegistrado.id;

            addUser();
            const { error } = await supabase.auth.signOut();

            toast.add({
              severity: "success",
              summary: "Registrado Correctamente",
              detail: "Registro Completado",
              life: 3000,
            });

            loading.value=false;
            submitted.value=false;

            router.push({ name: 'login' });
          }
        } 
        
        catch (error) {
          toast.add({
              severity: "error",
              summary: "Error Base de Datos",
              detail: error,
              life: 3000,
            });
        }

      } 
      else {
        toast.add({
          severity: "error",
          summary: "Este correo electronico ya existe",
          detail: "Registro no completado",
          life: 3000,
        });
      }
    } 
    
    else {
      toast.add({
        severity: "error",
        summary: "Escriba una direccion de correo valida",
        detail: "Registro no completado",
        life: 3000,
      });
     
    }
  }
};

//Funcion para validar email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

//Funcion para añadir usuario creado con sus credenciales a la tabla Usuarios
const addUser = async () => {
  registerUser.value.idRolUsuario = 2;

  const upsertData = await supabase
    .from("Usuarios")
    .upsert([registerUser.value])
    .select();
};
</script>
