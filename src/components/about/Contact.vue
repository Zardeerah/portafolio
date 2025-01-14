<template>

    <!-- Iconos debajo del bloque de texto y más grandes -->
    <div class="flex items-center justify-center">
        <i v-for="(icon, index) in icons" :key="index" :class="icon.class" @click="redirectTo(icon.url)"
            class="cursor-pointer transition-transform transform hover:scale-110"></i>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Array de objetos que contiene la información de los iconos
const icons = ref([
    {
        class: 'fa-brands fa-linkedin text-6xl',
        url: 'https://www.linkedin.com/in/paola-alejandra-stuardo-viveros/',
    },
    {
        class: 'fa-brands fa-github text-6xl',
        url: 'https://github.com/Zardeerah',
    },

    {
        class: 'fa-regular fa-envelope text-6xl',
        url: 'mailto:paola.stuardo.viveros@gmail.com',
    },
]);

// Función para redirigir a la URL
const redirectTo = (url) => {
    window.open(url, '_blank');
};
</script>

<style scoped>
/* Asegura que el contenedor esté centrado */
div.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Centra verticalmente */
    flex-wrap: wrap;
    /* Ajusta la disposición de los iconos en pantallas pequeñas */
    gap: 20px;
    /* Espacio entre los iconos */
    margin-top: 0px;
    /* Espacio superior */

    /* Permite que los iconos se ajusten si hay muchos */
}

/* Estilo base de los iconos */
i {

    /* Color base */
    justify-content: center;

    padding: 5px;

    font-size: 2.5rem;
    /* Tamaño del ícono */
    background: linear-gradient(45deg, #3b82f6, #9333ea, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* Hace transparente el texto para mostrar el degradado */
    transition: transform 0.3s, background 0.3s ease-in-out;
    /* Ajuste opcional adicional */
    /* Transiciones suaves */
}

/* Efecto hover */
i:hover {

    transform: scale(1.2);
    filter: brightness(0.6);


}

i:active {
    transform: scale(0.9);

}


/* Efecto de clic */
</style>
