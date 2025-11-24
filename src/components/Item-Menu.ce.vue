<template>
    <button :style="{ backgroundColor: background }">{{ label }}</button>
</template>

<script>
export default {
  name: "item-menu",
  props: {
    label:String,
    background:String
  }
};
</script>
<style scoped>
button{
    border-color: black;
    cursor: pointer;
    padding: 15px 90px;
    font-size: 18px;
    font-weight: bold;
    color: white;
}
</style>