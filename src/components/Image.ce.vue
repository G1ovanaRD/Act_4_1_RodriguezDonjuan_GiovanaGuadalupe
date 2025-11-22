<template>
    <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  name: "image",
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    width: { type: String, default: "100" },
    height: { type: String, default: "100" }
  }
};
</script>