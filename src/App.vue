<template>
  <div id="app" class="app">
      <canvas id="canvasGame" width="400" height="480" />
  </div>
</template>

<script>
import goldMine from "./assets/gold-mine.png";
import grass from "./assets/grass.png";

export default {
  name: 'App',
  methods: {
    generateCanvasImage() {
      const canvas = document.getElementById('canvasGame');
      const context  = canvas.getContext('2d');
      const canvasGoldMine = new Image();
      const canvasGrass = new Image();
      canvasGrass.src = grass;
      canvasGoldMine.src = goldMine;
      
      canvasGoldMine.onload = function() {
        context.drawImage(canvasGoldMine,   canvas.width / 2 - canvasGoldMine.width / 2, canvas.height / 2 - canvasGoldMine.height / 2);
          context.drawImage(canvasGrass, canvas.width - canvasGrass.width - 0, canvas.height - canvasGrass.height - 0);
      }
    }
  },
  mounted: function() {
    this.generateCanvasImage();

  },
  components: {
  }
}
</script>


<style lang="scss">
  .app {
    width: 853px;
    height: 480px;
    margin:0 auto;
    
  }
</style>