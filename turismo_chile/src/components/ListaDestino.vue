<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="destino in destinos" :key="destino.id">
        <div class="card mb-4">
          <img :src="getImage(destino.imagen)" class="card-img-top" :alt="destino.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ destino.nombre }}</h5>
            <p class="card-text">{{ destino.descripcion }}</p>
            <p class="card-text"><strong>Región:</strong> {{ destino.region }}</p>
            <p class="card-text"><strong>Calificación:</strong> {{ destino.calificaciones }}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListaDestino',
  computed: {
    ...mapGetters(['allDestinos']), // Utilizamos el getter de Vuex para obtener los destinos
    destinos() {
      return this.allDestinos; // Retornamos todos los destinos
    }
  },
  methods: {
    getImage(image) {
      // Asegúrate de que las imágenes estén en el directorio público o se sirvan correctamente
      return require(`@/assets/${image}`);
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>

