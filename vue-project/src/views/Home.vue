<script setup>
import Hijo from "@/components/Hijo.vue";
import TituloHome from "@/components/TituloHome.vue";
import PruebaEmit from "@/components/PruebaEmit.vue";
import { ref } from 'vue';
const mensaje = ref('');
function recibirDato(dato) {
  mensaje.value = dato;
}
const mensaje1 = "Datos que vienen del backend";
const mensaje2 = "Mensaje de bienvenida";
const mensaje3 = "Otro mensaje diferente";
</script>

<template>
  <TituloHome />
  <PruebaEmit @datoEnviado="recibirDato" />
  <p class="MensajeDelHijo">{{ mensaje }}</p>
  <Hijo :texto="mensaje1" />
  <Hijo :texto="mensaje2" />
  <Hijo :texto="mensaje3" />

</template>
<style scoped>
.MensajeDelHijo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
