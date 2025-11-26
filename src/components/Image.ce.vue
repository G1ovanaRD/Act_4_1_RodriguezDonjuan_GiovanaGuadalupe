<template>
    <!-- Componente wrapper para imagenes -->
    <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  name: "image",
  props: {
    src: { type: String, required: true }, // URL de la imagen
    alt: { type: String, default: "" }, // Texto alternativo
    width: { type: String, default: "100" }, // Ancho
    height: { type: String, default: "100" } // Alto
  }
};
</script>