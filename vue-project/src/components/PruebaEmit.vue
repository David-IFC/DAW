<script setup>
const emit = defineEmits(['datoEnviado'])


function enviarDato() {

    emit('datoEnviado', '¡Hola desde el hijo!')
}
</script>

<template>
    <div class="prueba-emit">
        <button @click="enviarDato">Enviar dato al padre</button>
    </div>
</template>

<style scoped>
.prueba-emit button {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

}

.prueba-emit {
    display: flex;
    justify-content: center;
    align-items: center;
}

.prueba-emit button:hover {
    background-color: #2980b9;
}
</style>