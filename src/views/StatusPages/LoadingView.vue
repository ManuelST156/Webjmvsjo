<template>
    <h1>Cargando</h1>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

onMounted(async()=>{

    
    const token = getParams('token');
    const email = getParams('email');
    
  
    const { data, error } = await supabase.auth.verifyOtp({ token_hash: token, type: 'email'})
    console.log(token);
    console.log(email);

});

const getParams=(param)=>{
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

</script>