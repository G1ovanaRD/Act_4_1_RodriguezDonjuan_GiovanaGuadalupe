<script setup>
import logoSistema from "./assets/logo-sistema.png";
</script>

<template>
  <div>
    <texto-body label="Componente TEXTO" size="500px"></texto-body>
    <boton-login></boton-login>
    <input-text></input-text>
    <icon-element name="carbon:user-avatar" size="32"></icon-element>
    <image-element :src="logoSistema" alt="Vue logo" width="100" height="100"></image-element>
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

</style>
