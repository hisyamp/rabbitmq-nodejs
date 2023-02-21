const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (err, connection) => {
  if (err) {
    throw err;
  }
  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }
    let queueName = "technical";
    let message = "This is the messageee 111!!!";
    channel.assertQueue(queueName, {
      durable: false,
    });
    setTimeout(() => {
      console.log("waitt");
      channel.sendToQueue(queueName, Buffer.from(message));
    }, 5000);

    console.log("Message", message);
    setTimeout(() => {
      connection.close();
    }, 6000);
  });
});
