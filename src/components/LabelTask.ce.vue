<template>
    <div class="task-container">
        <div class="icon">
            <img :src="icon" :alt="alt" :width="width" :height="height" />
        </div>
        <div class="label">
            <label>{{ text }}</label>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    text: { 
      type: String, 
      default: 'Tarea' 
    },
    icon: {
      type: String,
      required: true
    },
    alt: { 
      type: String, 
      default: 'Icon' 
    },
    width: { 
      type: String, 
      default: '50' 
    },
    height: { 
      type: String, 
      default: '50' 
    }
  }
};
</script>

<style scoped>
.task-container {
  display: flex;
  align-items: center;
  width: 500px;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 10px 25px rgba(0, 0, 0, 0.25);
}

.icon {
  position: absolute;
  left: 10px;
}

.label {
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}
</style>