<template>
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h1 id="Tittle">Iniciar Sesion</h1>

      <div class="prueba">
        <FloatLabel class="FloatLabel">
          <InputText class="inputsLogin" id="username" v-model="username" />
          <label for="username">Nombre de Usuario o Email</label>
        </FloatLabel>
      </div>

      <div class="prueba">
        <FloatLabel class="FloatLabel">
          <InputText class="inputsLogin" id="password" v-model="password" />
          <label for="password">Contraseña</label>
        </FloatLabel>
      </div>

      <div class="linksForget">
        <router-link to="/registrar">
          <span class="text">Has Olvidado Tu Contraseña?</span>
        </router-link>
      </div>

      <div class="card flex justify-content-center">
        <Button label="Iniciar Sesion" />
      </div>

      <div class="linksLogin">
        <router-link to="/registrar">
          <span class="text">Registrar</span>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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

.prueba {
  width: 100%;
  height: 60px;
  margin: 10px 0;
}

.inputsLogin {
  height: 40px;
  margin-bottom: 4rem;
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
</style>

<script setup>
import { ref } from "vue";

const username = ref(null);
const password = ref(null);
</script>
