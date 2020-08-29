<template>
  <div class="header">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-center">
      <slot name="center"></slot>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  height: 44px;
  background-color: #222;
  line-height: 44px;
}
.header-center {
  flex: 1;
  text-align: center;
}
.header-left , .header-right {
  width: 44px;
}
</style>
