<template>
  <transition appear name="r-trans">
  <div>
    <div v-if="show" class="bgimg-1">
      <transition appear name="home-fade">
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
      </transition>
    </div>
    <!--img preloader -->
    <div style="display:none;">
      <img src="@/assets/imgs/fullsize/2018/4.jpg" @load="renderHomePage">
      <img src="@/assets/imgs/fullsize/2019/12.jpg" @load="renderHomePage">
      <img src="@/assets/imgs/fullsize/2021/15.jpg" @load="renderHomePage">
    </div>
    <div v-if="!show" class="home-loading-status">
      <div class="spinner-grow" role="status">
      </div>
    </div>
  </div> 

  </transition>
</template>

<script>
let backgroundLoadCount = 0;
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    renderHomePage () {
      if (backgroundLoadCount >= 2) {
        this.show = true;
      }
      backgroundLoadCount++;
    }
  }
}
</script>

<style scoped src="@/assets/css/parallax.css"></style>
<style>
.home-loading-status {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%);
}
</style>