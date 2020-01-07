var amqp = require('amqplib/callback_api');

amqp.connect('amqp://lkccxrrx:fYN0SL31Oah3_2R0TJBheM1tizLXcyQO@shrimp.rmq.cloudamqp.com/lkccxrrx', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'messages-sms';

        ch.assertQueue(q, { durable: true });
        ch.prefetch(1);
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function (msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, { noAck: true });
    });
});