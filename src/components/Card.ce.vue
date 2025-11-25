<template>
    <div class="card-container">
        <texto-body label="TAREAS" class="texto"></texto-body>
        <icon-element name="carbon:task-add" size="80" color="var(--blue-1)"></icon-element>
    </div>
</template>

<script>
import TextoBody from './Texto.ce.vue'
import IconElement from './Icon.ce.vue'
export default {
  components: {
    TextoBody,
    IconElement
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.texto{
    font-weight: bold;
    font-size: 22px;
    margin:0;
    color:var(--text-secondary);
}
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgb(12, 72, 145,0.4);
}
</style>