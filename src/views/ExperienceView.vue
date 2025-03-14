<template>
    <!-- Contenedor principal -->
    <div class="container mt-3 text-center">
        <!-- Sección de Proyectos -->
        <div class=" mis proyectos row justify-content-center mb-4">
            <div class="col-12 col-md-8">
                <MisProyectos />
            </div>
        </div>

        <!-- Sección para Skills y Training -->
        <div class="row justify-content-center align-items-start mb-4">

            <!-- Skills -->
            <div class="skill col-12 col-md-5">
                <div class="p-4 border rounded custom-bg shadow-sm">
                    <MisSkill />
                </div>
            </div>
            <!-- Training -->
            <div class="training col-12 col-md-5">
                <div class="p-4 border rounded custom-bg shadow-sm">
                    <MisTradding />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import MisSkill from "@/components/experiencia/MisSkill.vue";
import MisProyectos from "@/components/experiencia/MisProyectos.vue";
import MisTradding from "@/components/experiencia/MisTradding.vue";
</script>


<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.custom-bg {
    background-color: rgb(247, 235, 241);
    padding: 40px;
    border-radius: 20px;

    overflow: hidden;
    max-height: 100%;
}

.row {
    margin-bottom: 20px;

}

.col-12 {
    margin-bottom: 20px;
    border-radius: 20px;

}



.mis {

    padding: 20px;
    border-radius: 20px;
    background-color: rgb(247, 235, 241);
    overflow: hidden;
    max-height: 100%;

}

.skill .custom-bg,
.training .custom-bg {
    border-radius: 20px !important;
}




/* Ajusta la alineación de los elementos en dispositivos más pequeños */
@media (max-width: 768px) {
    .col-12 {
        margin-bottom: 20px;
    }
}
</style>
