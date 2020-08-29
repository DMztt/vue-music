<template>
  <div id="app">
    <nav-bar />
    <tab-bar />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import NavBar from 'components/content/navBar/NavBar'
import TabBar from 'components/common/tabbar/TabBar'
export default {
  components: {
    TabBar,
    NavBar
  }
}
</script>
<style scoped>
@import './assets/css/base.css';
#app {
  height: 100vh;
  background-color: #222;
  position: relative;
}
</style>
