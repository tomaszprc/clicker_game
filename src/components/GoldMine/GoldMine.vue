<template>
    <canvas 
        id="canvasGame" 
        width="400" 
        height="460" 
        v-on:click="mineClick"
    />
</template>

<script>

import goldMine from "../../assets/gold-mine.png";
import grass from "../../assets/grass.png";

export default {
    data: function() {
        return {
            clickAreaX: 130,
            clickAreaY: 180,
            clickAreaWidth: 140,
            clickAreaHeight: 140
        }
    },
    methods: {
       getCursorPosition: function(canvas,ev) {
           const rect = canvas.getBoundingClientRect();
           const clickAreaX = ev.clientX - rect.left;
           const clickAreaY = ev.clientY - rect.top;

           return {
               clickAreaX, clickAreaY
            };
       },
       mineClick: function(event){
            const canvas = document.getElementById('canvasGame');

            let {clickAreaX , clickAreaY} = this.getCursorPosition(canvas, event);
            
            const clickPosition = {
                positionX: this.clickAreaX,
                positionY: this.clickAreaY,
                width: this.clickAreaWidth,
                height: this.clickAreaHeight
            }
  
            if( clickPosition.positionX <= clickAreaX 
                && clickAreaX <= clickPosition.positionX+clickPosition.width 
                && clickPosition.positionY <= clickAreaY 
                && clickAreaY <= clickPosition.positionY+clickPosition.height
            ) 
            {
                this.$store.dispatch("click");
            }
       },
    },
    mounted: function() {
        const canvas = document.getElementById('canvasGame');
        const context  = canvas.getContext('2d');
        const canvasGoldMine = new Image();
        const canvasGrass = new Image();
        const box = {
            clickAreaX: this.clickAreaX,
            clickAreaY: this.clickAreaY,
            w: this.clickAreaWidth,
            h: this.clickAreaHeight
        }

        canvasGrass.src = grass;
        canvasGoldMine.src = goldMine;
        
        canvasGoldMine.onload = function() {
            context.drawImage(canvasGoldMine,   canvas.width / 2 - canvasGoldMine.width / 2, canvas.height / 2 - canvasGoldMine.height / 2);
            context.drawImage(canvasGrass, canvas.width - canvasGrass.width - 0, canvas.height - canvasGrass.height - 0);
            context.fillRect(box.clickAreaX, box.clickAreaY, box.w, box.h);
        }
    }
}
</script>