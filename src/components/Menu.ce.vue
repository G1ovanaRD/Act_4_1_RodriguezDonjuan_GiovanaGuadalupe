<template>
    <div class="menu-container">
        <nav>
            <!-- items del menu de navegacion -->
            <item-menu label="INICIO" background="var(--blue-2)"></item-menu>
            <item-menu label="MATERIAL" background="var(--blue-2)"></item-menu>
            <item-menu label="FOROS" background="var(--blue-2)"></item-menu>
            <item-menu label="COMUNIDAD" background="var(--blue-2)"></item-menu>
            <item-menu label="CALENDARIO" background="var(--blue-2)"></item-menu>
        </nav>
    </div>
</template>

<script>
import ItemMenu from './Item-Menu.ce.vue'
export default {
  components: {
    ItemMenu
  }
};
</script>

<style scoped>
.menu-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
</style>