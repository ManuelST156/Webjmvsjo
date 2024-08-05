<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
     <!--========================================================-->
     <!--Menu SideBar y las rutas-->
     <!--========================================================-->
    <div class="logo">
      <img src="../assets/logo.png" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button id="button" class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">menu</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Inicio</span>
      </router-link>

      <router-link to="/acercadenosotros" class="button">
        <span class="material-icons">menu_book</span>
        <span class="text">Sobre Nosotros</span>
      </router-link>

      <router-link to="/vacantes" class="button">
        <span class="material-icons">description</span>
        <span class="text">Vocalias</span>
      </router-link>

      <router-link
        v-if="userStatus == 'Admin'"
        to="/administrarUsuarios"
        class="button"
      >
        <span class="material-icons">group</span>
        <span class="text">Administrar Usuarios</span>
      </router-link>

      <router-link
        v-if="userStatus == 'Admin'"
        to="/administrarComunidades"
        class="button"
      >
        <span class="material-icons">diversity_1</span>
        <span class="text">Administrar Comunidades</span>
      </router-link>

      <router-link
        v-if="userStatus == 'Admin'"
        to="/administrarInfoVistas"
        class="button"
      >
        <span class="material-icons">layers</span>
        <span class="text">Administrar Vistas</span>
      </router-link>

      <router-link
        v-if="userStatus == 'Admin'"
        to="/administrarPaginaInicio"
        class="button"
      >
        <span class="material-icons">real_estate_agent</span>
        <span class="text">Administrar Pagina de Inicio</span>
      </router-link>

      <router-link to="/contactanos" class="button">
        <span class="material-icons">email</span>
        <span class="text">Contactanos</span>
      </router-link>
    </div>

    <div class="menu">
      <router-link v-if="!isAuthenticated" to="/iniciarSesion" class="button">
        <span class="material-icons">account_circle</span>
        <span class="text">Iniciar Sesion</span>
      </router-link>

      <a href="#" v-if="isAuthenticated" class="button" @click="logOut">
        <span class="material-icons">account_circle</span>
        <span class="text">Cerrar Sesion</span>
      </a>

      <router-link v-if="isAuthenticated" to="/ajustes" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Ajustes</span>
      </router-link>
    </div>

    <div class="flex"></div>
  </aside>
</template>

<script setup>
//========================================================//
//Imports de Recursos
//========================================================//

import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router"; //Utilizado para manejar las rutas en el sidebar
import { createClient } from "@supabase/supabase-js";

//========================================================//
//Variables de Estado
//========================================================//

const userStatus = ref(sessionStorage.getItem("userRol"));


//========================================================//
//Variables de Supabase
//========================================================//
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//========================================================//
//Variable de Datos
//========================================================//

const router = useRouter();
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

//========================================================//
//Methods
//========================================================//

//========================================================//
//Menu Desplegable en Aplicacion
//========================================================//
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};

//========================================================//
//Computed para la verificacion de token
//========================================================//
const isAuthenticated = computed(() => !!localStorage.getItem("tokenJMV"));

//========================================================//
//Funcion de LogOut del Uusario
//========================================================//
const logOut = async () => {
  localStorage.removeItem("tokenJMV");
  sessionStorage.removeItem("userRol");
  console.log("se borro", sessionStorage.getItem("userRol"));

  const { error } = await supabase.auth.signOut();

  setTimeout(() => {
    router.push({ path: "/" }).then(() => {
      window.location.reload();
    });
  }, 500);
};
</script>

<style lang="scss" scoped>
aside {
  
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  height: 110%;
  overflow: hidden;
  padding: 1rem;
  border-radius: 0 0 20px 0 ;

  background-color: var(--superdarkblue);
  color: var(--light);
  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 0.3rem;
    margin-left: 3px;

    img {
      width: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }

  .menu-toggle-wrap {
    margin-bottom: 0.4rem;
    
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--lightblue);
          transform: scale(1.1);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.7rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--superdarkblue);

        .material-icons,
        .text {
          color: var(--lightblue);
          transform: scale(1.1);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--lightcyan);

        .material-icons,
        .text {
          color: var(--lightblue);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    /* .menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		} */

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }
}
</style>
