<template>
    <div class="container">
        <!-- Título -->
        <span class="titulo">Skills</span>

        <!-- Contenedor de habilidades -->
        <div class="contenedor-habilidades">
            <!-- Generar filas automáticamente -->
            <div v-for="(row, rowIndex) in skillRows" :key="rowIndex" class="fila-iconos">
                <!-- Generar elementos de cada fila -->
                <div v-for="(skill, index) in row" :key="index" class="iconos">
                    <component :is="skill.component || 'i'" :class="`${skill.icon} text-3xl`"
                        :style="{ color: skill.color }" />
                    <span>{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "MisSkill",
    setup() {
        const skills = [
            { name: "HTML", icon: "fa-brands fa-html5", color: "#ff571f" },
            { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#306AF1" },
            { name: "Sass", icon: "fa-brands fa-sass", color: "#CF6B9D" },
            { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#8F1AFF" },
            { name: "Git", icon: "fa-brands fa-git-alt", color: "#E84D31" },
            { name: "JavaScript", icon: "fa-brands fa-square-js", color: "#E8D44D" },
            { name: "Vue", icon: "fa-brands fa-vuejs", color: "#3FB27F" },
        ];

        // Dividir las habilidades en filas de 5 elementos
        const skillRows = [];
        for (let i = 0; i < skills.length; i += 4) {
            skillRows.push(skills.slice(i, i + 4));
        }

        return { skillRows };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

.titulo {
    color: rgb(46, 1, 66);
    font-size: 30px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(192, 42, 42, 0.3);
    font-family: "Aldrich", serif;
    transform: scale(1.2);

}

/* Contenedor de filas */
.contenedor-habilidades {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    /* Espaciado entre filas */
}

.fila-iconos {
    display: flex;
    justify-content: center;
    /* Centrar elementos horizontalmente */
    gap: 20px;
    /* Espaciado entre los iconos */
}

.iconos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    gap: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(46, 1, 66);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    transition: transform 0.3s, background 0.3s ease-in-out;
    /* Ajuste opcional adicional */
}

.iconos i {
    font-size: 3rem;
}

.iconos span {
    font-size: 1.25rem;
    color: #ffffff;
}

.iconos:hover {
    transform: scale(1.2);
    filter: brightness(1.6);
}

.iconos:hover span {
    color: #6ccc35;
}

i:active {
    transform: scale(0.9);

}
</style>