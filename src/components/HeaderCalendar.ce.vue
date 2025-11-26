<template>
    <div class="header">
        <!-- boton para mes anterior -->
        <button class="arrow-button">
            <img :src="right" alt="Previous" />
        </button>
        <!-- texto del mes y año -->
        <text-body label="Enero 2025" class="text"></text-body>
        <!-- boton para mes siguiente -->
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
            right, // SVG flecha derecha
            left // SVG flecha izquierda
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

@media (max-width: 768px) {
    .header {
        gap: 5px;
    }
    
    .arrow-button {
        padding: 12px;
    }
    
    .arrow-button img {
        width: 10px;
        height: auto;
    }
    
    .text {
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .arrow-button {
        padding: 8px;
    }
    
    .arrow-button img {
        width: 8px;
    }
    
    .text {
        font-size: 14px;
    }
}
</style>