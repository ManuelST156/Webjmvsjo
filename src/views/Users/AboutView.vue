<template>
  <main>

    <div class="more-about">
        <h2>¿Qué quieres Saber de Nosotros?</h2>
        <p class="optionLabel">Selecciona la informacion que deseas conocer de JMV:</p>
        <div class="information-list">
          <button @click="aboutUs" class="information-item">
            Acerca de Nosotros
          </button>
          <button @click="logoDesign" class="information-item">
            Logo de JMV
          </button>
          <button @click="members" class="information-item">Miembros</button>
          <button @click="distinctiveNotes" class="information-item">
            Notas Distintivas
          </button>
          <button @click="aboutCenter" class="information-item">
            Acerca del Centro
          </button>
        </div>
      </div>

    <div class="about-studio">
      <!--Acerca de Nosotros General-->
      <div class="about-section" v-if="dataShow == 'aboutUs'">
        <div class="about-image-container">
          <img
            src="@/assets/AboutUs-SJO.jpg"
            alt="No carga"
            class="imageAbout"
          />
        </div>

        <div class="about-content">
          <h2>Acerca de Nosotros JMV SJO</h2>
          <p>
            Juventud Mariana Vicentina (JMV) San José Obrero es uno de los
            muchos centros de JMV que conforman la asociación en la República
            Dominicana.
          </p>
          <p>
            Este centro fue fundado el 24 de septiembre de 1992 y cuenta con 6
            comunidades activas. JMV es una asociación que nace por el deseo de
            nuestra madre María, compuesta por jóvenes cristianos católicos
            dispuestos a seguir a Cristo siguiendo los pasos de María y de San
            Vicente de Paúl, ayudando a los pobres y necesitados.
          </p>
        </div>
      </div>

      <!--Logotipo y distintivo-->
      <div class="about-section" v-if="dataShow == 'logoDesign'">
        <div class="about-image-container">
          <img
            src="@/assets/jmvLogo.jpg"
            alt="No Carga"
            class="imageAbout"
          />
        </div>

        <div class="about-content">
          <h2>Distintivo de la Asociación</h2>
          <p><strong>Distintivo</strong></p>
          <p>
            El distintivo de la Asociación es la Medalla Milagrosa. La misma
            será entregada a los miembros al momento de su admisión en la
            Asociación.
          </p>
          <p><strong>LogoTipo</strong></p>
          <p>
            El logotipo está inspirado en el reverso de la Medalla Milagrosa, emblema de la
            Asociación según los Estatutos Internacionales. El simbolismo es el
            mismo de la Medalla: La “I” y la “M” entrelazadas, simbolizando a
            Cristo y a María al pie de la Cruz (Jn. 19); María, Asociada al
            Redentor. Las 12 estrellas simbolizan los doce apóstoles y la
            Iglesia, reunida en el Cenáculo en torno a María (Hch. 1). 
          </p>
          <p>
            En cuanto
            a los colores, resaltan el azul y el blanco, los colores marianos.
            La adición de las letras “J” y “V” al monograma de la Medalla,
            simbolizan que la Asociación se reconoce nacida de las
            manifestaciones marianas de 1830 a Santa Catalina Labouré, en la
            Casa Madre de las Hijas de la Caridad de San Vicente de Paúl, en
            París, Francia; éstas manifestaciones dieron origen a la Medalla. En
            República Dominicana añadimos el listón azul cyan, el cual tiene
            escrito el nombre del país, y cuyo origen procede del escudo
            nacional dominicano.
          </p>
        </div>
      </div>

      <!--Miembros-->
      <div class="about-section" v-if="dataShow == 'members'">
        <div class="about-image-container">
          <img
            src="@/assets/members.jpg"
            alt="No Carga"
            class="imageAbout"
          />
        </div>

        <div class="about-content">
          <h2>Miembros de JMV SJO</h2>
          
          <p>
            <strong>Clasificacion de los Miembros</strong>
            <ul>
              <li>
                <strong>Aspirantes:</strong> Los niños, adolescentes y jóvenes que participan en los Centros y en la vida de la Asociación que aún no han realizado la admisión.
              </li>

              <li>
                <strong>De Pleno Derecho:</strong> Los jóvenes admitidos entre 15 y 30 años que participan activamente o colaboran en los Centros, obras y misiones de la Asociación.
              </li>

              <li>
                <strong>Adultos:</strong> Son jóvenes mayores de 30 años, que participando de una comunidad eclesial están comprometidos en la colaboración, formación y animación de la Asociación.
              </li>
            </ul>
          </p>

          <p>
            <strong>Rango de Edad de los Miembros</strong>
            <ul>
              <li><strong>Infantiles:</strong> de 8 a 11 años.</li>
              <li> <strong>Pre-juveniles: </strong> de 12 a 14 años.</li>
              <li> <strong>Juveniles: </strong>de 15 a 30 años.</li>
              <li> <strong>Adultos:</strong> Mayores de 30 años.</li>
            </ul>
          </p>
        </div>
      </div>

      <!--Notas Distintivas-->
      <div class="about-section" v-if="dataShow == 'distinctiveNotes'">
        <div class="about-image-container">
          <img
            src="@/assets/distintiveNote.jpg"
            alt="No Carga"
            class="imageAbout"
          />
        </div>

        <div class="about-content">
          <h2>Notas Distintivas</h2>
          <p>
            <ul>
        <li><strong>Eclesial:</strong> Conscientes de su pertenencia a la Iglesia, los miembros son convocados a formar parte de la gran familia cristiana, y en comunión con los pastores se sienten llamados a colaborar en la obra de evangelización, junto a otras Asociaciones apostólicas.</li>
        <li><strong>Laical:</strong> La Asociación está formada mayoritariamente por jóvenes laicos que intentan vivir el Evangelio en medio de la sociedad. Sus miembros están llamados especialmente a ser presencia operante de la Iglesia en aquellos lugares y circunstancias en donde la misma solo puede ser sal a través de ellos.</li>
        <li><strong>Mariana:</strong> Siendo fruto del deseo manifestado por la Virgen María a Santa Catalina Labouré, sus miembros toman a María como modelo de entrega a Dios y de servicio a los hermanos, haciendo del Magníficat un camino hacia la identificación con Jesús.</li>
        <li><strong>Misionera:</strong> Como seguidores de Cristo, sus miembros son portadores del mensaje de salvación y se sienten responsables de llevarlo a todos los hombres y mujeres, especialmente a jóvenes y niños, colaborando con la acción misionera de la Iglesia local y universal.</li>
        <li><strong>Vicentina:</strong> Por su nacimiento en el seno de la familia de San Vicente de Paúl, la Asociación se inspira en el carisma vicentino, haciendo de la evangelización y el servicio a los más necesitados el sello distintivo de su presencia en la Iglesia y en el mundo.</li>
    </ul>
          </p>
        </div>
      </div>

      <!--Acerca del Centro-->
      <div class="about-section" v-if="dataShow == 'aboutCenter'">
        <div class="about-image-container">
          <img
            src="@/assets/center.jpg"
            alt="No Carga"
            class="imageAbout"
          />
        </div>

        <div class="about-content">
          <h2>Acerca del Centro</h2>
          <p>
            El Centro es el lugar de encuentro, vida y acción de los miembros de las diferentes comunidades y secciones, de una misma parroquia, casa o escuela. Un Centro se compone de dos o más comunidades. Cuando en algún lugar exista una sola comunidad, esta se incorpora al centro más cercano, salvo inconvenientes de distancia. Cada centro cuenta con un Consejo de Centro, que velan por el centro. 
          </p>
          <p>
            <strong>Las funciones del Consejo de Centro son:</strong>
    <ul>
        <li>Unificar criterios de formación, tomando en consideración los proyectos pastorales de la parroquia y la Diócesis, así como los lineamientos y contenidos elaborados por el Consejo Nacional.</li>
        <li>Facilitar la comunicación con las comunidades que componen el Centro; y mantener comunicación con el Consejo Nacional.</li>
        <li>Elaborar el plan anual de trabajo, tomando en consideración recursos y necesidades de las comunidades, así como los lineamientos pastorales de la parroquia, la Diócesis, y los propios del Consejo Nacional.</li>
        <li>Enviar delegados a encuentros, misiones y demás actividades en representación del Centro.</li>
        <li>Enviar al Consejo Nacional un informe semestral sobre la marcha del Centro.</li>
    </ul>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const dataShow = ref("aboutUs");

