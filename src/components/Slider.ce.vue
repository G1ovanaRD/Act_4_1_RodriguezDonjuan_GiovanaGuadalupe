<template>
    <div class="container">
        <div class="slider-container">
            <img :src="carruselImge" alt="Slide Image" class="img" />
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
    width: 100%;
    max-width: 100%;
    overflow: hidden;
}

.slider-container {
    position: relative; 
    width: 1292px;
    max-width: calc(100vw - 20px);      
    height: 300px;
}

.left-icon,
.right-icon {
  position: absolute;
  top: 50%;            
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 1300px) {
    .slider-container {
        height: 250px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 5px;
    }
    
    .slider-container {
        height: 200px;
    }
    
    .left-icon,
    .right-icon {
        font-size: 30px;
    }
}

@media (max-width: 480px) {
    .slider-container {
        height: 150px;
    }
    
    .img {
        border-radius: 10px;
    }
    
    .left-icon {
        left: 2px;
    }
    
    .right-icon {
        right: 2px;
    }
}
</style>