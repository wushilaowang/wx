// components/tabcontrol/tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabControlTitle: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive: false,
    currentIndex: 0,
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick(event) {
      console.log(event)
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      });
      this.triggerEvent('tabClick', {item: event.currentTarget.dataset}, {})
    },
    counterIncreamnet(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
