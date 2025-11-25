<template>
    <div class="container">
        <div class="slider-container">
            <image-element :src="carruselImge" alt="Slide Image" width="1292" height="300" class="img"></image-element>
            <icon-element name="raphael:arrowleft" size="50" class="left-icon"></icon-element>
            <icon-element name="raphael:arrowright" size="50" class="right-icon"></icon-element>
        </div>
    </div>
</template>

<script>
import ImageElement from './Image.ce.vue'
import IconElement from './Icon.ce.vue'
import carruselImge from '../assets/carrusel.jpg';
export default {
  components: {
    ImageElement,
    IconElement,
  },
  data() {
    return {
      carruselImge,
    };
  },
};
</script>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.slider-container {
    position: relative; 
    width: 1292px;      
    height: 300px; 
}

.left-icon,
.right-icon {
  position: absolute;
  top: 50%;            
  transform: translateY(-50%);
  cursor: pointer;
}

.left-icon {
  left: 5px;           
}

.right-icon {
  right: 5px;         
}

.img{
    border-radius: 15px;
    border: 1px solid var(--text-secondary);
}
</style>