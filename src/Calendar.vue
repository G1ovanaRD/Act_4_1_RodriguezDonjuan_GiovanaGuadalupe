<script setup>
</script>

<template>
  <div>
    <header-element></header-element>
    <div class="body-container">
      <menu-element></menu-element>
      <calendar-element></calendar-element>
    </div>
  </div>
</template>

<style scoped>
.body-container {
  display: flex;
  flex-direction: column;
  padding:20px;
}
</style>