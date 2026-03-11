<script setup>
defineProps({
    item: Object
})

</script>

<template>
    <div class="card">
        <h3>
            {{ item.name }}
        </h3>
        <p>Categoria:{{ item.category }} </p>
        <p>Precio:{{ item.price }}€ </p>
    </div>

</template>
<style scoped></style>
