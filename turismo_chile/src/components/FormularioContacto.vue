<template>
    <form @submit.prevent="submitForm" class="form-contacto">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" v-model="nombre" class="form-control" id="nombre" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea v-model="mensaje" class="form-control" id="mensaje" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'FormularioContacto',
    data() {
      return {
        nombre: '',
        email: '',
        mensaje: ''
      };
    },
    methods: {
      submitForm() {
        console.log({
          nombre: this.nombre,
          email: this.email,
          mensaje: this.mensaje
        });
        // Enviar el formulario a un servidor o manejar la lógica de contacto aquí
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  $form-bg: #f8f9fa;
  $form-border: #ced4da;
  $form-border-hover: #007bff;
  
  .form-contacto {
    background-color: $form-bg;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 20px auto;
  
    .form-label {
      font-weight: bold;
    }
  
    .form-control {
      border: 1px solid $form-border;
      border-radius: 4px;
      transition: border-color 0.3s;
  
      &:focus {
        border-color: $form-border-hover;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
    }
  
    .btn {
      margin-top: 10px;
      width: 100%;
    }
  }
  </style>
  
  