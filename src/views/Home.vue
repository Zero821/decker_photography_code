<template>
  <transition appear name="r-trans">
  <div>
    <div class="bgimg-1">
      <div class="row">
        <div class="logo-center col-md-4 col-sm-6 col-12">
          <span class="d-none d-md-block" id="title-div">
            Decker | Photography
          </span>
          <div class="d-md-none d-block" id="title-div">
            Decker<br>Photography
          </div>
        </div>
        <div class="links-center col-md-4 col-sm-6 col-12 mt-3">
        <router-link class="text-white text-decoration-none" to="/years" >Galleries</router-link>
          •
          <a href="https://www.instagram.com/zero_821" class="text-white text-decoration-none" target="_blank"><i class="fab fa-instagram"></i></a>
          •
          <a href="https://www.facebook.com/deckera" class="text-white text-decoration-none" target="_blank"><i class="fab fa-facebook-square"></i></a>
        </div>
      </div>
    </div>
  </div> 

  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style scoped src="@/assets/css/parallax.css"></style>