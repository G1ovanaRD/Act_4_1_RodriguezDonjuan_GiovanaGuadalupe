<script setup>
// Vista completa del calendario
</script>

<template>
  <div>
    <!-- Header principal -->
    <header-element></header-element>
    <div class="body-container">
      <!-- Menu de navegacion -->
      <menu-element></menu-element>
      <!-- Componente de calendario completo con tareas -->
      <calendar-element></calendar-element>
    </div>
    <!-- Footer -->
    <footer-element></footer-element>
  </div>
</template>

<style scoped>
.body-container {
  display: flex;
  flex-direction: column;
  padding:20px;
}
</style>