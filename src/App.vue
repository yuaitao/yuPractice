<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <div class="home">
      <!-- template中使用环境变量 -->
      <!-- API: {{ api }} -->
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      api: process.env.VUE_APP_API
    };
  },
  created () {
    this.init();

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

//https://www.cnblogs.com/libin-1/p/5902860.html
//类型判断
// typeof   局限性 和 准确性
//数组 null undefined  正则 他都会返回object

//constructor 和 instanceof   更适用于对象或者对象原型
//instanceof 用于判断一个对象是否是某个类的实例
//constructor 用于判断对象的原型，该属性返回对创建此对象的数组函数的引用。

//  var _toString = Object.prototype.toString;
//  _toString.call(obj) === '[object Object]'

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
