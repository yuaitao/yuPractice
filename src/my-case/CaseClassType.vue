<template>
  <div class="hello">
    <!-- <h1>{{theme}}</h1> -->
    <div v-for="item in typeObject"
         :key="item.type">
      <div>{{item.value }} -- {{ item.name}}</div>
    </div>
    <div>
      {{constructorAndInstanceof[0]}}
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      theme: '断数据类型',
      typeObject: [
        {
          type: undefined,
          value: 'undefined',
          name: ''

        },
        {
          type: null,
          value: 'null',
          name: ''
        },
        {
          type: new Object(),
          value: 'new Object()',
          name: ''
        }, {
          type: 1,
          value: '1',
          name: ''
        }, {
          type: NaN,
          value: 'NaN',
          name: ''
        },
      ],
      constructorAndInstanceof: []
    }

  },
  created () {
    this.init();

  },
  methods: {
    init () {
      this.baseType();
      this.baseConstructorAndInstanceof();
    },
    /**
     * 参考链接https://www.cnblogs.com/libin-1/p/5902860.html
     * Type有他的局限性 和 准确性
       数组 null 正则 他都会返回object
       NAN会返回number等
       typeof操作符是最常见的类型判断方法，但其有局限性，只能判断基本数据类型，
       对于数组，日期等对象无法区分，统一显示为object。
     */
    baseType () {
      this.typeObject.forEach(function (item, index) {
        let typeAttribute = typeof item.type
        item.name = typeAttribute;
      })
    },
    /**
     * constructor 和 instanceof   更适用于对象或者对象原型
       constructor 用于判断对象的原型，该属性返回对创建此对象的数组函数的引用。
       instanceof 用于判断一个对象是否是某个类的实例
     */

    baseConstructorAndInstanceof () {
      this.constructorAndInstanceof = [
        this.typeObject[3].type instanceof Number,
        this.typeObject[3].type.constructor === Number
      ]
    },
    /**
      toString()是定义在Object.prototype上的实例方法，
      所有实例对象继承了该方法，其可以返回一个对象的字符串形式。

      Object.prototype.toString
      但对象拥有自定义的toString方法，会覆盖Object.prototype.toString方法


      配合call()，改变toString方法执行时的所在的环境，可以得到对象的精确类型。

      var _toString = Object.prototype.toString;
      _toString.call(obj) === '[object Object]'
    */
    baseToStringCall () {

    }
  }
}
</script>
 