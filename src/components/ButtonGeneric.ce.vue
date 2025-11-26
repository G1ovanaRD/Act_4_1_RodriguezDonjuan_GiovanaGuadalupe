<template>
    <!-- Boton generico reutilizable con color personalizable -->
    <button :style="{ backgroundColor: background }">{{ label }}</button>
</template>
<script>
export default {
  name: "ButtonGeneric",
  props: {
    label: { type: String, default: "texto" }, // Texto del boton
    background: { type: String, default: "var(--blue-1)" } // Color de fondo
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

button {
  background-color: var(--blue-1);
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 4px;
  font-size: 18px;
  font-weight:500;
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
}

@media (max-width: 768px) {
  button {
    padding: 8px 30px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  button {
    padding: 6px 20px;
    font-size: 14px;
  }
}

</style>