import { createApp } from 'vue'; // Asegúrate de importar 'createApp'
import App from "/src/App.vue";

import store from "/src/store/index.js";

import router from "/src/router/index.js";

// Crear la instancia de la aplicación
const app = createApp(App);

// Usar el store
app.use(store);

// Usar Vue Router
app.use(router);

// Inyectar el store en la instancia de Vue


// Montar la aplicación en el elemento con id 'app'
app.mount('#app');