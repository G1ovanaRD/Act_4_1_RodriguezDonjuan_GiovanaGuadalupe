<template>

    <div class="calendario-container">
        <div>
            <header-calendar text="Enero"></header-calendar>
            <div class="calendar-grid">
                <button-calendar :day="28" class="btn-dis"></button-calendar>
                <button-calendar :day="29" class="btn-dis"></button-calendar>
                <button-calendar :day="30" class="btn-dis"></button-calendar>
                <button-calendar :day="31" class="btn-dis"></button-calendar>
                <button-calendar :day="1"></button-calendar>
                <button-calendar :day="2"></button-calendar>
                <button-calendar :day="3"></button-calendar>
                <button-calendar :day="4"></button-calendar>
                <button-calendar :day="5"></button-calendar>
                <button-calendar :day="6"></button-calendar>
                <button-calendar :day="7" class="today"></button-calendar>
                <button-calendar :day="8"></button-calendar>
                <button-calendar :day="9"></button-calendar>
                <button-calendar :day="10"></button-calendar>
                <button-calendar :day="11"></button-calendar>
                <button-calendar :day="12"></button-calendar>   
                <button-calendar :day="13"></button-calendar>
                <button-calendar :day="14"></button-calendar>
                <button-calendar :day="15"></button-calendar>
                <button-calendar :day="16"></button-calendar>
                <button-calendar :day="17"></button-calendar>
                <button-calendar :day="18"></button-calendar>
                <button-calendar :day="19"></button-calendar>
                <button-calendar :day="20"></button-calendar>
                <button-calendar :day="21"></button-calendar>
                <button-calendar :day="22"></button-calendar>
                <button-calendar :day="23"></button-calendar>
                <button-calendar :day="24"></button-calendar>
                <button-calendar :day="25"></button-calendar>
                <button-calendar :day="26"></button-calendar>
                <button-calendar :day="27"></button-calendar>
                <button-calendar :day="28"></button-calendar>
                <button-calendar :day="29"></button-calendar>
                <button-calendar :day="30"></button-calendar>
                <button-calendar :day="1" class="btn-dis"></button-calendar>
            </div>
            <div class="more">
                <button-generic label="Listo" background="var(--blue-3)" @click="addTask"></button-generic>
            </div>
        </div>
        <div class="calendar">
            <label-task v-for="(task, index) in tasks" :key="index" :icon="task.icon" :text="task.text"></label-task>
            <div class="more">
                <button-generic label="VER MÁS"></button-generic>
            </div>
            <button-generic label="RESERVAR TUTORÍA" background="var(--blue-3)" class="tutoria"></button-generic>
        </div>
    </div>
</template>

<script>
import ButtonCalendar from './ButtonCalendar.ce.vue';
import HeaderCalendar from './HeaderCalendar.ce.vue';
import ButtonGeneric from './ButtonGeneric.ce.vue';
import LabelTask from './LabelTask.ce.vue';
import bellFill from '../assets/bell_fill.svg';
import bell from '../assets/bell.svg';
import Footer from './Footer.ce.vue';

export default {
  components: {
    ButtonCalendar,
    HeaderCalendar,
    ButtonGeneric,
    LabelTask,
    Footer
  },
  data() {
    return {
      bellFill,
      bell,
      tasks: [
        { icon: bellFill, text: 'Ejercicios matemáticas' },
        { icon: bellFill, text: 'Tarea bases de datos' },
        { icon: bell, text: 'Tutoría academica' }
      ]
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        icon: this.bell,
        text: 'Agregaste nueva tarea'
      });
    }
  }
};
</script>

<style scoped>
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 10px;
    gap:5px;
}

.btn-dis {
    color: var(--text-tertiary);
    pointer-events: none;
}

.today {
    border:solid 3px var(--calendar-predetermined);
    color: var(--calendar-predetermined);
    font-weight: bold;
    border-radius: 15px;
}

.selected {
    background-color: var(--calendar-selected);
    color:var(--calendar-predetermined);
}

.calendario-container {
    display: flex;
    gap: 40px;
    padding: 20px 80px;
}

.calendar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}

.more {
    width: 500px;
    display: flex;
    justify-content: end;
}

.tutoria{
    font-size: 14px;
    padding: 25px 70px;
    border-radius: 10px;
}
</style>