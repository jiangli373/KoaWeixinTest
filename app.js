/**
 * Created by li.jiang on 2016/10/24.
 */
'use strict'
var Koa = require('koa');
var path = require('path');
var util = require('./libs/util');
var wechat = require('./wechat/g');
var wechat_file = path.join(__dirname,'./config/wechat.txt');
var config = {
	wechat: {
		appID: '',
		appSecret: '',
		token: 'wuwei',
		getAccessToken: function () {
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken: function (data) {
			data = JSON.stringify(data);
			return util.writeFileAsync(wechat_file, data);
		}
	}
}
var app = new Koa();
app.use(wechat(config.wechat))
app.listen(8000);
console.log('listening：80');