<template>
  <div id="recommend">
    <scroll class="content" ref="scroll">
      <recommend-swiper :recommend-list="recommendList" @imageLoad="imageLoad"/>
      <recommend-title />
      <recommend-list :disc-list="discList" />
    </scroll>
  </div>
</template>

<script>
import RecommendSwiper from './recomChild/RecommendSwiper'
import RecommendTitle from './recomChild/RecommendTitle'
import RecommendList from './recomChild/RecommendList'

import Scroll from 'components/common/scroll/Scroll'

import { getRecommend, getDiscList } from 'api/recommend.js'
import {ERR_OK} from 'api/config'

export default {
  name: 'Recommend',
  components: {
    RecommendSwiper,
    RecommendTitle,
    RecommendList,
    Scroll
  },
  data() {
    return {
      recommendList: [],
      discList: []
    }
  },
  mounted () {
    this.getRecommend()
    this.getDiscList()
  },
  methods: {
    getRecommend() {
      getRecommend().then(res => {
        if(res.code === ERR_OK) {
          this.recommendList = res.data.slider
        }
      })
    },
    getDiscList() {
      getDiscList().then(res => {
        // console.log(res)
        if(res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    imageLoad() {
      // console.log('image loading')
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#recommend {
  background-color: #222;
  height: 100vh;
}
.content {
  height: calc(100% - 88px)
}
</style>
