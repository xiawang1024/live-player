<template>
	<div class="hello">
		<h1 @click="successTips">{{ msg }}</h1>
		<simplert :useRadius="true" :useIcon="true" ref="simplert">
		</simplert>
		<live-player :src='src' :poster='poster'></live-player>
	</div>
</template>

<script>
import Simplert from 'vue2-simplert'
import LivePlayer from 'base/livePlayer/index'
export default {
  name: 'HelloWorld',
  components:{
	Simplert,
	LivePlayer
  },
  data() {
	  return {
		  src:'http://ivi.bupt.edu.cn/hls/chchd.m3u8',
		  poster:'https://a.weixin.hndt.com/h5/1066/live/livePost.jpg'
	  }
  },
  props: {
    msg: String
  },
  methods:{
    successTips() {
      let obj = {
        title: '报名成功',
        type: 'success',
        onClose: this._onClose,
        customCloseBtnText:'关闭'
      }
      this.$refs.simplert.openSimplert(obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>