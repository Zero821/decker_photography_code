<template>
	<div>
		<transition appear name="slide-trans">
			<div>
				<div class="year my-3">
					Animals/ Wildlife
				</div>

				<div class="gallery align-items-baseline" :class="{blur: displayOverlay}">
					<GalleryGrid @showFull='displayFull($event)' v-for="photo in Photos.wildlife" :key="photo.id" :photo="photo" :location="'wildlife'"/>
				</div>
        <transition appear name="drop">
				  <Fullsize v-if="displayOverlay" :photos="Photos" :file="source" :location="'wildlife'" @click="hideOverlay"/>
        </transition>
      </div>
		</transition>
	</div>
</template>

<script>
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