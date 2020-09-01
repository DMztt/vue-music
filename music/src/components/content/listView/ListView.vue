<template>
  <div class="list-view">
    <div v-for="(group,index) in list" :key="index" >
      <h4 class="list-view-title">{{group.title}}</h4>
      <div v-for="(item,i) in group.items" :key="i" class="group-item" ref="group">
        <img class="group.image" :src="item.avator" alt="" @load="imageLoad">
        <span>{{item.name}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      count: 0,
      num: 109
    }
  },
  mounted() {
    // this.imageLength()
  },
  // watch: {
  //   list: {
  //     deep: true,
  //     handler: function (newVal) {
  //       this.num = this.list.map(val => {
  //       return this.num += val.items.length
  //     })
  //     }
  //   }
  // },
  methods: {
    imageLoad() {
      console.log('loading'+ this.num)
      if(this.num === ++this.count) {
        this.$emit('singerImgLoad')
        console.log('----------------')
      }
    },
    // imageLength() {
    //   return this.list.map(val => {
    //     return this.num += val.items.length
    //   })
    // }
  }
}
</script>

<style scoped>
.list-view-title {
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  background: #333
}
.group-item {
  display: flex;
  padding: 20px 0 0 30px;
  line-height: 35px;
  align-items: center;
}
.group-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: text-top;
}
.group-item span {
  font-size: 14px;
  margin-left: 20px;
  color: rgba(255,255,255,0.5);
}

</style>
