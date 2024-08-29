class EmailService {
  send(email,info) {
    console.log(`Sending email to ${email}`,info)
  }
}

module.exports = EmailService;