<template>
    <!-- Contenedor principal -->
    <div class="container flex flex-col items-center mt-10 space-y-4">
        <!-- Sección de Proyectos -->
        <div class="w-full sm:w-auto flex justify-center">
            <MisProyectos />
        </div>

        <!-- Sección para Skills y Training -->
        <section class="flex flex-col sm:flex-row w-full sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0">
            <!-- Skills -->
            <div class="flex justify-center w-full sm:w-auto">
                <MisSkill />
            </div>
            <!-- Training -->
            <div>
                <MisTradding />
            </div>
        </section>
    </div>
</template>

<script setup>
import MisSkill from "@/components/experiencia/MisSkill.vue";
import MisProyectos from "@/components/experiencia/MisProyectos.vue";
import MisTradding from "@/components/experiencia/MisTradding.vue";
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 20px;
}

/* Estilo para la sección de Skills y Training */
section {
    display: flex;
    justify-content: center;
    /* Centra horizontalmente los elementos */
    gap: 100px;
    /* Espaciado entre Skills y Training */
    width: 100%;
    /* Asegura que ocupe todo el ancho del contenedor */
}

/* Estilo para MisSkill y MisTradding */
.iconos,
.trading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 300px;
    /* Ancho máximo uniforme */
}

.iconos {
    background-color: #e8f5e9;
    /* Verde claro */
}

.trading {
    background-color: #e3f2fd;
    /* Azul claro */
}
</style>
