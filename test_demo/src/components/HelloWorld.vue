<template>
  <div class="hello">
    <input type="text" v-model="inputTest" @input="listebKeyword">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputTest: ''
    }
  },
  methods: {
    listebKeyword (res) {
      console.log(this.inputTest)
      let a = new RegExp(/[^~!@#$%\^&*+|}{":：<>?\/;''\'w[\]\\=`}]$/)
      if (!a.test(this.inputTest)) {
        console.log('错误')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
