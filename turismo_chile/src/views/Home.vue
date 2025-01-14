<template>
 






 
  <div class="home">
    <h1>Turismo en Chile</h1>
    <div class="regiones">
      <div class="card" v-for="destino in destinos" :key="destino.id" @click="irADetalle(destino.id)">
        <div class="card-body">
          <h5>{{ destino.nombre }}</h5>
          <p>{{ destino.descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      destinos: state => state.destinos // Accede a los destinos desde el store
    })
  },
  methods: {
    irADetalle(id) {
      this.$router.push({ name: 'detalleDestino', params: { id } }); // Navega a la página de detalles
    }
  },
  created() {
    this.$store.dispatch('fetchDestinos'); // Carga los destinos al crear el componente
  }
};
</script>

<style lang="scss" scoped>
$card-bg: #fff;
$card-border: #b81414;
$card-radius: 5px;
$card-hover-bg: #7e4f4f;

.regiones {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .card {
    cursor: pointer;
    background-color: $card-bg;
    border: 1px solid $card-border;
    border-radius: $card-radius;
    width: 250px;
    transition: background-color 0.3s;

    &:hover {
      background-color: $card-hover-bg;
    }

    .card-body {
      padding: 10px;
    }
  }
}

h1 {
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
}
</style>

