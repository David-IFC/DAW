<script setup>
defineProps({ texto: String })

</script>


<template>
    <div class="mensajes">
        <p>{{ texto }}</p>
    </div>

</template>

<style scoped>
.mensajes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>