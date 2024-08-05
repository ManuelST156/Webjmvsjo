<template>
  <a id="backToTopButton" @click="scrollToTop()">
    <span class="material-icons">arrow_circle_up</span>
  </a>
</template>

<script setup>

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
