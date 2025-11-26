<template>
  <!-- Componente simple de texto reutilizable -->
  <p>{{ label }}</p>
</template>

<script>
export default {
  props: {
    label: String // Texto a mostrar
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

</style>
