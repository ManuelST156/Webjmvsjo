<template>
  <Toast />
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h1 id="Tittle">Cambiar Contraseña</h1>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <Password
            class="inputsLogin"
            v-model="password"
            toggleMask
            :feedback="false"
            id="password"
            required="true"
            :class="{ 'p-invalid': submitted && !password }"
          />
          <label for="password" :class="{ 'p-error': submitted && !password }">
            {{
              submitted && !password ? "Contraseña es requerido" : "Contraseña"
            }}
          </label>
        </FloatLabel>
      </div>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <Password
            class="inputsLogin"
            v-model="verificationPass"
            toggleMask
            :feedback="false"
            id="recoveryPassword"
            required="true"
            :class="{ 'p-invalid': submitted && !verificationPass }"
          />
          <label
            for="recoveryPassword"
            :class="{ 'p-error': submitted && !verificationPass }"
          >
            {{
              submitted && !verificationPass
                ? "Verficacion de Contraseña es requerido"
                : "Verificacion de Contraseña"
            }}
          </label>
        </FloatLabel>
      </div>

      <div class="card flex justify-content-center">
        <Button
          type="submit"
          class="buttonSend"
          label="Recuperar Contraseña"
          @click="changePass"
          :loading="loading"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
::v-deep(.p-component) {
  .p-password-input {
    height: 40px;
    width: 100%;
  }

  .p-icon.p-input-icon {
    color: var(--lightgrey);
  }

  .p-input-icon {
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
  height: 60%;
}

#Tittle {
  align-self: center;
  margin-bottom: 20px;
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

.linksLogin {
  margin: 15px;
}

.linksForget {
  margin-bottom: 22px;
  width: 99%;
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

  .linksLogin,
  .linksForget {
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

  .linksLogin,
  .linksForget {
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
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

//========================================================
//Variables de Supabase
//========================================================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseSK = import.meta.env.VITE_SUPABASE_SECRET_KEY;
const supabase = createClient(supabaseUrl, supabaseSK);

//========================================================
//Variables y FUnciones Toast
//========================================================

const toast = useToast();

//========================================================
//variables de estado
//========================================================

const submitted = ref(false);
const loading = ref(false);

//========================================================
////variables de datos
//========================================================
const verificationPass = ref(null);
const password = ref(null);
const router = useRouter();

//========================================================
//Methods
//========================================================

//Metodo para iniciar sesion
const changePass = async () => {
  submitted.value = true;
  const email = getParams('email');

  if (verificationPass.value != null && password.value != null) {
    if (password.value == verificationPass.value) {
      try {
        loading.value = true;
        /* const { data, error } = await supabase.auth.updateUser({
          password: password.value,
        }); */

        const dataUsers = await supabase
      .from("usuarioscredenciales")
      .select("id")
      .eq("email", email);

      console.log(dataUsers.data[0].id);

      const { data, error } = await supabase.auth.admin.updateUserById(
        dataUsers.data[0].id,
        {
          password: password.value,
        }
      );

        if (error == null) {
          toast.add({
            severity: "success",
            summary: "Cambio de Contraseña Realizado",
            detail: "Contraseña Cambiada",
            life: 3000,
          });

          submitted.value = false;

          setTimeout(async () => {
            loading.value = false;
            router.push({ path: "/iniciarSesion" }).then(() => {
              window.location.reload();
            });
          }, 1000);
        } else {
          loading.value = false;
          toast.add({
            severity: "error",
            summary: "Error al Actualizar Contraseña",
            detail: error,
            life: 3000,
          });
        }
      } catch (error) {}
    } else {
      toast.add({
        severity: "error",
        summary: "Contraseña y Verificacin de Contraseña no Coinciden",
        detail: "Cambio no completado",
        life: 3000,
      });
    }
  } else {
    toast.add({
      severity: "error",
      summary: "Debe Completar todos los campos",
      detail: "Cambio No Completado",
      life: 3000,
    });
  }
};

const getParams=(param)=>{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
</script>
