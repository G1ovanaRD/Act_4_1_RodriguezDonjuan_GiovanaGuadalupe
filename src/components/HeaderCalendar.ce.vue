<template>
    <div class="header">
        <button class="arrow-button">
            <img :src="right" alt="Previous" />
        </button>
        <text-body label="Enero 2025" class="text"></text-body>
        <button class="arrow-button">
            <img :src="left" alt="Next" />
        </button>
    </div>
</template>

<script>
import right from '../assets/arrowright.svg';
import left from '../assets/arrowleft.svg';
import TextBody from './Texto.ce.vue';
export default {
    components: {
        TextBody
    },
    props: {
        text: {
            type: String,
            default: 'Calendar Header'
        }
    },
    data() {
        return {
            right,
            left
        };
    }
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--text-secondary);
    padding-bottom: 5px;
}

.arrow-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    border-radius: 18px;
    border:none;
    background-color: white;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.text{
    font-size: 20px;
    font-weight: bold;
    color:black;
}
</style>