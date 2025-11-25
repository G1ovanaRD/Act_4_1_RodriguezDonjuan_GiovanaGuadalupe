<script setup>
import logoSistema from "../assets/logo-sistema.png";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCalendar = () => {
  router.push('/calendar');
};
</script>

<template>
  <div>
    <header-element></header-element>
    <div class="body-container">
      <menu-element></menu-element>
      <slider-element></slider-element>
      <!-- cards -->
      <div class="cards-container">
        <div class="cursos-button">
          <texto-body label="CURSOS INSCRITOS" class="texto"></texto-body>
        </div>
        <card-element class="card" @click="goToCalendar"></card-element>
        <div class="card">
          <div class="calendar">
            <p class="texto">CALENDARIO</p>
            <header-calendar></header-calendar>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <footer-element></footer-element>
  </div>
</template>

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
  cursor: pointer;
}

.calendar{
    /* height: 100%; */
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgb(12, 72, 145,0.4);
  text-align: center;
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
  margin: 0;
  padding: 0;
}

</style>
