<template>
    <!--========================================================-->
    <!--Carousel de Imagenes-->
    <!--========================================================-->
    <div class="card">
      <Carousel
        :value="imagesCarousel"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="7000"
        id="my-carousel"
        class="flex flex-row md:flex-column lg:flex-column"
      >
        <template #item="slotProps">
          <div class="div1">
            <div class="mb-3">
              <div class="relative mx-auto">
                <img
                  :src="slotProps.data.imagenUrl"
                  alt="Imagen No carga"
                  class="w-full border-round"
                />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script setup>
  //========================================================//
  //Imports de Recursos
  //========================================================//
  import { ref, onMounted } from "vue";
  import { createClient } from "@supabase/supabase-js";
  
  //========================================================//
  //Variables de Supabase
  //========================================================//
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  //========================================================//
  //Variables de Datos
  //========================================================//
  const imagesCarousel = ref([]); //Carga las imagenes de la DB
  
  //Carga datos para la opcion responsive
  const responsiveOptions = ref([
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);
  
  //========================================================//
  //Mounted
  //========================================================//
  onMounted(async () => {
    const { data: dataImages, error: dataImagesError } = await supabase.from("ImagenesCarousel").select("*");
  
    dataImages.forEach(element => {
      if (element.estaActiva == true) {
        imagesCarousel.value.push(element);
      }
    });
  });
  </script>
  
  <style lang="scss" scoped>
  img {
    height: 350px;
    width: 100%;
  }
  
  .div1 {
    border-width: 1px;
    border-style: solid;
    border-radius: 20px;
    margin: 0.5rem;
    padding: 0.75rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-color: rgba(20, 72, 21, 0.427);
  }
  
  ::v-deep(.p-carousel) { 
    .p-carousel-next {
      color: var(--darkblue);
    }
  
    .p-carousel-prev {
      color: var(--darkblue);
    }
  
    .p-carousel-indicators .p-carousel-indicator.p-highlight button {
      background-color: var(--darkblue);;
    }
  }
  </style>
  