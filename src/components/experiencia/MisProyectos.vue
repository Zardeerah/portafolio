<template>
    <div class="container my-5">
        <h2 class="titulo">Proyectos</h2>

        <div class="row justify-content-center">
            <div class="col-md-4 mb-4">
                <div class="card border-0 rounded-4 shadow-sm hover-shadow transition">
                    <img src="@/assets/img/ProyectoPokemon.png" alt="Pokemon App" class="card-img-top rounded-top">
                    <div class="card-body text-center">
                        <a href="https://pokemonvue-beta.vercel.app/" target="_blank"
                            class="text-primary fw-bold text-decoration-none">
                            Pokemon App
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card border-0 rounded-4 shadow-sm hover-shadow transition">
                    <img src="@/assets/img/DesarrolloAplicaciones.png" alt="Pokedex App"
                        class="card-img-top rounded-top">
                    <div class="card-body text-center">
                        <a href=https://desafiopruebas-fd5a8.web.app/ target="_blank"
                            class="text-primary fw-bold text-decoration-none">
                            Desarrollo de aplicaciones front-end con framework Vue
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-4">
                <div class="card border-0 rounded-4 shadow-sm hover-shadow transition">
                    <img src="@/assets/img/proyecto.jpg" alt="proyecto" class="card-img-top rounded-top">
                    <div class="card-body text-center">
                        <a href="https://pagina-web-nine-lac.vercel.app/" target="_blank"
                            class="text-primary fw-bold text-decoration-none">
                            Proyecto pagina
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.titulo {
    color: rgb(46, 1, 66);
    font-size: 30px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(192, 42, 42, 0.3);
    font-family: "Aldrich", serif;
    transform: scale(1.2);

}

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card img {
    transition: transform 0.3s ease;
}

.card:hover img {
    transform: scale(1.05);
}

.card-body a {
    font-size: 1.2rem;
    transition: color 0.3s;
}

.card-body a:hover {
    color: #0d6efd;
    /* Azul de Bootstrap */
}

/* Estilos para que las imágenes sean del mismo tamaño */
.card-img-top {
    width: 100%;
    /* Ocupa todo el ancho del contenedor */
    height: 200px;
    /* Tamaño fijo para todas las imágenes */
    object-fit: cover;
    /* Recorta la imagen sin deformarla */
}
</style>
