<template>
  <swiper>
      <swiper-item v-for="(item,index) in recommendList" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'RecommendSwiper',
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if(!this.checkLoad) {
        this.$emit('imageLoad')
        this.checkLoad = true
      }

    }
  }
}
</script>

<style>

</style>
