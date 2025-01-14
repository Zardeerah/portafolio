<template class="container">
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar__container">
        <router-link class="navbar__brand" to="/">Turismo Chile</router-link>
        <div class="navbar__collapse collapse navbar-collapse">
          <ul class="navbar__nav me-auto">
            <li class="navbar__item">
              <router-link class="navbar__link" to="/contacto">Contacto</router-link>
            </li>
            <li class="navbar__item">
              <router-link class="navbar__link" to="/detalles">Destinos</router-link>
              <router-view />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>



<script>
export default {
  name: 'App'
}
</script>

<style>

</style>