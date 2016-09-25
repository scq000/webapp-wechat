//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        messages: [{
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        },
        {
            avator: {
              src: '../../images/message-avator.png'
            },
            name: '张三',
            info: '你好'
        }],
        userInfo: {},
        scrollerHeight: 0
    },
    //事件处理函数
    onLoad() {
        console.log('onLoad');
        console.log('good');

        app.getWindowHeight((height) => {
          this.setData({
            scrollerHeight: height - 50
          });
          this.update();
        });
    }
});
