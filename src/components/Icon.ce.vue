<template>
  <Icon :icon="name" :width="size" :height="size" />
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: "icon",
  props: {
    name: { type: String, default: "mdi:home" },
    size: { type: String, default: "24" }
  },
  components: { Icon }
}
</script>

