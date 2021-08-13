<template>
  <div>
    <router-link to="/about">关于</router-link>
    <Pagination :pageNum="params.pageNum" :pageTotal="params.pageTotal" @changePage="changePage" @pre="pre" @next="next">
    </Pagination>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination.vue"
  export default {
    name: 'About',
    components: {
      Pagination
    },
    data(){
      return{
        params:{
          pageNum:1, //当前页
          pageSize:10, //条数
        },
        list:[], //后台返回列表
        pageTotal:0, //后台返回总页数
        pageRow:0,  //后台返回总条数
      }
    },
    created() {
      this.getData();
    },
    methods:{
      getData(){
        console.log(this.params.pageNum)
        var that=this;
        that.list=[{name:"文本",age:15},{name:"wenzi2",age:14}];
        that.pageTotal=10;
        that.pageRow=100;
      },
      changePage(i){
        this.params.pageNum=i;
        this.getData();
      },
      pre(){
        if(this.params.pageNum>1){
          --this.params.pageNum;
          this.getData();
        }
      },
      next(){
        if(this.params.pageNum<this.pageTotal){
          ++this.params.pageNum;
          this.getData();
        }
      }
    }
  }
</script>
<style>
</style>
