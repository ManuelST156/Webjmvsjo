import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SettingsView from '@/views/SettingsView.vue'
import VacanciesView from '@/views/VacanciesView.vue'
import LoginRegisterView from '@/views/LoginRegisterView.vue' 
import ContactView from '@/views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/acercadenosotros',
      name: 'about',
      component: AboutView
    },
    {
      path: '/vacantes',
      name: 'vacancies',
      component: VacanciesView
    },
    {
      path: '/ajustes',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/iniciarSesion',
      name: 'login',
      component: LoginRegisterView
    },
    {
      path: '/contactanos',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
