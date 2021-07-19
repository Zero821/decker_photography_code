<template>
  <div class="gallery-panel">
    <img :src="thumbnail(photo.file)" @click="callOnClick()" :data-photo-id="photo.id" class="rounded">
  </div>
</template>

<script>
export default {
  props: ['photo', 'year'],
  data() {
    return {
      show: false,
    }
  },
  methods: {
    thumbnail(file) {
      return require (`@/assets/imgs/thumbnails/${this.year}/${file}`);
    },
    callOnClick() {
      this.$emit('showFull', event.target.getAttribute('data-photo-id'));
    },
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