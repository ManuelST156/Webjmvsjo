<template>
  <Toast />
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h1 id="Tittle">Recuperar Contraseña</h1>

      <div class="block">
        <FloatLabel class="FloatLabel">
          <InputText
            class="inputsLogin"
            type="email"
            id="email"
            v-model="email"
            required="true"
            :class="{ 'p-invalid': submitted && !email }"
          />
          <label for="email" :class="{ 'p-error': submitted && !email }">
            {{
              submitted && !email
                ? "Correo Electronico es requerido"
                : "Correo Electronico"
            }}
          </label>
        </FloatLabel>
      </div>

      <div class="card flex justify-content-center">
        <Button
          type="submit"
          class="buttonSend"
          label="Recuperar Contraseña"
          @click="recoveryPass"
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
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
const email = ref(null);
const router = useRouter();

//========================================================
//Methods
//========================================================

//Metodo para iniciar sesion
const recoveryPass = async () => {
  submitted.value = true;

  if (email.value != null) {
    if (validateEmail(email.value)) {
      try {
        loading.value = true;

        const { data, error } = await supabase.auth.resetPasswordForEmail(
          email.value,
          {
            redirectTo: "http://localhost:5173/cambiarPass",
          }
        );

        if (error == null) {
          toast.add({
            severity: "success",
            summary: "Recuperacion de Contraseña en Proceso",
            detail: "Revise su correo Electronico",
            life: 3000,
          });

          submitted.value = false;
          loading.value = false;
        } else {
          loading.value = false;
          toast.add({
            severity: "error",
            summary: "Correo o Contraseña Incorrectos",
            detail: "Error Credenciales Erroneas",
            life: 3000,
          });
        }
      } catch (error) {}
    } else {
      toast.add({
        severity: "error",
        summary: "Este correo electronico no es valido",
        detail: "Registro no completado",
        life: 3000,
      });
    }
  } else {
    toast.add({
      severity: "error",
      summary: "Debe Completar todos los campos",
      detail: "Registro No Completado",
      life: 3000,
    });
  }
};

//Metodo para validar Email
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
</script>
