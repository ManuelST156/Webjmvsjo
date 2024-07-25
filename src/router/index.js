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
import LoadingConfirmationView from '@/views/StatusPages/LoadingConfirmationView.vue'


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
      component: SettingsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/iniciarSesion',
      name: 'login',
      component: LoginView,
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
      component: ApplyVacancyView,
      meta: { requiresAuth: true }
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
    },
    {
      path:'/confirmacion',
      name: 'confirmationPage',
      component:LoadingConfirmationView
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Comprueba si el usuario está autenticado
  const isAuthenticated = !!localStorage.getItem('tokenJMV');

   // Verifica si el usuario está intentando acceder a la página de inicio de sesión
   if (to.name === 'login' && isAuthenticated) {
    // Si el usuario está autenticado, redirige a la página de inicio u otra página deseada
    next({ name: 'home' });
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al login
    next({ name: 'login' });
  } else {
    // Si la ruta no requiere autenticación o el usuario está autenticado, permite el acceso
    next();
  }
});

export default router

