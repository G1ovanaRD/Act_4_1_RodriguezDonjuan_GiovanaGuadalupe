<template>
  <button><texto-body label="componente Iniciar sesión"></texto-body></button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button{
  background: var(--color-primario);
}
</style>