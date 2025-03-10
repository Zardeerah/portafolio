<template>
    <!-- Contenedor principal -->
    <div class="container text-center py-5">
        <!-- Nombre y Rol -->
        <h1 class="display-4">Paola Stuardo Viveros</h1>
        <p class="lead">Desarrolladora front-end</p>
    </div>

    <!-- Contenedor de Contact -->
    <div class="d-flex justify-content-center">
        <Contact />
    </div>
</template>

<script setup>
import Contact from '../about/Contact.vue';
</script>

<style scoped>
h1 {
    color: rgb(46, 1, 66);
    font-size: 30px;
    font-family: "Aldrich", serif;
    transform: scale(1.5);
    font-weight: 300;
    margin-top: 200px;
}

p {
    color: rgb(46, 1, 66);
    font-size: 40px;
    font-weight: 400;
    font-family: 'Cascadia Code', monospace;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    h1 {
        transform: scale(1);
        /* Evita que sea demasiado grande en móviles */
        margin-top: 10vh;
        /* Reduce el margen */
    }
}
</style>
