<template>
  <main class="LoginRegister">
    <div id="containerRegister" class="card flex justify-content-center">
      <h1 id="Tittle">Registrarse</h1>

      <div class="prueba">
        <FloatLabel class="FloatLabel">
          <InputText class="inputsLogin" id="username" v-model="username" />
          <label for="username">Nombre de Usuario</label>
        </FloatLabel>
      </div>

      <div class="prueba">
        <FloatLabel class="FloatLabel">
          <InputText class="inputsLogin" id="email" v-model="email" />
          <label for="email">Correo Electronico</label>
        </FloatLabel>
      </div>

      <div class="prueba">
        <FloatLabel class="FloatLabel">
          <InputText class="inputsLogin" id="phone" v-model="phone" />
          <label for="phone">Numero Telefonico</label>
        </FloatLabel>
      </div>

      <div class="prueba">
        <Dropdown
          v-model="selectedCity"
          editable
          :options="cities"
          optionLabel="name"
          placeholder="Select a City"
          class="w-full md:w-14rem"
        />
      </div>

      <div class="prueba">
        <FloatLabel class="FloatLabel">
          <InputText class="inputsLogin" id="password" v-model="password" />
          <label for="password">Contraseña</label>
        </FloatLabel>
      </div>

      <div class="card flex justify-content-center">
        <Button label="Registrar" />
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

#dropLogin {
  height: 40px;
  width: 100%;
}

.linksLogin {
  margin: 10px;
}

.FloatLabel {
  height: 25px;
}
</style>

<script setup>
import { ref } from "vue";

const username = ref(null);
const password = ref(null);
const phone = ref(null);
const email = ref(null);

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>
