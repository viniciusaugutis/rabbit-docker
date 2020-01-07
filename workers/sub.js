var amqp = require('amqplib/callback_api');


amqp.connect('amqp://rmpbklrf:vVM089tWsQG2xa0VWRwFH_RBp4GRC240@prawn.rmq.cloudamqp.com/rmpbklrf', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var ex = 'pub_sub_meetup29';

        ch.assertExchange(ex, 'direct', { durable: false });

        ch.assertQueue('teste2', {}, function (err, q) {
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
            ch.bindQueue(q.queue, ex, 'teste2');

            ch.consume(q.queue, function (msg) {
                console.log(" [x] %s", msg.content.toString());
            }, { noAck: true });
        });
    });


})