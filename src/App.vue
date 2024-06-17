<template>
  
	<div class="app">
	  <SideBar />
	  <RouterView />
	</div>
  
	
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import SideBar from '../src/components/SideBar.vue'
  
  
  </script>
  
  <style lang="scss">
  :root {
	  --primary: #4ade80;
	  --primary-alt: #22c55e;
	  --grey: #64748b;
	  --dark: #1e293b;
	  --dark-alt: #334155;
	  --light: #f1f5f9;
	  --sidebar-width: 300px;
  
	  //JMV colors
	  --darkblue: #0330A0;
	  --lightcyan: #00C2CB;
	  --lightblue: #44D9E6;
	  --superdarkblue:#000D47;
	  --darkblue2: #0A09B6;
  
	  --rblightcyan:rgba(68, 217, 230, 0.7);
	  --rbdarkblue:rgba(3, 48, 160, 0.7);
	  --rblight:rgba(241, 245, 249, 1);
	  --rblightblue:rgba(74, 193, 253, 0.7);
  
  
  }
  
  * {
	  margin: 0;
	  /* padding: 0; */
	  box-sizing: border-box;
	  font-family: 'Fira sans', sans-serif;
  }
  
  body {
	  background: var(--light);
  }
  
  #button {
	  cursor: pointer;
	  appearance: none;
	  border: none;
	  outline: none;
	  background: none;
	  padding: 0;
  }
  
  .app {
	  display: flex;
  
	  main {
		  flex: 1 1 0;
		  padding: 2rem;
  
		  @media (max-width: 1024px) {
			  padding-left: 6rem;
		  }
	  }
  }
  
  </style>