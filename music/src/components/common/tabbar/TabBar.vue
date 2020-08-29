<template>
  <div class="tabbar">
    <div class="tabbar-item"
        v-for="(item,index) in titles"
        :key="index"
        @click="itemclick(index)">
        <span :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    titles: {
      type: Array,
      default () {
        return ['推荐', '歌手', '排行', '搜索']
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
      path: '/rank'
    }
  },
  methods: {
    itemclick (index) {
      this.currentIndex = index
      switch (index) {
        case 0:
          this.path = '/recommend'
          break
        case 1:
          this.path = '/singer'
          break
        case 2:
          this.path = '/rank'
          break
        case 3:
          this.path = '/search'
          break
      }
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar {
  height: 44px;
  background-color: #222;
  display: flex;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
}
.tabbar-item {
  flex: 1;
}
.tabbar-item span {
  padding: 6px;
}
.active {
  color: #ffcd32;
  border-bottom: 2px solid #ffcd32;
}
</style>
