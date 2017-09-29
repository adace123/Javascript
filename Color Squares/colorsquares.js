Vue.component('color-box', {
  template:  `
    <div :style="{backgroundColor: color}" >
    <div class="overlay">
      <div @click="emitRemove" class="removeButton">
          <h3 style="color:orange;margin: 0 auto;">Remove</h3>
      </div>
    </div>
    </div>
  `,
  props: ['color', 'id'],
  methods: {
    emitRemove() {
  this.$emit('remove-box',this.id);
    }
  }
});

new Vue({
  el: '#main',
  methods: {
    getRandomColor(){
      return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    },
    fillRandomColors() {
      this.error = false;
      if(this.numBoxes === "") {
        return;
      }
      this.colorBoxes = [];
      for(let i=0;i<this.numBoxes;i++) {
        this.colorBoxes.push(this.getRandomColor());
      }
      
    },
    changeRandomBox(){
      let colors = this.colorBoxes;
      this.colorBoxes = [];
colors[Math.floor(Math.random() * colors.length)] = this.getRandomColor();
      this.colorBoxes = colors;
    },
    changeSpeed(e) {
      this.speed = e.target.value;
      clearInterval(this.animation);
      this.animation = setInterval(this.changeRandomBox,this.speed);
    },
    deleteBox(index) {
      this.colorBoxes.splice(index,1);
      this.numBoxes = this.colorBoxes.length;
    }
  },
  data: {
    colorBoxes: [],
    numBoxes: 16,
    speed: 1500,
    animation: null
  },
  created() {
   this.fillRandomColors(32);
    this.animation = setInterval(this.changeRandomBox,this.speed);
  }
});
