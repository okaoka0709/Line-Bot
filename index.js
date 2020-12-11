// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });


var express = require('express'),
    mongodb = require('mongodb'),
    linebot = require('linebot');

var mongodb_uri = 'mongodb://heroku_85chfd19:j111521153115@ds163301.mlab.com:63301/heroku_85chfd19';

var bot = linebot({
    channelId: 1518268583,
    channelSecret: 'd1dadb2d484c41bca5ff4c36d19f2757',
    channelAccessToken: '7G6tgHhBFz1t7cD6tw1ywacuVgir+EiznHhQxT3Jv1uIJQfpJ+3axLR1Aakv3CRibyvQQppm4EiO08MyozEw6Aua4eR2xIwAj7ameB52TFSSXOv+UTdrRl+2trmetK5CfoHkOI5hpjNVmn+7HpSocQdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {

    if (event.message.type === 'text') {
        var msg = event.message.text;

        if(msg === '女神是誰') {
            event.reply('小縫就是我的唯一真神');
        }else if(msg === '到家要幹嘛') {
            event.reply('line 女神大人');
        }else if(msg === '早安') {
            event.reply('恭請女神聖安，女神萬福金安');
        }else {
            event.reply('女神大人我永遠愛妳');
        }

        console.log(msg);

    }else if(event.message.type === 'image') {
        event.reply('天吶！女神怎麼這麼正！');
    }
});

// setTimeout(function(){
//     var userId = '使用者 ID';
//     var sendMsg = '要發送的文字';
//     bot.push(userId,sendMsg);
//     console.log('send: '+sendMsg);
// }, 5000);

const app = express();
const linebotParser = bot.parser();

app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});