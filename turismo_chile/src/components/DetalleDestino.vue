<template>
    <div class="detalle">
      <h1>{{ destino.nombre }}</h1>
      <p>{{ destino.descripcion }}</p>
      <h3>Calificaciones: <span class="calificacion">{{ destino.calificaciones }}</span></h3>
      <h4>Reseñas:</h4>
      <ul class="reseñas">
        <li v-for="reseña in destino.reseñas" :key="reseña.usuario" class="reseña-item">
          <strong>{{ reseña.usuario }}:</strong> {{ reseña.comentario }} (<span class="calificacion">{{ reseña.calificacion }}</span>)
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        destino: {}
      };
    },
    computed: {
      ...mapState({
        destinos: state => state.destinos // Accede a los destinos desde el store
      })
    },
    created() {
      const id = parseInt(this.$route.params.id); // Asegúrate de que sea un número
      this.destino = this.destinos.find(d => d.id === id); // Encuentra el destino por ID
    }
  };
  </script>
  
  <style scoped>
  .detalle {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #2c3e50;
  }
  
  h3 {
    color: #16a085;
  }
  
  .calificacion {
    font-weight: bold;
    color: #e74c3c;
  }
  
  .reseñas {
    list-style-type: none;
    padding: 0;
  }
  
  .reseña-item {
    background-color: #ecf0f1;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border-left: 5px solid #3498db;
  }
  </style>
  
  
  