<script setup>
// Componente raiz de la aplicacion
</script>

<template>
  <!-- Router view para renderizar las vistas segun la ruta -->
  <router-view />
</template>

<style scoped>
</style>

<style scoped>
.body-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.cards-container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card{
  width: 49%;
}

.cursos-button {
  display:flex;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgb(12, 72, 145,0.4);
}

.texto{
  font-size: 22px;
  font-weight: bold;
  color:var(--text-secondary);
  cursor:pointer;
}

</style>
