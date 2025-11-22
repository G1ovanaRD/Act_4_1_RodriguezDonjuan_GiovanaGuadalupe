<template>
    <div class="header-container">
        <icon-element name="carbon:information" size="50"></icon-element>
        <image-element :src="logoSistema" alt="Vue logo" width="100" height="100"></image-element>
        <div class="header-porfile">
            <icon-element name="carbon:user" size="50" color="var(--blue-1)"></icon-element>
            <button-generic label="Perfil" background="var(--blue-1)"></button-generic>
        </div>
    </div>
</template>

<script>
import logoSistema from "../assets/logo-sistema.png";
import IconElement from "./Icon.ce.vue";
import ImageElement from "./Image.ce.vue";
import ButtonGeneric from "./ButtonGeneric.ce.vue";

export default {
  components: {
    IconElement,
    ImageElement,
    ButtonGeneric,
  },
  data() {
    return {
      logoSistema,
    };
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid black;
}

.header-porfile {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>