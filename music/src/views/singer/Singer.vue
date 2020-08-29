<template>
  <div class="singer">
    <scroll class="wrapper">
      <list-view :list="singerList" />
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
      singerList: []
    }
  },
  mounted() {
    this.getSingerList()
  },
  methods: {
    getSingerList() {
      getSingerList().then(res => {
        if(res.code === ERR_OK) {
          this.singerList = this._normalSingerList(res.data.list)
          console.log(this.singerList)
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
  }
  }
}
</script>
<style scoped>
.singer {
  height: 100vh
}
.wrapper {
  height: calc(100% - 88px);
  overflow: hidden;
}
</style>
