<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Search @searchval="reciveSearch" ref="search"></Search>
  </div>
</template>
<script>
  import Search from "../components/Search";
  export default {
    name: 'About',
    components: {
      Search
    },
    created() {
      console.log("about组件创建");
    },
    destroyed() {
      console.log("about组件销毁");
    },
    activated(){
      console.log("about组件activated");
    },
    deactivated(){
      this.$refs.search.searchStr="";
      console.log("about组件deactivated");
    },
    methods:{
      reciveSearch(val){
        console.log(val);
      }
    }
  }
</script>
