<template>
    <div
        class="flex flex-col items-center justify-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <!-- Contenido del componente -->
        <h1>Paola Stuardo Viveros</h1>
        <p> Desarrolladora front-end</p>
    </div>

    <!-- Asegura que el contenedor de Contact también esté alineado al centro -->
    <div class="flex items-center justify-center">
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
    text-align: center;
    margin-top: 400px;
    font-family: "Aldrich", serif;
    transform: scale(1.5);
    font-weight: 300;
}

p {
    color: rgb(46, 1, 66);
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
    font-family: 'cascadia code', monospace;
    margin-bottom: 10px;


}
</style>