<template>
  <Icon :icon="name" :width="size" :height="size" :color="color" />
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: "icon",
  props: {
    name: { type: String, default: "mdi:home" },
    size: { type: String, default: "24" },
    color: { type: String}
  },
  components: { Icon }
}
</script>

