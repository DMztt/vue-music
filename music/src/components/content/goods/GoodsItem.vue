<template>
  <div class="goods-item">
    <div class="goods-item-image">
      <img v-lazy="goodsItem.imgurl" alt="图片">
    </div>
    <div class="goods-item-text">
      <span>{{goodsItem.creator['name']}}</span>
      <span>{{goodsItem.dissname}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped >
.goods-item {
  height: 83px;
  display: flex;
  padding: 0 20px 20px 20px;
  font-size: 14px;
}
.goods-item-image {
  padding-right: 20px;
}
.goods-item-image img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
}
.goods-item-text {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.goods-item-text span:nth-child(1) {
  color: #fff;
  margin-bottom: 10px;
}

</style>
