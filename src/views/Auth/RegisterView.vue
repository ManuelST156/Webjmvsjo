<template>
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
          <label for="name" :class="{ 'p-error': submitted && !password }">
            {{ submitted && !password ? 'Nombres son requeridos' : 'Nombres' }}
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
            :class="{ 'p-invalid': submitted && !registerUser.apellidosUsuario }"
          />
          <label for="lastname" :class="{ 'p-error': submitted && !password }">
            {{ submitted && !password ? 'Apellidos son requerido' : 'Apellidos' }}
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
          />
          <label for="email" :class="{ 'p-error': submitted && !password }">
            {{ submitted && !password ? 'Correo Electronico es requerido' : 'Correo Electronico' }}
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
          <label for="phone" :class="{ 'p-error': submitted && !password }">
            {{ submitted && !password ? 'Telefono es requerido' : 'Telefono' }}
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
          <InputText class="inputsLogin" id="password" v-model="password"
          required="true" 
          :class="{ 'p-invalid': submitted && !password}" />
          <label for="password" :class="{ 'p-error': submitted && !password }">
            {{ submitted && !password ? 'Contraseña es requerido' : 'Contraseña' }}
          </label>
          
        </FloatLabel>
      </div>

      <div class="card flex justify-content-center">
        <Button type="submit"  class="buttonSend" label="Registrar" @click="UsersRegister" />
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
  margin: 5px;
}

.FloatLabel {
  height: 25px;
}

.buttonSend {
  margin: 2px 0;
}
</style>

<script setup>
import { onMounted, ref } from "vue";
import { createClient } from "@supabase/supabase-js";



//Variables de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//Variables de Datos

const registerUser = ref({});
const password = ref();
const communities = ref();

//Variables de Estados
const submitted=ref(false);

//Mounted

onMounted(async () => {
  const data = await supabase.from("Comunidad").select("*");

  communities.value = data.data;
  console.log(communities.value);
});

//Funciones

const UsersRegister = async () => {

  submitted.value=true;
  

  /* if (!registerUser.value.nombresUsuario || 
    !registerUser.value.apellidosUsuario || 
    !registerUser.value.correoUsuario || 
    !registerUser.value.telefonoUsuario || 
    password.value==undefined)
    {
      alert("ben y:");
      
      
    } */
    

  /* const checkUser = await supabase
  .from('Usuarios')
  .select('correoUsuario')
  .eq('correoUsuario',registerUser.value.correoUsuario);

  console.log(checkUser.data.length); */

  /* if(checkUser.data.length==1)
  {
    alert("mi hermano, ya esta");
  } */

  

  /* try {
    const credentialData = await supabase.auth.signUp({
      email: registerUser.value.correoUsuario,
      password: password.value,
    });

    const dataUsers = await supabase.from("usuarioscredenciales").select("*");

    const data = dataUsers.data;

    const usuarioRegistrado = data.find(
      (user) => user.email == registerUser.value.correoUsuario
    );


    if (usuarioRegistrado) {
      registerUser.value.idAuth = usuarioRegistrado.id;

      addUser();
      const { error } = await supabase.auth.signOut();

    }
  } catch (error) {
    console.log("Este es el error ", error);
  } */
};



const addUser = async () => {
  registerUser.value.idRolUsuario = 2;

  const upsertData = await supabase
    .from("Usuarios")
    .upsert([registerUser.value])
    .select();
};
</script>
