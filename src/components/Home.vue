<template>
	<div class="hello">
		<h1 @click="successTips">{{ msg }}</h1>
		<simplert :useRadius="true" :useIcon="true" ref="simplert">
		</simplert>
	</div>
</template>

<script>
import Simplert from 'vue2-simplert'
export default {
  name: 'HelloWorld',
  components:{
    Simplert
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