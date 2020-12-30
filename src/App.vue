<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->

    <CaseClassType></CaseClassType>

    <!-- template中使用环境变量 -->
    <!-- API: {{ api }} -->

  </div>
</template>
<script>
import axios from "axios";
import CaseClassType from "../src/my-case/CaseClassType"

export default {
  name: 'app',
  data () {
    return {
      api: process.env.VUE_APP_API
    };
  },
  components: {
    CaseClassType: CaseClassType
  },
  created () {
    // this.init();

    // this.init();
  },
  mounted () {
  },
  methods: {
    init () {

      //   console.log(this.$enasd.getListAPI('tiaos'))
    }
    // async init () {
    //   let request = await this.$axios.fetchGet("/pet/findByStatus", "tiaos");
    //   console.log(request)
    // }
  }
}
// created:html加载完成之前，执行。执行顺序:父组件-子组件
// mounted:html加载完成后执行。执行顺序:子组件-父组件
// methods:事件方法执行。
// watch:去监听一个值的变化，然后执行相对应的函数。
// computed:computed是计算属性，也就是依赖其它的属性计算所得出最后的值






</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
