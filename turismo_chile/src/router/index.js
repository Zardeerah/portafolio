import { createRouter, createWebHistory } from 'vue-router'
import Detalle from '@/views/Detalle.vue' 
import Contacto from '@/views/Contacto.vue'



import NotFound from '@/views/NotFound.vue'
import HomeView from '@/views/Home.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'Contacto', 
      component: Contacto
    },
    {
      path: '/detalles/:id',
      name: 'detalleDestino',
      component: Detalle // Asegúrate de que este sea el nombre correcto del componente
  },


  
    
    
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router