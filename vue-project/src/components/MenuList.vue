<script setup>
import MenuItem from './MenuItem.vue';

defineProps({
    items: Array
})

</script>

<template>
    <div class="menu-list">
        <MenuItem v-for="producto in items" :key="producto.id" :item="producto" />
    </div>
</template>
<style scoped>
.menu-list {
    width: 100%;
    height: 70px;
    background-color: rgb(61, 82, 105);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
}
</style>
