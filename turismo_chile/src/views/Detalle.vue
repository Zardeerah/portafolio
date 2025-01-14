<<template>
    <div class="detalle">
      <h1>{{ destino.nombre }}</h1>
      <p>{{ destino.descripcion }}</p>
      <h3>Calificaciones: {{ destino.calificaciones }}</h3>
      <h4>Reseñas:</h4>
      <ul>
        <li v-for="reseña in destino.reseñas" :key="reseña.usuario">
          <strong>{{ reseña.usuario }}:</strong> {{ reseña.comentario }} ({{ reseña.calificacion }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        destinos: state => state.destinos
      }),
      destino() {
        const id = this.$route.params.id;
        return this.destinos.find(d => d.id == id) || {};
      }
    },
    created() {
      this.$store.dispatch('fetchDestinos');
    }
  };
  </script>
  
  <style scoped>
  .detalle {
    padding: 20px;
  }
  </style>
  
  
  