//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },

    onShow: function(options){
        console.log(options);
        console.log(this.globalData);
    },

    onHide: function(options){

    },

    onError: function(msg){
      console.log(msg)
    },

    globalData: "I am global data"
})