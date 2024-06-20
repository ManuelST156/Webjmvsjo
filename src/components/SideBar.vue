<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
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
        <span class="material-icons">description</span>
        <span class="text">Sobre Nosotros</span>
      </router-link>
      <router-link to="/vacantes" class="button">
        <span class="material-icons">group</span>
        <span class="text">Vocalias</span>
      </router-link>
      <router-link to="/contactanos" class="button">
        <span class="material-icons">email</span>
        <span class="text">Contactanos</span>
      </router-link>
    </div>

    <div class="menu">
      <router-link to="/iniciarSesion" class="button">
        <span class="material-icons">account_circle</span>
        <span class="text">Iniciar Sesion</span>
      </router-link>

      <router-link to="/ajustes" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Ajustes</span>
      </router-link>
    </div>

    <div class="flex"></div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import logoURL from "../assets/logo.png";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--superdarkblue);
  color: var(--light);
  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }

  .menu-toggle-wrap {
    margin-bottom: 1rem;

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
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
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
