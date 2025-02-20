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

        <!-- El componente Contact ya no está dentro de un p -->
        <Contact />
    </div>
</template>

<script>
export default {
    name: "PerfilPaola",
};
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    gap: 20px;
}

img {
    border-radius: 50%;
    max-width: 100%;
    height: 300px;
    display: block;
    margin-bottom: 20px;
}

h1 {
    color: rgb(46, 1, 66);
    font-size: 30px;
    text-shadow: 2px 2px 5px rgba(192, 42, 42, 0.3);
    font-family: "Aldrich", serif;
    transform: scale(1.2);
}

span {
    font-size: 18px;
    line-height: 1.6;
    color: rgb(68, 100, 68);
    max-width: 800px;
    text-align: justify;
    border-radius: 20px;
    font-family: "Aldrich", serif;
}

@media (max-width: 768px) {
    .container {
        padding: 10px;
    }

    h1 {
        font-size: 24px;
    }

    span {
        font-size: 14px;
        text-align: left;
    }
}
</style>

<script setup>
import Contact from '../about/Contact.vue';
</script>
