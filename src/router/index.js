import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Users/HomeView.vue'
import AboutView from '@/views/Users/AboutView.vue'
import SettingsView from '@/views/Users/SettingsView.vue'
import VacanciesView from '@/views/Users/VacanciesView.vue'
import LoginView from '@/views/Auth/LoginView.vue' 
import RegisterView from '@/views/Auth/RegisterView.vue'
import ContactView from '@/views/Users/ContactView.vue'
import ApplyVacancyView from '@/views/Users/ApplyVacancyView.vue'
import LoadingPageView from '@/views/StatusPages/LoadingView.vue'
import NotFoundView from '@/views/StatusPages/NotFoundView.vue'


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
      component: LoginView
    },
    {
      path: '/contactanos',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/registrar',
      name: 'register',
      component: RegisterView
    },
    {
      path:'/aplicarVacante',
      name: 'applyVacancy',
      component: ApplyVacancyView
    },
    {
      path:'/cargando',
      name:'loadingPage',
      component: LoadingPageView
    },
    {
      path:'/noExiste',
      name:'notFound',
      component: NotFoundView
    }
  ]
})

export default router
