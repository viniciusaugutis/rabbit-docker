var amqp = require('amqplib/callback_api');

amqp.connect('amqp://lkccxrrx:fYN0SL31Oah3_2R0TJBheM1tizLXcyQO@shrimp.rmq.cloudamqp.com/lkccxrrx', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'messages-sms';
        var msg = 'Olá Travekin, você tem uma nova mensagem!';
        ch.assertQueue(q, { durable: true });  
        for(i = 0; i < 100; i++) {   
            ch.sendToQueue(q, new Buffer(msg + i));
        }
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () { conn.close(); process.exit(0) }, 500);
});