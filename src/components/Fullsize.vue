<template>
  <div class="overlay">
		<img :src="imageLocation()" @load="fullImgLoaded" v-show="loaded">
    <div class="home-loading-status" v-show="!loaded">
      <div class="spinner-grow text-light" role="status"></div>
    </div>
	</div>
</template>

<script>
export default {
	props: ['file', 'location'],
  data () {
    return {
      loaded: false,
    }
  },
	methods: {
		imageLocation () {
      return require (`@/assets/imgs/fullsize/${this.location}/${this.file}.jpg`);
		},
    fullImgLoaded () {
      this.loaded = true;
    }
	},
}
</script>

<style scoped>

.overlay {
	background-color: rgb(0,0,0,.7);
	position: fixed;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
}

img {
	position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
	max-height: 90vh;
	max-width: 90vw;
}
</style>