<template>
  <Header />

  <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>

  <Footer />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  .slide-enter-active,
  .slide-leave-active{
    transition: opacity .5s, transform .5s;
  }

  .slide-enter-from,
  .slide-leave-to{
    opacity: 0;
    transform: translateX(40%);
  }
</style>