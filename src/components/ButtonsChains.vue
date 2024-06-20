<template>
  <main class="mainContainer">
    <div class="buttonChains">
      <router-link to="/ajustes" class="circleContainer">
        <img
          class="circleButton"
          src="https://i.blogs.es/8eaa43/goku-day-dragon-ball/500_333.jpeg"
          alt=""
        />
        <span id="circleSpanButton" class="text">Actividades</span>
      </router-link>

      <router-link to="/ajustes" class="circleContainer">
        <img
          class="circleButton"
          src="https://i.blogs.es/8eaa43/goku-day-dragon-ball/500_333.jpeg"
          alt=""
        />
        <span id="circleSpanButton" class="text">Comunidades</span>
      </router-link>

      <router-link to="/ajustes" class="circleContainer">
        <img
          class="circleButton"
          src="https://i.blogs.es/8eaa43/goku-day-dragon-ball/500_333.jpeg"
          alt=""
        />
        <span id="circleSpanButton" class="text">Vocalias</span>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.buttonChains {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 150px;
  text-decoration: none;
  color: inherit;
  margin: 30px;
  /* cursor: pointer; */
}

.circleButton {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.circleButton:hover {
  filter: hue-rotate(100%);
}

#circleSpanButton {
  padding: 10px;
}
</style>
