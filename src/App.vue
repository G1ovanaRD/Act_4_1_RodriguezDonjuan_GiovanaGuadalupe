<script setup>
import logoSistema from "./assets/logo-sistema.png";
</script>

<template>
  <div>
    <header-element></header-element>
    <div class="body-container">
      <menu-element></menu-element>
      <slider-element></slider-element>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.body-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

</style>
