<template>
    <div class="container">
        <img src="/src/assets/img/paola.jpg" alt="Foto de perfil de Paola" />
        <h1>Hola, soy Paola</h1>
        <span>
            Soy una profesional multidisciplinaria con un enfoque innovador que combina
            fonoaudiología, técnico en enfermería en alta complejidad, logística y desarrollo
            de aplicaciones front-end. Mi experiencia en fonoaudiología me ha enseñado el poder
            de la comunicación efectiva, lo que me permite construir relaciones sólidas y colaborar
            de manera fluida en equipos multidisciplinarios. He manejado situaciones críticas en UCI y UTI,
            desarrollando habilidades de gestión del estrés y atención al detalle. En el ámbito logístico,
            optimicé procesos de inventario y recolección de datos, lo que resulta en una mayor eficiencia operativa.
            Mi compromiso con el aprendizaje continuo me mantiene a la vanguardia de las tendencias del mercado,
            lista para aportar valor y soluciones creativas en cada proyecto. Estoy aquí para transformar desafíos en
            oportunidades y crear un impacto significativo en el equipo y la organización.
        </span>

    </div>
    <p class=" items-center justify-center">
        <Contact />

    </p>
</template>

<script>
export default {
    name: "PerfilPaola",
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    min-height: 100vh;
    /* Ocupa toda la pantalla */
    box-sizing: border-box;

}

img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    /* Espaciado debajo de la imagen */
}

h1 {
    color: rgb(46, 1, 66);
    font-size: 30px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(192, 42, 42, 0.3);
    font-family: "Aldrich", serif;
    transform: scale(1.2);

}

span {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.6;
    /* Mejora la legibilidad */
    color: rgb(68, 100, 68);
    /* Contraste adecuado */
    max-width: 800px;
    /* Limitar el ancho del texto */
    text-align: justify;
    /* Alinear el texto para mejor lectura */
    border-radius: 50px;
    font-family: "Aldrich", serif;
}
</style>

<script setup>
import Contact from '../about/Contact.vue';

</script>