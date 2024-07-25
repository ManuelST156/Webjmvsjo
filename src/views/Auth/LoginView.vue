<template>
  <Toast />
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h1 id="Tittle">Iniciar Sesion</h1>

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
          <label for="email" :class="{ 'p-error': submitted && !password }">
            {{
              submitted && !password
                ? "Correo Electronico es requerido"
                : "Correo Electronico"
            }}
          </label>
        </FloatLabel>
      </div>

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

      <div class="linksForget">
        <router-link to="/registrar">
          <span class="text">Has Olvidado Tu Contraseña?</span>
        </router-link>
      </div>

      <div class="card flex justify-content-center">
        <Button
          type="submit"
          class="buttonSend"
          label="Iniciar Sesion"
          @click="login"
          :loading="loading"
        />
      </div>

      <div class="linksLogin">
        <router-link to="/registrar">
          <span class="text">Crear Cuenta</span>
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
}

.buttonSend:hover {
  background-color: var(--lightcyan);
}

.buttonSend:active {
  background-color: var(--darkblue);
}
</style>

<script setup>
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

//Variables y funciones Toast
const toast = useToast();
const onUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

//variables de estado
const submitted = ref(false);
const loading = ref(false);

//variables de datos
const email = ref(null);
const password = ref(null);
const router = useRouter();

//Funciones

const login = async () => {
  submitted.value = true;
  console.log(email.value);
  if (email.value != null && password.value != null) {
    if (validateEmail(email.value)) {
      try {
        console.log("vino");
        loading.value = true;
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value,
        });

        console.log(data);

        localStorage.setItem('tokenJMV',data.session.access_token);

        if (error == null) {
          toast.add({
            severity: "success",
            summary: "Bienvenido a JMV SJO",
            detail: "Usuario Logueado Correctamente",
            life: 3000,
          });

          submitted.value = false;
          setTimeout(async () => {
            loading.value = false;
            router.push({ path: '/' }).then(() => {
            window.location.reload();
          });
          }, 1000);
        } 
        else {
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

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
</script>
