const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      seucre: false,
      auth: {
        user: "lettera.technologies@gmail.com",
        pass: "emptyLetteraTech"
      }
    });
  }

  async sendCodeForConfirmResetPassword(to, code) {
    await this.transporter.sendMail({
      from: "lettera.technologies@gmail.com",
      to,
      subject: "Код подтверждения для смены пароля в IQCarpet",
      text: "",
      html: `
        <div>
          <h1>Для смены пароля в IQCarpet Вам необходимо отправить данный код</h1>
          <h3>${code}</h3>
        </div>
      `
    });
  }
}

module.exports = new MailService();
