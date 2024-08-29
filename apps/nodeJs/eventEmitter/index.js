const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email, "Thank you for your purchase!");
    databaseService.save(email, price, timestamp);
});
ticketManager.on("error", (error) => {
  console.error(`Gracefully handling our error: ${error}`);
});
console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);


const onBuy = () => {
  console.log("I will be removed soon");
};

ticketManager.on("buy", onBuy);
ticketManager.off("buy", onBuy);

ticketManager.removeAllListeners("buy");
console.log(`We have ${ticketManager.listenerCount("buy")} listeners for the buy event`);
ticketManager.buy("test@email", 20);
console.log("The last ticket was bought");