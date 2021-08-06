<template>
	<NavBar />
	<transition v-show="show" appear name="r-trans">
		<div class="container mt-5">

			<div class="row d-flex">

				<div class="col-12 col-md-6 mb-4 ">
					<router-link to="/2021"><img src="@/assets/imgs/collages/2021.jpg" class="img-fluid"></router-link>
				</div>

				<div class="col-12 col-md-6 mb-4">
					<router-link to="/2020"><img src="@/assets/imgs/collages/2020.jpg" class="img-fluid"></router-link>
				</div>

				<div class="col-12 col-md-6 mb-4">
					<router-link to="/2019"><img src="@/assets/imgs/collages/2019.jpg" class="img-fluid"></router-link>
				</div>

				<div class="col-12 col-md-6 mb-4">
					<router-link to="/2018"><img src="@/assets/imgs/collages/2018.jpg" class="img-fluid" @load="renderGalleries"></router-link>
				</div>

			</div>

		</div>
	</transition>   
  <div v-if="!show" class="home-loading-status">
    <div class="spinner-grow" role="status">
    </div>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
	components:{
		NavBar,
	},
  data () {
    return {
      show: false,
    }
  },
  methods: {
    renderGalleries () {
      this.show = true;
    }
  }
}
</script>

<style scoped>
img:hover {
	opacity: 0.75;
	transition: all 0.3s ease;
}

</style>