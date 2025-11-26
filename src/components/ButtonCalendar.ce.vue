<template>
    <!-- Boton de dia del calendario con estado seleccionable -->
    <button :class="{ selected: isSelected }" @click="toggleSelected">{{ day }}</button>
</template>

<script>
export default {
    props: {
        day: {
            type: Number,
            default: 1 // Numero del dia
        }
    },
    data() {
        return {
            isSelected: false // Estado de seleccion
        };
    },
    methods: {
        // cambia el estado de seleccion al hacer click
        toggleSelected() {
            this.isSelected = !this.isSelected;
        }
    }
};
</script>

<style scoped>

button {
    border: none;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    background-color: white;
    width: 100%;
    aspect-ratio: 1;
}

.selected {
    background-color: var(--calendar-selected);
    color: var(--calendar-predetermined);
}

@media (max-width: 768px) {
    button {
        padding: 15px;
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    button {
        padding: 10px;
        font-size: 14px;
        border-radius: 10px;
    }
}
</style>