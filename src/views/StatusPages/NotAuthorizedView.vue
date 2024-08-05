<template>
    <main>
      <div class="not-found">
        <div>
          <img src="@/assets/notAuthorized.gif" alt="">
        </div>
        <h1>Usted No esta Autorizado para ingresar a esta pestaña</h1>
        <div class="card flex justify-content-center">
            <Button
              class="buttonSend"
              label="Regresar A la Pantalla de Inicio"
              @click="toHome"
              
            />
          </div>
      </div>
     </main>  
    </template>
    
    <script setup>
    //========================================================
    //Imports de Dependencias
    //========================================================
    import { useRouter } from "vue-router";
    
    //========================================================
    //Variable que contiene el router
    //========================================================
    const router = useRouter();
    
    //========================================================
    //Metodo para volver al home
    //========================================================
    
    const toHome = () => {
      router.push({ path: "/" }).then(() => {
        window.location.reload();
      });
    };
    </script>
    
    <style scoped>
    .not-found {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    
    .not-found h1 {
      font-size: 3rem;
      color: var(--lightgrey);
      width: 100%;
      margin: 0px 0 15px  ;
    }
    
    img{
      width: 350px;
      height: 350px;
    }
    
    .buttonSend {
      margin: 3px 0;
      background-color: var(--darkblue);
      width: 270px;
      height: 50px;
      border: none;
    }
    
    .buttonSend:hover {
      background-color: var(--lightcyan);
    }
    
    .buttonSend:active {
      background-color: var(--darkblue);
    }
    </style>
    