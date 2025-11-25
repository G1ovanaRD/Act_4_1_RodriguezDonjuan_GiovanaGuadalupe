<template>
    <button>{{ day }}</button>
</template>

<script>
export default {
    props: {
        day: {
            type: Number,
            default: 1
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
</style>