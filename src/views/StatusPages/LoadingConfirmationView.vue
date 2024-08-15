<template>
    <main class="im">
        <div class="containerLoading">
            <!-- <video autoplay loop muted playsinline class="loading">
             <source src="/src/assets/AnimationJMV.mp4" type="video/mp4" alt="">
            </video> -->

            <img class="loading" src="/src/assets/AnimationPageJMV.gif" alt="">
        </div>
    </main>
</template>

<style>


img{
    max-width: 100%;
    max-height: 100%;
}
.im{
    background-color:#FFFFFF ;
}

.containerLoading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

</style>
<script setup>

import { onMounted, ref } from 'vue';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'vue-router';

//Variables de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);


//Variables de Datos
const router=useRouter();

onMounted(()=>{


    setTimeout(async()=>{
        const token = getParams('token');
        const email = getParams('email');
        
    
        const { data, error } = await supabase.auth.verifyOtp({ token_hash: token, type: 'email'});
        
        router.push({ name: 'home' });

    },3000);

});




const getParams=(param)=>{
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}




</script>