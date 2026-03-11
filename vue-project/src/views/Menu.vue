<script setup>
import MenuList from '@/components/MenuList.vue';
import menu from '@/data/menu.json';
import TituloMenu from '@/components/TituloMenu.vue';

</script>

<template>
    <TituloMenu/>
    <MenuList :items="menu" />
</template>
<style scoped></style>