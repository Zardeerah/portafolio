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
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 0px;
    margin-bottom: 0%;

}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 20px;
    margin-left: 20px;
    background-color: rgb(248, 224, 236);
    padding: 20px;
    border-radius: 20px;

}

.titulo {
    color: rgb(46, 1, 66);
    font-size: 30px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(192, 42, 42, 0.3);
    font-family: "Aldrich", serif;
    transform: scale(1.2);
    margin-top: auto;
}

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: rgb(248, 224, 236);
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

/* Media queries para adaptar el diseño a teléfonos */
@media (max-width: 768px) {
    .titulo {
        font-size: 24px;
        /* Reduce el tamaño del título en pantallas pequeñas */
    }

    .card-body a {
        font-size: 1rem;
        /* Ajusta el tamaño de la fuente en enlaces */
    }

    /* Ajustar las tarjetas en una sola columna */
    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .col-md-4 {
        width: 100%;
        /* Las tarjetas ocupan el 100% del ancho */
        margin-bottom: 15px;
        /* Espacio entre las tarjetas */
    }

    .card-img-top {
        height: 150px;
        /* Reduce el tamaño de las imágenes para pantallas pequeñas */
    }
}
</style>
