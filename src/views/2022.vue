<template>
	<div>
		<NavBar />
		<transition v-show="!hideGrid" appear name="slide-trans">
			<div>
				<div class="year my-3">
					2022
				</div>

				<div class="gallery align-items-baseline" :class="{blur: displayOverlay}">
					<GalleryGrid @showFull='displayFull($event)' @showGrid='unhideGrid()' v-for="photo in Photos.twentyTwo" :key="photo.id" :photo="photo" :year="2022"/>
				</div>
				<transition appear name="drop">
					<Fullsize v-if="displayOverlay" :photos="Photos" :file="source" :year="2022" @click="hideOverlay"/>
				</transition>
			</div>
		</transition>
    <div v-if="hideGrid" class="home-loading-status">
      <div class="spinner-grow" role="status">
      </div>
    </div>
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
      hideGrid: true,
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
		},
    unhideGrid() {
      this.hideGrid = false;
    }
	}
}
</script>

<style scoped src="@/assets/css/gallery_grid.css">
</style>