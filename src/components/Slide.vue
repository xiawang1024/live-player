<template>
  <slide ref="slide" :autoPlay="isAutoPlay" :loop="isLoop" :showDot="isShowDot" :interval="interval" :threshold="threshold" :speed="speed">
    <div v-for="item in data">
      <a :href="item.linkUrl">
        <img :src="item.picUrl">
      </a>
    </div>
  </slide>
</template>

<script type="text/ecmascript-6">
import Slide from 'base/slide/index.vue'
const items = [
  [
    {
      linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
      picUrl:
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
      id: 11351
    },
    {
      linkUrl:
        'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
      picUrl:
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
      id: 11372
    }
  ],
  [
    {
      linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
      picUrl:
        'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
      id: 11378
    },
    {
      linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
      picUrl:
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
      id: 11375
    },
    {
      linkUrl:
        'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
      picUrl:
        'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
      id: 11287
    }
  ]
]
const COMPONENT_NAME = 'slide-render'
export default {
  name: COMPONENT_NAME,
  components: {
    Slide
  },
  computed: {
    data() {
      return items[this.index]
    }
  },
  data() {
    return {
      index: 0,
      isAutoPlay: true,
      isLoop: true,
      isShowDot: true,
      speed: 400,
      threshold: 0.3,
      interval: 4000
    }
  },
  methods: {},
  watch: {
    index() {
      this.$refs.slide.update()
    }
  }
}
</script>
<style lang='scss' scoped>
</style>