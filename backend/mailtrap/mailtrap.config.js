import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN is required to send email.");
}

const client = new MailtrapClient({
  token: TOKEN,
  sandbox: true,
  testInboxId: 4962814,
});

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "ifechukwuikenta@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(
    console.log,
    (error) => {
      const message = error instanceof Error ? error.message : "Unknown Mailtrap error";
      console.error("Mailtrap send failed:", message);
    },
  );