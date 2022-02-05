<template>
	<div class="mt-4">
		<transition appear name="slide-trans">
			<div>
				<div class="year my-3">
					{{capitalCategory}}
				</div>
				<div class="gallery align-items-baseline" :class="{blur: displayOverlay}">
					<GalleryGrid @showFull='displayFull($event)' v-for="photo in PhotoList" :key="photo.id" :photo="photo" :location="category"/>
				</div>
        <transition appear name="drop">
				  <Fullsize v-if="displayOverlay" :photos="PhotoList" :file="source" :location="category" @click="hideOverlay"/>
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
  props: ['category'],
	data () {
		return {
			Photos,
			displayOverlay: false,
			source: null,
      PhotoList: [],
		}
	},
	components: {
		GalleryGrid,
		Fullsize,
	},
  created: function () {
    this.changeCategory();
  },
  watch: {
    category: function () {
      this.changeCategory();
    }
  },
  computed: {
    capitalCategory () {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1);
    }
  },
	methods: {
		displayFull(value) {
			this.source = value;
			this.displayOverlay = true;
		},
		hideOverlay() {
			this.displayOverlay = false;
		},
    changeCategory(){
      if (this.category == 'landscapes') {
        this.PhotoList = this.Photos.landscapes;
      }
      if (this.category == 'wildlife') {
        this.PhotoList = this.Photos.wildlife;
      }
      if (this.category == 'people') {
        this.PhotoList = this.Photos.people;
      }
      if (this.category == 'street') {
        this.PhotoList = this.Photos.street;
      }
    }
	}
}
</script>

<style scoped src="@/assets/css/gallery_grid.css">
</style>