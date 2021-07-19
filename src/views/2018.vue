<template>
	<div>
		<NavBar />
		<transition appear name="slide-trans">
			<div>
				<div class="year my-3">
					2018
				</div>

				<div class="gallery align-items-baseline" :class="{blur: displayOverlay}">
					<GalleryGrid @showFull='displayFull($event)' v-for="photo in Photos.eighteen" :key="photo.id" :photo="photo" :year="2018"/>
				</div>
        <transition appear name="drop">
				  <Fullsize v-if="displayOverlay" :photos="Photos" :file="source" :year="2018" @click="hideOverlay"/>
        </transition>
      </div>
		</transition>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import GalleryGrid from '@/components/GalleryGrid.vue';
import Photos from '@/assets/json/images.json';
import Fullsize from '@/components/Fullsize.vue';
export default {
	data () {
		return {
			Photos,
			displayOverlay: false,
			source: null,
		}
	},
	components: {
		NavBar,
		GalleryGrid,
		Fullsize,
	},
	methods: {
		displayFull(value) {
			this.source = value;
			this.displayOverlay = true;
		},
		hideOverlay() {
			this.displayOverlay = false;
		}
	}
}
</script>

<style scoped src="@/assets/css/gallery_grid.css">
</style>