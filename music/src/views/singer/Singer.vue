<template>
  <div class="singer">
    <div class="list-side-nav" >
        <div
            class="list-side-item"
            @touchstart.stop.prevent="($event) => {sideNavClick($event, index)}"
            v-for="(item, index) in listTitle"
            :key="index"
            :data-index="index"
            @touchmove.prevent="($event) => {onTouchMove($event,index)}"
            :class="{active: currentIndex === index}"
            >
            {{item}}
            </div>
    </div>
    <scroll class="wrapper" ref="scroll" :probe-type="probeType">
      <list-view :list="singerList" ref="list_view"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import ListView from 'components/content/listView/ListView'

import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'

const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10

export default {
  name: 'Singer',
  components: {
    Scroll,
    ListView
  },
  data() {
    return {
      singerList: [],
      probeType: 3,
      currentIndex: 0,
      obj: {
        name: 'haha',
        age: 18
      }
    }
  },
  mounted() {
    this.getSingerList()
  },
  computed: {
    listTitle() {
      return this.singerList.map(item => {
        return item.title.substr(0,1)
      })
    }
  },
  methods: {
    getSingerList() {
      getSingerList().then(res => {
        if(res.code === ERR_OK) {
          this.singerList = this._normalSingerList(res.data.list)
          // console.log(this.singerList)
        }
      })
    },
    _normalSingerList(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if(index < HOT_SINGER_LEN) {
          map['hot'].items.push({
            id : item.Fsinger_mid,
            name : item.Fsinger_name,
            avator: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
          })
        }

        let key = item.Findex
        if(!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }

        map[key].items.push({
          id : item.Fsinger_mid,
          name : item.Fsinger_name,
          avator: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
        })
      })
      //为了得到有序列表，我们需要处理map数据
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if(val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        }else if(val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
  },
  sideNavClick(e,index) {
    console.log(e,index)
    let listChild = this.$refs.list_view.$el.children[index]
    this.$refs.scroll.scrollToElement(listChild,500)
    this.currentIndex = index
  },
  onTouchMove(e,index) {
    console.log(e,index)
    // this.currentIndex = index
  }
  }
}
</script>
<style scoped>
.singer {
  height: 100vh;
}
.wrapper {
  height: calc(100% - 88px);
  overflow: hidden;
}
.list-side-nav {
  position: fixed;
  top: 50%;
  right: 0;
  color: rgba(255,255,255,0.5);
  font-size: 12px;
  z-index: 9999;
  border-radius: 10px;
  padding: 20px 0;
  background: rgba(0,0,0,0.3);
  transform: translate(0, -38%);
}
.list-side-item {
  padding: 3px;
}
.active {
  color: #ffcd32
}
</style>
