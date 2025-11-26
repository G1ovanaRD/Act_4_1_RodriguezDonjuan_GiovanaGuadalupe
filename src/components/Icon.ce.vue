<template>
  <!-- wrapper para iconos de Iconify -->
  <Icon :icon="name" :width="size" :height="size" :color="color" />
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: "icon",
  props: {
    name: { type: String, default: "mdi:home" }, // Nombre del icono de Iconify
    size: { type: String, default: "24" }, // Tamano en pixeles
    color: { type: String} // Color del icono
  },
  components: { Icon }
}
</script>

