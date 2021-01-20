<template>
  <div id="app">
    <demo2-header></demo2-header>
    <demo2-main></demo2-main>
    <demo2-footer></demo2-footer>
  </div>
</template>

<script>
import Demo2Header from './components/demo2Header.vue'
import Demo2Main from './components/demo2Main.vue'
import Demo2Footer from './components/demo2Footer.vue'

export default {
  name: 'App',
  components: {
    Demo2Header,
    Demo2Main,
    Demo2Footer

  }
}
</script>

<style>
</style>