const aboutUs = () => {
  dataShow.value = "aboutUs";
  console.log(dataShow.value);
};

const logoDesign = () => {
  dataShow.value = "logoDesign";
};

const members = () => {
  dataShow.value = "members";
};

const distinctiveNotes = () => {
  dataShow.value = "distinctiveNotes";
};

const aboutCenter = () => {
  dataShow.value = "aboutCenter";
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: var(--rblightblue)
}

.about-section {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  
}

.about-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageAbout {
  /* max-width: 100%; */
  width: 600px;
  height: 400px;
  border-radius: 10px;
}

.imageAboutException {
  /* max-width: 100%; */
  width: 400px;
  height: 400px;
  border-radius: 10px;
}

.about-content {
  flex: 1;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* margin-top: 20px; */
}

.about-content h2 {
  color: var(--darkblue);
  font-size: 24px;
  margin-bottom: 10px;
}

.about-content p {
  color: #333;
  margin-bottom: 10px;
}

.more-about {
  text-align: center;
}

.more-about h2 {
  color: var(--darkblue);
  font-size: 24px;
  margin-bottom: 10px;
}

.more-about p {
  color: #333;
  margin-bottom: 20px;
}

.information-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.information-item {
  background: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  text-align: center;
  font-weight: bold;
  color: rgb(0, 0, 35);
}

.information-item:hover {
  background: var(--darkblue);
  color: white;
}

.information-item:active {
  background: white;
  color: rgb(0, 0, 35);
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
  }

  .about-content {
    margin-top: 20px;
  }

  .information-item {
    width: 100%;
    font-weight: bold;
    color: blue;
  }

  .imageAbout {
  max-width: 100%;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 480px) {
  .about-content h2 {
    font-size: 20px;
  }

  .more-about h2 {
    font-size: 20px;
  }
  .imageAbout {
  /* max-width: 100%; */
  width: 400px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}

li{
  padding: 3px;
}

.optionLabel{
  font-weight: bold;
}
</style>
