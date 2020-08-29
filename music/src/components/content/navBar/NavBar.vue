<template>
  <div class="nav-bar">
    <Header>
      <div slot="center" class="header-center">
        <div class="image"><img src="~assets/images/image/default.png" alt=""></div>
        <div class="text">Chicken Music</div>
      </div>
    </Header>
  </div>
</template>

<script>
import Header from 'components/common//header/Header'
export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.nav-bar {
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
}
.header-center {
  display: flex;
  justify-content: center;
}
.header-center .image img{
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 4px;
}
.header-center .text {
  font-size: 18px;
  color: #ffcd32
}
</style>
