<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="change">内部改变文本</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      msg:"hello world"
    }
  },
  methods:{
    change(){
      this.msg="change world";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
