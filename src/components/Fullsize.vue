<template>
  <div class="overlay">
		<img :src="imageLocation()" >
	</div>
</template>

<script>
export default {
	props: ['file', 'year'],
	methods: {
		imageLocation () {
      return require (`@/assets/imgs/fullsize/${this.year}/${this.file}.jpg`);
		}
	}
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