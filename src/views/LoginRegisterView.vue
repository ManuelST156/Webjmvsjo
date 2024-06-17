<template>
    <main class="LoginRegister">
        
    <div id="containerRegister"  class="card flex justify-content-center">

        <h1 id="Tittle">Iniciar Sesion</h1>

        <div class="prueba">
            <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="username" v-model="value" />
                <label for="username">Nombre de Usuario o Email</label>
            </FloatLabel>
        </div>
        
        <div class="prueba">
            <FloatLabel class="FloatLabel">
                <InputText class="inputsLogin" id="password" v-model="value" />
                <label for="password">Contraseña</label>
            </FloatLabel>
        </div>
        
        <div class="card flex justify-content-center">
          <Button label="Submit" />
        </div>
    </div>
    
    
    </main>
</template>



<style lang="scss" scoped>


.LoginRegister{
    background:linear-gradient(200deg,var(--rblight), var(--rblightblue)) ;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
}

#containerRegister {
  background-color: #f9f9f9; 
  padding: 2rem; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 35%;
  height: 60%;
}

#Tittle{
    align-self: center; 
    margin-bottom: 20px; 
}

.prueba{
    width: 100%;
    height: 60px; 
    margin: 10px 0;
}

.inputsLogin{
    height: 40px;
    margin-bottom: 4rem; 
    width: 100%; 
}

.FloatLabel{
    height: 25px;
}


/* 







#FormRegister {
  
  display: flex;
  flex-direction: column;
  align-items: center;
} */


/* .FloatLabel {
  position: relative;
  margin-bottom: 1.5rem;
}

.FloatLabel input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
}

.FloatLabel label {
  position: absolute;
  left: 0.75rem;
  top: 0.75rem;
  transition: all 0.2s ease-out;
  background-color: #fff;
  padding: 0 0.25rem;
  pointer-events: none;
}

.FloatLabel input:focus + label,
.FloatLabel input:not(:placeholder-shown) + label {
  top: -0.5rem;
  left: 0.5rem;
  font-size: 0.75rem;
  color: #007bff;
} */




</style>


<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>