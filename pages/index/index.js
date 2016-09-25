//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        messages: [{
            avator: '1',
            name: '张三',
            info: '你好'
        }, {
            avator: '2',
            name: '张三',
            info: '你好'
        }, {
            avator: '3',
            name: '张三',
            info: '你好'
        }, {
            avator: '1',
            name: '张三',
            info: '你好'
        },{
            avator: '1',
            name: '张三',
            info: '你好'
        }, {
            avator: '2',
            name: '张三',
            info: '你好'
        }, {
            avator: '3',
            name: '张三',
            info: '你好'
        }, {
            avator: '1',
            name: '张三',
            info: '你好'
        },{
            avator: '1',
            name: '张三',
            info: '你好'
        }, {
            avator: '2',
            name: '张三',
            info: '你好'
        }, {
            avator: '3',
            name: '张三',
            info: '你好'
        }, {
            avator: '1',
            name: '张三',
            info: '你好'
        },{
            avator: '1',
            name: '张三',
            info: '你好'
        }, {
            avator: '2',
            name: '张三',
            info: '你好'
        }, {
            avator: '3',
            name: '张三',
            info: '你好'
        }, {
            avator: '1',
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
            scrollerHeight: height
          });
          this.update();
        });
    }
});
