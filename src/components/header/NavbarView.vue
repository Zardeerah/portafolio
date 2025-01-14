<template>
    <nav class="flex items-center bg-blue-600 w-full max-w-xs  py-4 rounded">
        <div
            class="flex flex-row md:flex-col text-xl font-bold space-x-4 md:space-x-0 md:space-y-4 w-full md:w-auto md:text-center hover:text-gray-200">
            <router-link v-for="(link, index) in links" :key="index" :to="link.path"
                class="no-underline text-white text-center px-3 py-2 transition-all duration-300 hover:underline hover:text-gray-200"
                href="#">
                {{ link.name }}
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarView',
    data() {
        return {
            links: [
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Experiencia', path: '/experiencia' },
            ]
        }
    }
}
</script>

<style scoped>
nav {

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    background: linear-gradient(to right, #3b82f6, #9333ea, #ec4899);
    text-align: right;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

}

nav a {
    /* Estilos para los enlaces */
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    /* Estilos para los enlaces al pasar el mouse */
    background-color: rgba(255, 255, 255, 0.1);
}
</style>