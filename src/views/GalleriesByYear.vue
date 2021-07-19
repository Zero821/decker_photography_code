<template>
	<NavBar />
	<transition appear name="r-trans">
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
					<router-link to="/2018"><img src="@/assets/imgs/collages/2018.jpg" class="img-fluid"></router-link>
				</div>

			</div>

		</div>
	</transition>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
	components:{
		NavBar,
	}
}
</script>

<style scoped>
img:hover {
	opacity: 0.75;
	transition: all 0.3s ease;
}

</style>