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
import SeeVacancyView from '@/views/Admin/SeeVacancyView.vue'
import SeeFullVacancyView from '@/views/Admin/SeeFullVacancyView.vue'
import ManageUsers from '@/views/Admin/ManageUsers.vue'
import ManageComunities from '@/views/Admin/ManageComunities.vue'
import ManageHomePage from '@/views/Admin/ManageHomePage.vue'
import ManageInfoView from '@/views/Admin/ManageInfoView.vue'

import { AuthError, createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
      path:'/verVacantes',
      name: 'viewVacancy',
      component: SeeVacancyView,
      meta: { requiresAuth: true, roles:  'Admin'}
    },
    {
      path:'/verPostulacion',
      name: 'viewPostulation',
      component: SeeFullVacancyView,
      meta: { requiresAuth: true, roles:  'Admin'}
    },
    {
      path:'/administrarUsuarios',
      name: 'manageUsers',
      component: ManageUsers,
      meta: { requiresAuth: true, roles:  'Admin'}
    },
    {
      path:'/administrarComunidades',
      name: 'manageComunities',
      component: ManageComunities,
      meta: { requiresAuth: true, roles:  'Admin'}
    },
    {
      path:'/administrarPaginaInicio',
      name: 'manageHomePage',
      component: ManageHomePage,
      meta: { requiresAuth: true, roles:  'Admin'}
    },
    {
      path:'/administrarInfoVistas',
      name: 'manageInfoView',
      component: ManageInfoView ,
      meta: { requiresAuth: true, roles:  'Admin'}
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

router.beforeEach(async(to, from, next) => {
  // Comprueba si el usuario está autenticado
  const isAuthenticated = !!localStorage.getItem('tokenJMV');
  const roles = to.matched.some(record => record.meta.roles);
  const authenticate=to.matched.some(record => record.meta.requiresAuth);

   // Verifica si el usuario está intentando acceder a la página de inicio de sesión
   if (to.name === 'login' && isAuthenticated) {
    // Si el usuario está autenticado, redirige a la página de inicio u otra página deseada
    
    next({ name: 'home' });
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está autenticado, redirige al login
    next({ name: 'login' });
  } else if(roles && isAuthenticated && await getCurrentUser()!='Admin')
  {
    next({name: 'home'});
    
  }
  else {
    // Si la ruta no requiere autenticación o el usuario está autenticado, permite el acceso
    next();
  }
});

const getCurrentUser=async()=>{
  
const { data: { user } } = await supabase.auth.getUser()

const roleID= await supabase.from("Usuarios").select('idRolUsuario').eq('idAuth',user.id);

console.log(roleID.data[0].idRolUsuario);

const roleUser= await supabase.from("Roles").select('nombreRol').eq('idRol',roleID.data[0].idRolUsuario);

console.log(roleUser.data[0].nombreRol);
return roleUser.data[0].nombreRol;
}

export default router

