<template>
    <button :class="{ selected: isSelected }" @click="toggleSelected">{{ day }}</button>
</template>

<script>
export default {
    props: {
        day: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            isSelected: false
        };
    },
    methods: {
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
}

.selected {
    background-color: var(--calendar-selected);
    color: var(--calendar-predetermined);
}
</style>