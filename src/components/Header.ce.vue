<template>
    <div class="header-container">
        <!-- Icono de informacion -->
        <icon-element name="material-symbols-light:info-outline-rounded" size="50"></icon-element>
        <!-- Logo del sistema -->
        <image-element :src="logoSistema" alt="Vue logo" width="100" height="100"></image-element>
        <!-- Seccion de perfil de usuario -->
        <div class="header-porfile">
            <icon-element name="et:profile-female" size="50" color="var(--blue-1)"></icon-element>
            <button-generic label="PERFIL" background="var(--blue-1)"></button-generic>
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
      logoSistema, // Logo importado
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
  box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.151);
}

.header-porfile {
  display: flex;
  gap: 10px;
  align-items: center;
}

@media (max-width: 768px) {
  .header-container {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .header-container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
}
</style>