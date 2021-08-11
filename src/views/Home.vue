<template>
  <div class="home">
    <router-link to="/about">关于</router-link>
    <div v-if="show" id="content">测试文本</div>
    <button @click="imgClick">按钮</button>
  </div>
</template>

<script>
  import HelloWorld from "@/components/HelloWorld.vue"
  export default {
    name: 'About',
    components: {
      HelloWorld
    },
    created() {
      console.log("home组件创建");
    },
    destroyed() {
      console.log("home组件销毁");
    },
    activated(){
      console.log("home组件activated");
    },
    deactivated(){
      console.log("home组件deactivated");
    },
    data(){
      return{
        show:false,
      }
    },
    methods:{
      imgClick(){
        this.show=true;
        let content=document.getElementById("content").innerHTML;
        console.log(content); //null 取不到
      }
    }
  }
</script>
