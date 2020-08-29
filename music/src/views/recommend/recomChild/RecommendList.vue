<template>
  <div>
    <goods :goods="discList"/>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods'
export default {
  name: 'RecommendList',
  props: {
    discList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Goods
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
