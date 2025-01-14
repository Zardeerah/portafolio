<template>
    <div class="container flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md mr-5">
        <span class="titulo text-3xl font-bold font-mono text-center text-blue-600 mb-6">
            Formación
        </span>
        <ul class="space-y-2 text-gray-700">
            <li class="bg-blue-100 text-blue-800 rounded-md p-3 shadow-sm hover:bg-blue-200 transition-colors">
                Desarrollo de aplicaciones Front End, Desafio Latam
            </li>
            <li class="bg-blue-100 text-blue-800 rounded-md p-3 shadow-sm hover:bg-blue-200 transition-colors">
                Analisis de Datos, Coursera
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 0px;
}

.titulo {
    color: rgb(46, 1, 66);
    font-size: 30px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(192, 42, 42, 0.3);
    font-family: "Aldrich", serif;
    transform: scale(1.2);
    text-align: center;
    /* Asegura que el texto esté centrado */
    display: block;
    /* Asegura que el elemento ocupe todo el ancho */
    margin-top: 10px;

}

ul {
    padding: 0;
    margin: 0;

}

li {
    list-style-type: none;
}
</style>
