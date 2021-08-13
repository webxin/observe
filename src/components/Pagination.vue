<template>
  <div>
    <a @click="pre"  :class="pageNum<=1?'disabled':''"> << </a>
    <a v-for="(i,index) in pageTotal" :class="pageNum==i ?'active':''" @click="changePag(i)">
      {{i}}
    </a>
    <a @click="next" :class="pageNum>=pageTotal?'disabled':''"> >> </a>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageNum:{
      type:Number,
      default:1,
    },
    pageTotal:{
      type:Number,
      default:10,
    },
  },
  methods:{
    changePag(i){
     this.$emit("changePage",i);
    },
    pre(){
      this.$emit("pre");
    },
    next(){
      this.$emit("next");
    }
  }
}
</script>
<style lang="scss" scoped>
  .active{
    color:red;
  }
  .disabled{
    color:#ccc;
  }
</style>
