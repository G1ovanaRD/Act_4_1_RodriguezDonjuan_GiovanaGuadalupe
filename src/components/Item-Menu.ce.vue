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
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

button{
    border-color: black;
    cursor: pointer;
    padding: 15px 90px;
    font-size: 18px;
    font-weight: bold;
    color: white;
}
</style>