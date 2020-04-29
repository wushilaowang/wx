// components/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: 'name',
      observer: function(newValue, oldValue) {
        console.log("旧值:" + oldValue + ",新值:" + newValue);
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncreament() {
      // 发射的事件名,携带的参数
      this.triggerEvent('increament', {data: {name: 'win', age: 48}}, {})
    }
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    title: '标题',
    content: '内容',
  },

})
