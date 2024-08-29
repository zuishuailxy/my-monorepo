const TicketManager = require("./ticketManager");

const ticketManager = new TicketManager(10);

ticketManager.on("buy", (email, price, supply) => {
  console.log(`Email received: ${email}, price: ${price}, supply: ${supply}`);
});


ticketManager.buy("test@email.com", 20);
ticketManager.buy("test@email.com", 10);