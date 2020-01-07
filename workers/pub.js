var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rmpbklrf:vVM089tWsQG2xa0VWRwFH_RBp4GRC240@prawn.rmq.cloudamqp.com/rmpbklrf', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var ex = 'pub_sub_meetup29';
        var msg = process.argv.slice(2).join(' ') || 'Olá Jorge!';

        ch.assertExchange(ex, 'direct', { durable: false });
        ch.publish(ex, 'teste-fila-2', new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function () { conn.close(); process.exit(0) }, 500);


})