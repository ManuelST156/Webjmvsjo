<template>
  <!-- <a class="button" id="buttonUp" href="javascript:void(0);" @click="scrollTop()">
			<span class="material-icons">arrow_circle_up</span>
			<span class="text">Ir al Inicio de la Pagina</span>
	</a> -->

  <a id="backToTopButton" @click="scrollToTop()">
    <span class="material-icons">arrow_circle_up</span>
  </a>
</template>

<script setup>
import { ref } from "vue";

window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  const button = document.getElementById("backToTopButton");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* import { ref, onMounted, onUnmounted } from 'vue';

const isButtonVisible = ref(false);

const toggleBackToTopButton = () => {
  if (window.scrollY > 300) {
    isButtonVisible.value = true;
  } else {
    isButtonVisible.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', toggleBackToTopButton);
});

onUnmounted(() => {
  window.removeEventListener('scroll', toggleBackToTopButton);
}); */
</script>

<style scoped>
#backToTopButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--darkblue);
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: none;
}

#backToTopButton:hover {
  background: #0056b3;
}

.material-icons {
  color: var(--light);
  font-size: 3.12rem;
}
</style>
