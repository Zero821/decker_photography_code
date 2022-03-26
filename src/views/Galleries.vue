<template>
  <div id="app">
    <Push width="175" :closeOnNavigation="true">
      <a id="home" href="/decker_photography">
        <span>Home</span>
      </a>
      <a id="landscapes" href="#" @click="switchCategory('landscapes')">
        <span>Landscapes</span>
      </a>
      <a id="people" href="#" @click="switchCategory('people')">
        <span>People</span>
      </a>
      <a id="wildlife" href="#" @click="switchCategory('wildlife')">
        <span>Animals &<br/>Wildlife</span>
      </a>
      <a id="street" href="#" @click="switchCategory('street')">
        <span>Street</span>
      </a>
    </Push>
    <div id="page-wrap">
      <grid-view :category="currentView" />
    </div>
  </div>
</template>

<style>
  .bm-burger-button {
    width: 32px;
    height: 20px;
  }
  .bm-item-list>*>span {
    font-weight: normal;
  }
  .bm-item-list>* {
    padding: .3rem;
  }
</style>

<script>
  import { Push } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
  import GridView from '../components/GridView.vue';
  export default {
    components: {
      Push,
      GridView,
    },
    data() {
      return {
        currentView: 'landscapes',
        collapseMenu: true,
      }
    },
    methods: {
      switchCategory(category) {
        this.currentView = category;
      }
    }
  }
</script>