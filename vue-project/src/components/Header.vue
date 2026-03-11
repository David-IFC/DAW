<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>


  </nav>
  
</template>
<style scoped>

nav{
display: flex;
gap: 20px;
padding: 20px;
background: #42b883;

}
a{
  color: white;
  text-decoration: none;
}
</style>
