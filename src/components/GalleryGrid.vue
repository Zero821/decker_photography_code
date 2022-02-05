<template>
  <div class="gallery-panel">
    <img :src="thumbnail(photo.file)" @click="callOnClick()" :data-photo-id="photo.id" class="rounded" @load="loadTen">
  </div>
</template>

<script>
let loadedCount = 0;
export default {
  props: ['photo', 'location'],
  data() {
    return {
      show: false,
    }
  },
  watch: {
    location: function (){
      this.loadTen();
    }
  },
  methods: {
    thumbnail(file) {
      console.log(this.location);
      return require(`@/assets/imgs/thumbnails/${this.location}/${file}`);
    },
    callOnClick() {
      this.$emit('showFull', event.target.getAttribute('data-photo-id'));
    },
    loadTen() {
      if (loadedCount >= 5) {
        this.$emit('showGrid');
      }
      loadedCount++;
    }
  },
}
</script>

<style scoped>
  .overlay {
    background-color: rgb(0,0,0,.5);
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    transform: skew(-4deg)!important;
  }
  .overlay img{ 
    padding: auto;
    margin: 15%;
  }
  html, body {
	 margin: 0;
	 padding: 0;
 }
</style>